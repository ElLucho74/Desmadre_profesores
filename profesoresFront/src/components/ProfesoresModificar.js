import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfesoresModificar = () => {
	const initialState = {
		clave: '',
		nombres: '',
		apellidos: '',
		fnacimiento: '',
		email: '',
		sexo: '',
		estadocivil: '',
		tcasa: '',
		curp: '',
		tcelular: '',
		calle: '',
		colonia: '',
		cp: '',
		municipio: '',
		estado: '',
		// estatus: ''
	};
	const { c } = useParams();

	useEffect(() => {
		traerProfesor(c);
	}, []);

	const [datos, setDatos] = useState(initialState);
	const {
		clave,
		nombres,
		apellidos,
		fnacimiento,
		email,
		sexo,
		estadocivil,
		tcasa,
		curp,
		tcelular,
		calle,
		colonia,
		cp,
		municipio,
		estado,
	} = datos;
	const handleChange = (e) => {
		let { name, value } = e.target;
		setDatos({ ...datos, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const {
			clave,
			nombres,
			apellidos,
			fnacimiento,
			email,
			sexo,
			estadocivil,
			tcasa,
			curp,
			tcelular,
			calle,
			colonia,
			cp,
			municipio,
			estado,
		} = datos;
		const formData = new FormData();

		formData.append('clave', clave);
		formData.append('nombres', nombres);
		formData.append('apellidos', apellidos);
		formData.append('fnacimiento', fnacimiento);
		formData.append('email', email);
		formData.append('sexo', sexo);
		formData.append('estadocivil', estadocivil);
		formData.append('tcasa', tcasa);
		formData.append('curp', curp);
		formData.append('tcelular', tcelular);
		formData.append('calle', calle);
		formData.append('colonia', colonia);
		formData.append('cp', cp);
		formData.append('municipio', municipio);
		formData.append('estado', estado);

		await axios
			.post('http://localhost:5000/profesores/modificar', formData)
			.then((response) => {
				// console.log(response)
				notify(response.status);
			})
			.catch((err) => {
				console.log(err);
			});

		function notify(num) {
			if (num === 200) {
				toast.success('Profesor agregado', {
					position: toast.POSITION.TOP_CENTER,
					onClose: () => {
						handleCancelar();
						// navigate('/profesores')
					},
					autoClose: 800,
				});
			}
		}
	};
	const handleCancelar = () => {
		setDatos(initialState);
	};
	const traerProfesor = async (clave) => {
		await axios
			.get(`http://localhost:5000/profesor/${clave}`)
			.then(function (response) {
				const nuevaFecha = format(
					new Date(response.data.result[0].fnacimiento),
					'yyyy-MM-dd'
				);
				const initialState2 = {
					...response.data.result[0],
					fnacimiento: nuevaFecha,
				};
				setDatos(initialState2);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				// always executed
			});
	};

	console.log(datos);
	return (
		<>
			<Container style={{ paddingLeft: '6rem', paddingRight: '6rem' }}>
				<Row>
					<Col>
						<ToastContainer />
					</Col>
				</Row>
				<Row>
				<Col></Col>
				<Col>
				<Form className="mt-4 mb-4" onSubmit={handleSubmit}>
					<Form.Group className="mb-3" controlId="formClave">
						<Form.Label>Clave:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu clave"
							name="clave"
							value={clave}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formNombre">
						<Form.Label>Nombres:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu nombre"
							name="nombres"
							value={nombres}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formApellidos">
						<Form.Label>Apellidos:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tus apellidos"
							name="apellidos"
							value={apellidos}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formfNacimiento">
						<Form.Label>Fecha de nacimiento:</Form.Label>
						<Form.Control
							type="date"
							placeholder="Ingresa tu fecha de nacimiento"
							name="fnacimiento"
							value={fnacimiento}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formEmail">
						<Form.Label>Correo electrónico:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu correo electrónico"
							name="email"
							value={email}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formSexo">
						<Form.Label>Sexo:</Form.Label>
						<Form.Select
							aria-label="Default select example"
							name="sexo"
							required
							value={sexo}
							onChange={handleChange}
						>
							<option value="Masculino">Masculino</option>
							<option value="Femenino">Femenino</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formestadoCivil">
						<Form.Label>Estado civil:</Form.Label>
						<Form.Select
							aria-label="Default select example"
							name="estadocivil"
							required
							value={estadocivil}
							onChange={handleChange}
						>
							<option value="Soltero">Soltero (a)</option>
							<option value="Casado">Casado (a)</option>
							<option value="Unión libre">Unión libre</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsCasa">
						<Form.Label>Telefono de casa:</Form.Label>
						<Form.Control
							type="tel"
							placeholder="Ingresa tu telefono de casa"
							name="tcasa"
							value={tcasa}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsCurp">
						<Form.Label>CURP:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu CURP"
							name="curp"
							value={curp}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formstCelular">
						<Form.Label>Telefono celular:</Form.Label>
						<Form.Control
							type="tel"
							placeholder="Ingresa tu telefono celular"
							name="tcelular"
							value={tcelular}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsCalle">
						<Form.Label>Calle:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu calle"
							name="calle"
							value={calle}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsColonia">
						<Form.Label>Colonia:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu colonia"
							name="colonia"
							value={colonia}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsCp">
						<Form.Label>Código Postal:</Form.Label>
						<Form.Control
							type="num"
							placeholder="Ingresa tu Código Postal"
							name="cp"
							value={cp}
							onChange={handleChange}
							pattern="[0-9]{5}"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsMunicipio">
						<Form.Label>Municipio:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu municipio"
							name="municipio"
							value={municipio}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formsEstado">
						<Form.Label>Estado:</Form.Label>
						<Form.Control
							type="text"
							placeholder="Ingresa tu estado"
							name="estado"
							value={estado}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					{/* <Form.Group className="mb-3" controlId="formsEstatus">
            <Form.Label>Estatus:</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu estatus" name='estatus' value={} onChange={handleChange} required/>
          </Form.Group> */}

					<Button variant="success" type="submit">
						Enviar
					</Button>
					<Button variant="danger" onClick={handleCancelar} className="ms-2">
						Cancelar
					</Button>
				</Form>
				</Col>
				<Col></Col>
				</Row>
			</Container>
		</>
	);
};

export default ProfesoresModificar;