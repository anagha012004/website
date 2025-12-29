import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import Anagha from "../../Assets/anagha.png";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <Row>
              <Col md={7} className="home-header">
                <motion.h1 
                  variants={itemVariants}
                  style={{ paddingBottom: 15 }} 
                  className="heading"
                >
                  Hi There!{" "}
                  <motion.span 
                    className="wave" 
                    role="img" 
                    aria-labelledby="wave"
                    animate={{ 
                      rotate: [0, 14, -8, 14, -4, 10, 0],
                      transition: {
                        duration: 2.1,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }
                    }}
                  >
                    👋🏻
                  </motion.span>
                </motion.h1>

                <motion.h1 
                  variants={itemVariants}
                  className="heading-name"
                >
                  I'M
                  <motion.strong 
                    className="main-name"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0px 0px 8px rgb(199, 112, 240)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {" "}Anagha Badhe
                  </motion.strong>
                </motion.h1>

                <motion.div 
                  variants={itemVariants}
                  style={{ padding: 50, textAlign: "left" }}
                >
                  <Type />
                </motion.div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <motion.div
                  variants={imageVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={2000}
                    gyroscope={true}
                  >
                    <div className="profile-image-container">
                      <img
                        src={Anagha}
                        alt="home pic"
                className="img-fluid"
                        style={{ maxHeight: "450px" }}
                      />
                      <div className="image-glow"></div>
                    </div>
                  </Tilt>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
