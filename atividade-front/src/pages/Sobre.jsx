import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap"
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
} from "react-icons/fa"
import logo from "../../public/img/logonav.png"

function Sobre() {
  return (
    <Container fluid className="py-5" style={{ backgroundColor: "#152929" }}>
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <img src={logo} alt="Logo" width={300} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <h1
              className="text-center font-weight-bold"
              style={{ color: "#fffff" }}
            >
              Sobre Nós
            </h1>
            <hr />
            <p
              className="lead text-center custom-width mb-3"
              style={{ color: "#0091FF" }}
            >
              A DevNation Academy é dedicada a capacitar indivíduos com
              habilidades de programação de ponta, preparando-os para o mercado
              de tecnologia em constante evolução.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4}>
            <Card className="shadow-sm d-flex flex-column h-100 mt-3">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaChalkboardTeacher size={30} className="mb-2" /> Metodologia
                  de Ensino
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
            <Card className="shadow-sm d-flex flex-column h-100 mt-3">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaLaptopCode size={30} className="mb-2" /> Cursos Inovadores
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
            <Card className="shadow-sm d-flex flex-column h-100 mt-3">
              <Card.Body className="flex-grow-1">
                <Card.Title
                  className="text-center"
                  style={{ color: "#4B0082" }}
                >
                  <FaCertificate size={30} className="mb-2" />
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
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#fffff" }}>
              Nossos Valores
            </h3>
            <hr />
            <p
              className="text-center custom-width"
              style={{ color: "#0091FF" }}
            >
              Excelência, Inovação, Inclusão e Colaboração. Esses são os valores
              que guiam todas as nossas ações e decisões na DevNation Academy.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#ffff" }}>
              Depoimentos de Alunos
            </h3>
            <hr />
            <Carousel
              interval={4000}
              controls={true}
              indicators={true}
              touch={true}
              style={{ maxWidth: "500px", margin: "20px auto 0 auto" }}
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
        <Row className="mb-5">
          <Col>
            <h3 className="text-center" style={{ color: "#ffff" }}>
              Nossa Equipe
            </h3>
            <hr />
            <p
              className="text-center custom-width mb-3"
              style={{ color: "#0091FF" }}
            >
              Conheça nossos instrutores e mentores, profissionais experientes
              que estão aqui para ajudar você a alcançar seus objetivos.
            </p>
          </Col>
        </Row>
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
