import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Particle from './Particle';
import { BsCalendar, BsGeoAlt, BsTrophy, BsPeople } from 'react-icons/bs';

const Hackathons = () => {
  const hackathons = [
    {
      name: "Tech-Tesseract Hackathon",
      date: "Mar 2024",
      location: "Pune, India",
      position: "1st Place Winner",
      teamSize: "3 members",
      project: "Swastha Bharat Portal",
      description: "Developed a unified digital health platform providing access to government-approved medicines, personalized prescriptions, nearby pharmacy suggestions, dose reminders, and easy appointment booking.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase", "DialogFlow", "Map API", "Razorpay API"],
      prize: "Swags and Goodies"
    },
    {
      name: "Geo Spatial AI Hackathon (ISRO)",
      date: "Aug 2024",
      location: "Nagpur, India",
      position: "Participant",
      teamSize: "3 members",
      project: "Counting Trees and Detecting Area of Orchards from a High-Resolution Satellite Image",
      description: "Developed a model using YOLOv8 to count trees and detect orchard areas from high-resolution satellite images. Explored unsupervised learning (K-means clustering) to identify tree clusters and calculate orchard boundaries.",
      technologies: ["Python", "ML", "DL", "QGIS"],
      prize: "Mentorship"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
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

  return (
    <Container fluid className="hackathon-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Row>
            <Col md={12}>
              <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '50px' }}>
                My <strong className="purple">Hackathon</strong> Journey
              </h1>
              <p style={{ color: 'white', textAlign: 'center', fontSize: '1.2em', marginBottom: '50px' }}>
                Competitive programming and innovation challenges
              </p>
            </Col>
          </Row>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Row>
            {hackathons.map((hackathon, index) => (
              <Col md={6} key={index} style={{ marginBottom: '30px' }}>
                <motion.div variants={cardVariants}>
                  <Card className="hackathon-card">
                    <Card.Body>
                      <div className="hackathon-header">
                        <h3 className="hackathon-name">{hackathon.name}</h3>
                        <h4 className="hackathon-project">{hackathon.project}</h4>
                      </div>
                      
                      <div className="hackathon-meta">
                        <span className="hackathon-date">
                          <BsCalendar className="me-2" />
                          {hackathon.date}
                        </span>
                        <span className="hackathon-location">
                          <BsGeoAlt className="me-2" />
                          {hackathon.location}
                        </span>
                        <span className="hackathon-team">
                          <BsPeople className="me-2" />
                          {hackathon.teamSize}
                        </span>
                      </div>

                      <div className="hackathon-position">
                        <BsTrophy className="me-2" />
                        {hackathon.position}
                      </div>

                      <div className="hackathon-description">
                        <p>{hackathon.description}</p>
                      </div>

                      <div className="hackathon-technologies">
                        <h6>Technologies Used:</h6>
                        <div className="tech-tags">
                          {hackathon.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hackathon-prize">
                        <strong>Prize: </strong>{hackathon.prize}
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Hackathons;