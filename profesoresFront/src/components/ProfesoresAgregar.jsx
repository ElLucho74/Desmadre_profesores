import React, { useState } from 'react';
import axios from 'axios';
import { Row, Container, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

const ProfesoresAgregar = () => {
  const initialState = {
    clave: '',
    nombre: '',
    apellidos: '',
    fNacimiento: '',
    email: '',
    sexo: '',
    estadoCivil: '',
    tCasa: '',
    curp: '',
    tCelular: '',
    calle: '',
    colonia: '',
    cp: '',
    municipio: '',
    estado: '',
    // estatus: ''
  }
  const [datos, setDatos] = useState(initialState)
  const {clave, nombre, apellidos, fNacimiento, email, sexo, estadoCivil, tCasa, curp, tCelular, calle, colonia, cp, municipio, estado} = datos
  const handleChange = e =>{
    let {name, value} = e.target
    setDatos({...datos, [name]:value})
  }
  const navigate = useNavigate()
  const handleSubmit = async(e) =>{
    e.preventDefault()
    const {clave, nombre, apellidos, fNacimiento, email, sexo, estadoCivil, tCasa, curp, tCelular, calle, colonia, cp, municipio, estado} = datos
    const formData = new FormData()

    formData.append("clave",clave)
    formData.append("nombre",nombre)
    formData.append("apellidos",apellidos)
    formData.append("fNacimiento",fNacimiento)
    formData.append("email",email)
    formData.append("sexo",sexo)
    formData.append("estadoCivil",estadoCivil)
    formData.append("tCasa",tCasa)
    formData.append("curp",curp)
    formData.append("tCelular",tCelular)
    formData.append("calle",calle)
    formData.append("colonia",colonia)
    formData.append("cp",cp)
    formData.append("municipio",municipio)
    formData.append("estado",estado)

    await axios.post("http://localhost:5000/profesores/agregar", formData).then(response =>{
      // console.log(response)
      notify(response.status)
    }).catch(err =>{
      console.log(err)
    })

    function notify(num) {
      if(num===200){
        toast.success(
          'Profesor agregado',
          {
            position: toast.POSITION.TOP_CENTER,
            onClose:() =>{
              handleCancelar()
              navigate('/profesores')
            },
            autoClose:800,
          },

        )
      }
    }
  }
  const handleCancelar = () =>{
    setDatos(initialState)
  }

  return (
    <>
      <Container style={{paddingLeft: '6rem', paddingRight: '6rem'}}>
        <Row>
          <Col>
            <ToastContainer /> 
          </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col>
        <Form className='mt-4 mb-4' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formClave">
            <Form.Label>Clave:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu clave" name='clave' value={clave} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombres:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" name='nombre' value={nombre} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formApellidos">
            <Form.Label>Apellidos:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tus apellidos" name='apellidos' value={apellidos} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formfNacimiento">
            <Form.Label>Fecha de nacimiento:</Form.Label>
            <Form.Control type="date" placeholder="Ingresa tu fecha de nacimiento" name='fNacimiento' value={fNacimiento} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu correo electrónico" name='email' value={email} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSexo">
            <Form.Label>Sexo:</Form.Label>
            <Form.Select aria-label="Default select example" name='sexo' required value={sexo} onChange={handleChange}>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formestadoCivil">
            <Form.Label>Estado civil:</Form.Label>
            <Form.Select aria-label="Default select example" name='estadoCivil' required value={estadoCivil} onChange={handleChange}>
              <option value="Soltero">Soltero (a)</option>
              <option value="Casado">Casado (a)</option>
              <option value="Unión libre">Unión libre</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCasa">
            <Form.Label>Telefono de casa:</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu telefono de casa" name='tCasa' value={tCasa} onChange={handleChange}  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCurp">
            <Form.Label>CURP:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu CURP" name='curp' value={curp} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formstCelular">
            <Form.Label>Telefono celular:</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu telefono celular" name='tCelular' value={tCelular} onChange={handleChange}  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCalle">
            <Form.Label>Calle:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu calle" name='calle' value={calle} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsColonia">
            <Form.Label>Colonia:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu colonia" name='colonia' value={colonia} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsCp">
            <Form.Label>Código Postal:</Form.Label>
            <Form.Control type="num" placeholder="Ingresa tu Código Postal" name='cp' value={cp} onChange={handleChange} pattern='[0-9]{5}' required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsMunicipio">
            <Form.Label>Municipio:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu municipio" name='municipio' value={municipio} onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formsEstado">
            <Form.Label>Estado:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu estado" name='estado' value={estado} onChange={handleChange} required/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formsEstatus">
            <Form.Label>Estatus:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu estatus" name='estatus' value={} onChange={handleChange} required/>
          </Form.Group> */}
          
          <Button variant="primary" type="submit">
            Enviar
          </Button>
          <Button variant='danger' onClick={handleCancelar} className='ms-2'>Cancelar</Button>
        </Form>
        </Col>
        <Col></Col>

        </Row>
      </Container>
    </>
  )
}

export default ProfesoresAgregar