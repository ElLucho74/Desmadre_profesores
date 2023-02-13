import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from "react-router-dom";

const BarraSuperior = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={ Link } to='/'>Profesores</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ Link } to='/'>Inicio</Nav.Link>
         
            <NavDropdown title="Profesores" id="basic-nav-dropdown">
              <NavDropdown.Item as={ Link } to='/Profesores'>
                 Inicio
                </NavDropdown.Item>
              <NavDropdown.Item as={ Link } to='/Profesores/Agregar'>
                Agregar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default BarraSuperior