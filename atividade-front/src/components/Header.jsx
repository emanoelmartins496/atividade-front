import { useState } from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import logo from "../../public/img/logo.png"

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleToggle = (isOpen) => {
    setIsDropdownOpen(isOpen)
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width={150}/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ marginLeft: "auto" }} className="ml-auto">
            <Nav.Link as={Link} to="/cursos" style={{ color: "#0091FF" }}>
              Cursos
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre" style={{ color: "#0091FF" }}>
              Sobre
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/politica-de-privacidade"
              style={{ color: "#0091FF" }}
            >
              Política de privacidade
            </Nav.Link>
            <NavDropdown
              title="Portal do aluno"
              id="basic-nav-dropdown"
              onToggle={handleToggle}
              className={isDropdownOpen ? "rotate-arrow" : ""}
            >
              <NavDropdown.Item
                as={Link}
                to="/login"
                style={{ color: "#0091FF", fontWeight: "bold" }}
              >
                Login
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/alunos/novo"
                style={{ color: "#0091FF", fontWeight: "bold" }}
              >
                Cadastro
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contato" style={{ color: "#0091FF" }}>
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
