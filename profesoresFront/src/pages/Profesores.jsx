import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Profesores = () => {
  const initialState={
    show:false,
    clave:'',
    nombres:'',
    apellidos:'',

  }

  const [datos, setDatos] = useState([]);
  const [show, setShow] = useState(false)

  useEffect(() => {
    traerDatos();
  }, []);

  const navigate = useNavigate();

  const traerDatos = async () => {
    await axios
      .get("http://localhost:5000/profesores")
      .then((response) => setDatos(response.data.result))
      .catch((error) => console.log(error));
  };
  const handleClose = () =>{
    setShow(false)
  }
  const handleEliminar = (clave, nombres, apellidos) =>{
    const initialState={
      show:true,
      clave,
      nombres,
      apellidos,
  
    }
    setShow(initialState);
  }
  const handleEliminar2 = (clave) =>{
    axios
    .get(`http://localhost:5000/profesor/eliminar/${clave}`)
    .then(function(response){
     // console.log(response);
      if(response.data.result.affectedRows>0){
        traerDatos();
        setShow(initialState);
      }
      

    })
    .catch(function (error){
      console.log(error);
      traerDatos();
    })
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
          
          <Table striped bordered hover variant="dark">

              <thead>
                <tr>
                  <th>Clave</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Curp</th>
                  <th>Tel. Movil</th>
                  <th>Estatus</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((prof) => (
                  <tr key={prof.clave}>
                    <td>{prof.clave}</td>
                    <td>{prof.nombres + " " + prof.apellidos}</td>
                    <td>{prof.email}</td>
                    <td>{prof.curp}</td>
                    <td>{prof.tcelular}</td>
                    <td>{prof.estatus}</td>
                    <td>
                      <Button
                        onClick={() =>
                          navigate(`/profesores/modificar/${prof.clave}`)
                        }
                        variant="primary"
                        size="sm"
                      >
                        Modificar
                      </Button>{" "}
                      <Button variant="danger" size="sm" className="ms-2" onClick={ () => handleEliminar(prof.clave, prof.nombres, prof.apellidos)}>
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>


        
        {/*MODALLLLLLLLLLLLLLLLLLLLLLLLLLESSS*/}
        <Row>
          <Col>
            <Modal show={show.show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{
                  `${show.clave}- ${show.nombres}     ${show.apellidos}`
                  }
                  
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                ¿ESTAS SEGURO, MUY SEGURO, ASI BIEN ACA BIEN SHUR, QUE QUIERES BORRAR ESTE REGISTRO MI BUEN?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={()=> handleEliminar2(show.clave)}>
                  SIMON MI BRO
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  NEL PRRO
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profesores;