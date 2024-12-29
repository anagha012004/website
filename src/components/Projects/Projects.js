import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vinayMachinery from "../../Assets/Projects/vinayMachinery.png";
import gearcount from "../../Assets/Projects/gearcount.png";
import count from "../../Assets/Projects/count.png";
import SwasthaBharat from "../../Assets/Projects/SwasthaBharat.png";

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
              imgPath={vinayMachinery}
              isBlog={false}
              title="Vinay Machinery Stores"
              description="Vinay Machinery Stores is a full-stack e-commerce website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website is designed to facilitate the selling of machinery items for my father's shop."
              ghLink="https://github.com/anagha012004/Vinay-Machinary"
              demoLink="https://vinay-machinary-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gearcount}
              isBlog={false}
              title="GearCount360 (Industry Project"
              description="Automated the FAT (Factory Acceptance Testing) zone of the Air-Insulated Switchgear area
at ABB Nashik, developing Power Apps dashboards to provide real-time tracking of over
1000 switchgears across 10 lanes, reducing manual tracking time by 90% and improving
operational efficiency by 50%.
Integrated QR code-based identification and automated space calculation, enhancing data
accuracy, reducing errors by 70%, and streamlining inventory management in the testing
zone."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={count}
              isBlog={false}
              title="Counting Trees and Detecting Area of Orchards from a HighResolution Satellite Image (Group Project)"
              description="Developed a model using YOLOv8 to count trees and detect orchard areas from highresolution satellite images.
Explored unsupervised learning (K-means clustering) to identify tree clusters and
calculate orchard boundaries.
"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SwasthaBharat}
              isBlog={false}
              title="Swastha Bharat (Group Project)"
              description="Built a healthcare platform Swastha Bharat with features like a chatbot,
personalized prescriptions, medication reminders, and geolocation to find nearby
medical stores usingHTML,CSS, and JavaScript.
Enabled users to browse government-approved medicines, check banned
drugs, and schedule appointments with healthcare professionals."
              ghLink="https://github.com/omkadu8767/Tech-Tesseract-Hackathon
"
              demoLink="https://omkadu8767.github.io/Tech-Tesseract-Hackathon/
"
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
