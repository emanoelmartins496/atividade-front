import React from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./Contato.css" // Importe o CSS personalizado

function Contato() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Título da seção */}
        <Row className="mb-4">
          <Col>
            <h1
              className="text-center font-weight-bold"
              style={{ color: "#0091FF" }}
            >
              Fale Conosco
            </h1>
            <p className="text-center" style={{ color: "#4B0082" }}>
              Entre em contato conosco para saber mais sobre nossos cursos ou
              tirar dúvidas.
            </p>
          </Col>
        </Row>

        {/* Formulário de Contato */}
        <Row className="mb-5">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formNome">
                <Form.Label style={{ color: "#4B0082" }}>Nome</Form.Label>
                <Form.Control type="text" placeholder="Seu nome" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label style={{ color: "#4B0082" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Seu email" required />
              </Form.Group>

              <Form.Group controlId="formMensagem">
                <Form.Label style={{ color: "#4B0082" }}>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Sua mensagem"
                  required
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: "#4B0082", borderColor: "#4B0082" }}
              >
                Enviar
              </Button>
            </Form>
          </Col>

          {/* Informações de Contato */}
          <Col md={6} className="d-flex flex-column justify-content-center">
            <div>
              <h5 style={{ color: "#1E90FF" }}>Endereço</h5>
              <p style={{ color: "#4B0082" }}>
                Rua Exemplo, 123, Centro, Cidade, Estado, CEP 00000-000
              </p>
            </div>
            <div>
              <h5 style={{ color: "#1E90FF" }}>Telefone</h5>
              <p style={{ color: "#4B0082" }}>(00) 1234-5678</p>
            </div>
            <div>
              <h5 style={{ color: "#1E90FF" }}>Email</h5>
              <p style={{ color: "#4B0082" }}>contato@devnationacademy.com</p>
            </div>
          </Col>
        </Row>

        {/* Mapa de Localização */}
        <Row className="text-center">
          <Col>
            <h5 style={{ color: "#1E90FF" }}>Nossa Localização</h5>
            <iframe
              title="Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094316!2d144.95373531531748!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0873f0b%3A0xf5773ef9491e3705!2sYour%20Location%20Name!5e0!3m2!1sen!2sbr!4v1596893930331!5m2!1sen!2sbr"
              width="100%"
              height="350"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Contato
