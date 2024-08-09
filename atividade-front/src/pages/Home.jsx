import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function CourseCard({ title, imageSrc, courseType }) {
  return (
    <Card className="cartao-curso">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button className="botao-curso">
          {courseType}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Home() {
  const cursos = [
    { title: "Des. de Software", imageSrc: "/img/img1.jpg", courseType: "CURSO COM TURMA" },
    { title: "Product Design", imageSrc: "/img/img2.png", courseType: "CURSO COM TURMA" },
    { title: "Java", imageSrc: "/img/img3.jpg", courseType: "NO SEU RITMO" },
    { title: "Flutter", imageSrc: "/img/img4.jpg", courseType: "CURSO COM TURMA" },
    { title: "Figma", imageSrc: "/img/img5.jpg", courseType: "CURSO COM TURMA" },
    { title: "Power BI", imageSrc: "/img/img6.jpg", courseType: "NO SEU RITMO" },
    { title: "Python para Dados", imageSrc: "/img/img7.jpg", courseType: "NO SEU RITMO" },
    { title: "SQL", imageSrc: "/img/img8.jpg", courseType: "NO SEU RITMO" }
  ];

  return (
    <div className="container-cursos">
      {cursos.map((curso, index) => (
        <CourseCard key={index} title={curso.title} imageSrc={curso.imageSrc} courseType={curso.courseType} />
      ))}
    </div>
  );
}

export default Home;
