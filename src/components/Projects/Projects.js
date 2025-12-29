import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import vinayMachinery from "../../Assets/Projects/vinayMachinery.png";
import gearcount from "../../Assets/Projects/gearcount.png";
import count from "../../Assets/Projects/count.png";
import SwasthaBharat from "../../Assets/Projects/SwasthaBharat.png";

function Projects() {
  const projects = [
    {
      imgPath: vinayMachinery,
      isBlog: false,
      title: "Vinay Machinery Stores",
      description: "Vinay Machinery Stores is a full-stack e-commerce website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website is designed to facilitate the selling of machinery items for my father's shop.",
      ghLink: "https://github.com/anagha012004/Vinay-Machinary",
      demoLink: "https://vinay-machinary-1.onrender.com/",
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
      featured: true,
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: "5"
    },
    {
      imgPath: gearcount,
      isBlog: false,
      title: "GearCount360 (Industry Project)",
      description: "Automated the FAT (Factory Acceptance Testing) zone of the Air-Insulated Switchgear area at ABB Nashik, developing Power Apps dashboards to provide real-time tracking of over 1000 switchgears across 10 lanes, reducing manual tracking time by 90% and improving operational efficiency by 50%. Integrated QR code-based identification and automated space calculation, enhancing data accuracy, reducing errors by 70%, and streamlining inventory management in the testing zone.",
      techStack: ["Power Apps", "Power Automate", "SharePoint", "QR Codes"],
      language: "Power Platform",
      languageColor: "#742774"
    },
    {
      imgPath: count,
      isBlog: false,
      title: "Counting Trees and Detecting Area of Orchards from High-Resolution Satellite Image",
      description: "Automated Tree Counting using Multispectral NDVI and Watershed Segmentation on GeoTIFF imagery (Python, Rasterio, OpenCV, Scikit-image)",
      ghLink: "https://github.com/anagha012004/TreeCount",
      techStack: ["Python", "Rasterio", "OpenCV", "Scikit-image", "NDVI", "GeoTIFF"],
      language: "Python",
      languageColor: "#3572A5",
      stars: "8"
    },
    {
      imgPath: SwasthaBharat,
      isBlog: false,
      title: "Swastha Bharat (Group Project)",
      description: "Built a healthcare platform Swastha Bharat with features like a chatbot, personalized prescriptions, medication reminders, and geolocation to find nearby medical stores using HTML, CSS, and JavaScript. Enabled users to browse government-approved medicines, check banned drugs, and schedule appointments with healthcare professionals.",
      ghLink: "https://github.com/omkadu8767/Tech-Tesseract-Hackathon",
      demoLink: "https://omkadu8767.github.io/Tech-Tesseract-Hackathon/",
      techStack: ["HTML5", "CSS3", "JavaScript", "Geolocation API", "Chatbot"],
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: "12"
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <AnimatedSection>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", fontSize: "1.2em" }}>
            Here are a few projects I've worked on recently.
          </p>
        </AnimatedSection>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <AnimatedSection delay={index * 0.2}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={project.isBlog}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  techStack={project.techStack}
                  featured={project.featured}
                  language={project.language}
                  languageColor={project.languageColor}
                  stars={project.stars}
                />
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
