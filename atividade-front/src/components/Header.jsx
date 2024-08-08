import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          DevNation <span className="font-weight-bold" style={{ color: "#0091FF" }}>Academy</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: 'auto' }} className="ml-auto">
            <Nav.Link href="#cursos" style={{ color: "#0091FF" }}>Cursos</Nav.Link>
            <Nav.Link href="#sobre" style={{ color: "#0091FF" }}>Sobre</Nav.Link>
            <Nav.Link href="#PolíticaDePrivacidade" style={{ color: "#0091FF" }}>Política de privacidade</Nav.Link>
            <NavDropdown title="Portal do aluno" id="basic-nav-dropdown">
              <NavDropdown.Item href="#login" style={{ color: "#0091FF", fontWeight: 'bold' }}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#cadastro" style={{ color: "#0091FF", fontWeight: 'bold' }}>
                Cadastro
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contato" style={{ color: "#0091FF" }}>Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


