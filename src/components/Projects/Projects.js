import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AdminDashboard from '../../Assets/Projects/smartmockups_leqei0cg.jpg'
import PsGames from '../../Assets/Projects/smartmockups_leqekab7.jpg'

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
              imgPath={AdminDashboard}
              isBlog={false}
              title="Admin dashboard"
              description="Utilized the Mui library to implement 90% of the website, resulting in an enhanced user experience."
              ghLink="https://github.com/TT8-React/team4"
              demoLink="https://splendorous-lebkuchen-6da73c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PsGames}
              isBlog={false}
              title="PS-Game"
              description="Implemented Figma design by creating three pages and developed a React app using class components"
              ghLink="https://github.com/belalQassem/react-form-task"
              demoLink="https://scintillating-melba-783376.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
