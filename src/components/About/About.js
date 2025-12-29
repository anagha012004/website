import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AnimatedSection from "../AnimatedSection";
import SkillsShowcase from "../SkillsShowcase";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <AnimatedSection>
              <motion.h1 
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(199, 112, 240)"
                }}
              >
                Know Who <strong className="purple">I'M</strong>
              </motion.h1>
              <Aboutcard />
            </AnimatedSection>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <AnimatedSection delay={0.3}>
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={2000}
                gyroscope={true}
              >
                <motion.img 
                  src={laptopImg} 
                  alt="about" 
                  className="img-fluid"
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Tilt>
            </AnimatedSection>
          </Col>
        </Row>
        
        <SkillsShowcase />
      </Container>
    </Container>
  );
}

export default About;
