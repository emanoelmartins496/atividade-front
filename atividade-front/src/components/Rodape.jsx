import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub } from "react-icons/fa";

function Rodape() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-left">
          <Col md={4} className="mb-4">
            <h5 className="mb-3">Links Úteis</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" style={{ color: "#0091FF" }}>
                Política de Privacidade
              </Nav.Link>
              <Nav.Link as={Link} to="/Sobre" style={{ color: "#0091FF" }}>
                Sobre Nós
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={4} className="mb-4 text-center">
            <h5 className="mb-3">Redes Sociais</h5>
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="https://x.com" style={{ color: "#0091FF", fontSize: "24px" }} aria-label="X">
                <img src="/img/logox.png" alt="LogodoX" style={{ width: "36px", height: "36px" }} />
              </Nav.Link>
              <Nav.Link href="https://facebook.com" style={{ color: "#0091FF", fontSize: "24px" }} aria-label="Facebook">
                <FaFacebookF />
              </Nav.Link>
              <Nav.Link href="https://github.com" style={{ color: "#0091FF", fontSize: "24px" }} aria-label="GitHub">
                <FaGithub />
              </Nav.Link>
            </Nav>
            <p className="mb-0 mt-3">
              &copy; {new Date().getFullYear()} Devnation. Todos os direitos reservados.
            </p>
            <Nav.Link 
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ color: "#0091FF", cursor: "pointer", textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Voltar ao Topo
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Rodape;
