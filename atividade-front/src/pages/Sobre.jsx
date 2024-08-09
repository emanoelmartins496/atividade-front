import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa"

function Sobre() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Introdução */}
        <Row className="mb-4">
          <Col>
            <h1
              className="text-center font-weight-bold"
              style={{ color: "#0091FF" }}
            >
              Sobre a DevNation Academy
            </h1>
            <p
              className="lead text-center custom-width"
              style={{ color: "#4B0082" }}
            >
              A DevNation Academy é dedicada a capacitar indivíduos com
              habilidades de programação de ponta, preparando-os para o mercado
              de tecnologia em constante evolução.
            </p>
          </Col>
        </Row>

        {/* O que nos diferencia */}
        <Row className="mb-5">
          <Col md={4}>
            <Card className="shadow-sm d-flex flex-column h-100">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaChalkboardTeacher size={30} className="mb-2" />{" "}
                  {/* Ícone de Professor */}
                  Metodologia de Ensino
                </Card.Title>
                <Card.Text>
                  Nossa abordagem prática garante que você aprenda com projetos
                  reais, acompanhado por mentores experientes que ajudam a
                  aplicar o conhecimento no mundo real.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm d-flex flex-column h-100">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaLaptopCode size={30} className="mb-2" />{" "}
                  {/* Ícone de Laptop */}
                  Cursos Inovadores
                </Card.Title>
                <Card.Text>
                  Oferecemos uma ampla variedade de cursos que estão sempre
                  atualizados com as últimas tendências e tecnologias do
                  mercado.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm d-flex flex-column h-100">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaCertificate size={30} className="mb-2" />{" "}
                  {/* Ícone de Certificado */}
                  Certificações Reconhecidas
                </Card.Title>
                <Card.Text>
                  Nossas certificações são reconhecidas pelas principais
                  empresas de tecnologia, ajudando você a avançar em sua
                  carreira.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Valores */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#1E90FF" }}>
              Nossos Valores
            </h3>
            <p
              className="text-center custom-width"
              style={{ color: "#4B0082" }}
            >
              Excelência, Inovação, Inclusão e Colaboração. Esses são os valores
              que guiam todas as nossas ações e decisões na DevNation Academy.
            </p>
          </Col>
        </Row>

        {/* Depoimentos de Alunos */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#1E90FF" }}>
              Depoimentos de Alunos
            </h3>
            <Carousel
              interval={5000} // Intervalo de 5 segundos para a transição automática
              controls={true} // Adiciona botões de controle
              indicators={true} // Adiciona indicadores de navegação
              touch={true} // Permite a navegação por arrastar
              style={{ maxWidth: "500px", margin: "20px auto 0 auto" }} // Define a largura máxima, centraliza o carrossel e adiciona margem superior
            >
              <Carousel.Item>
                <Card className="shadow-sm d-flex flex-column h-100">
                  <Card.Body className="flex-grow-1">
                    <Card.Text>
                      "A DevNation Academy me ajudou a transformar minha
                      carreira. As habilidades que adquiri aqui me abriram
                      portas que eu nunca imaginei."
                    </Card.Text>
                    <Card.Footer className="text-muted text-center">
                      — João Silva
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="shadow-sm d-flex flex-column h-100">
                  <Card.Body className="flex-grow-1">
                    <Card.Text>
                      "O suporte que recebi durante o curso foi excepcional. Eu
                      recomendo a DevNation Academy para qualquer um que queira
                      aprender programação."
                    </Card.Text>
                    <Card.Footer className="text-muted text-center">
                      — Maria Santos
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card className="shadow-sm d-flex flex-column h-100">
                  <Card.Body className="flex-grow-1">
                    <Card.Text>
                      "Os projetos práticos me deram a confiança para enfrentar
                      desafios reais no mercado de trabalho."
                    </Card.Text>
                    <Card.Footer className="text-muted text-center">
                      — Carlos Pereira
                    </Card.Footer>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Equipe */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#1E90FF" }}>
              Nossa Equipe
            </h3>
            <p className="text-center" style={{ color: "#4B0082" }}>
              Conheça nossos instrutores e mentores, profissionais experientes
              que estão aqui para ajudar você a alcançar seus objetivos.
            </p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <Button
              variant="primary"
              style={{ backgroundColor: "#4B0082", borderColor: "#4B0082" }}
              href="/cursos"
            >
              Explore nossos Cursos
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Sobre
