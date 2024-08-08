import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function CourseCard({ title, imageSrc, courseType }) {
  return (
    <Card className="course-card">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button className="course-button">
          {courseType}
        </Button>
      </Card.Body>
    </Card>
  );
}

function Home() {
  const courses = [
    { title: "Des. de Software", imageSrc: "/public/img/img1.jpg", courseType: "CURSO COM TURMA" },
    { title: "Product Design", imageSrc: "/public/img/img2.png", courseType: "CURSO COM TURMA" },
    { title: "Java", imageSrc: "/public/img/img3.jpg", courseType: "NO SEU RITMO" },
    { title: "Flutter", imageSrc: "/public/img/img4.jpg", courseType: "CURSO COM TURMA" },
    { title: "Figma", imageSrc: "/public/img/img5.jpg", courseType: "CURSO COM TURMA" },
    { title: "Power BI", imageSrc: "/public/img/img6.jpg", courseType: "NO SEU RITMO" },
    { title: "Python para Dados", imageSrc: "/public/img/img7.jpg", courseType: "NO SEU RITMO" },
    { title: "SQL", imageSrc: "/public/img/img8.jpg", courseType: "NO SEU RITMO" }
  ];

  return (
    <div className="course-container">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} imageSrc={course.imageSrc} courseType={course.courseType} />
      ))}
    </div>
  );
}

export default Home;
