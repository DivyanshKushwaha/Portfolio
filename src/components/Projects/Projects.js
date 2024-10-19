import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pizza from "../../Assets/pizza.png";
import wine from "../../Assets/wine.png";
import movie from "../../Assets/movie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Pizza Sales Dashboard"
              description="The Pizza Sales Dashboard built with Power BI provides interactive visualizations to analyze sales performance, customer preferences, and revenue trends. It utilizes DAX for advanced metrics, offering insights across different locations, pizza types, and time periods."
              ghLink="https://github.com/DivyanshKushwaha/Pizza-Sales-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wine}
              isBlog={false}
              title="Wine Quality Prediction"
              description="Developed an end-to-end Wine Quality Prediction system using MLFlow and Flask for data preprocessing, model training, and deployment. Built and trained an ElasticNet model with scikit-learn, ensuring reproducibility and scalability. Achieved performance metrics such as R² score, MSE, and RMSE by tuning learning rate and l1_ratio."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Recommender System"
              description="Developed a content-based movie recommender system using NLP techniques like CountVectorizer and cosine similarity to recommend movies based on descriptions. The system was built with Python, Pandas, scikit-learn, and Streamlit for seamless data processing and UI. Deployed on Amazon EC2, ensuring online accessibility and secure HTTP/HTTPS traffic configuration."
              ghLink="https://github.com/soumyajit4419/Editor.io"           
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
