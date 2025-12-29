import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Particle from './Particle';
import { BsBuilding, BsCalendar, BsGeoAlt, BsFolder } from 'react-icons/bs';

const Internships = () => {
  const internships = [
    {
      company: "Tata Communications",
      position: "Project Trainee",
      duration: "Jan 2025 – Present",
      location: "Pune, Maharashtra",
      type: "Internship",
      projects: [
        {
          name: "Mobile Messaging Exchange (MMX)",
          description: [
            "Contributed to the Mobile Messaging Exchange (MMX) project — a high-performance Smart Messaging System enabling global SMS delivery for enterprise clients",
            "Implemented UI components using Sencha JS and backend modules with Node.js, Express.js, and MongoDB, improving responsiveness and system efficiency by 30%",
            "Optimized database queries, message routing APIs, and load handling mechanisms for high-volume traffic environments",
            "Deployed and maintained services on Linux environments with a focus on performance tuning and fault tolerance"
          ],
          technologies: ["Sencha JS", "Node.js", "Express.js", "MongoDB", "Linux"]
        },
        {
          name: "Rich Communication Services (RCS)",
          description: [
            "Contributed to the Rich Communication Services (RCS) project, leading migration from Spring to Spring Boot 3.x and upgrading from JDK 8 to JDK 21 to enhance scalability, maintainability, and performance",
            "Developed and validated new REST APIs, implemented MockServer for load and integration testing, and wrote comprehensive JUnit test suites to ensure code reliability",
            "Utilized Docker and Kubernetes for containerized deployment in AWS environments with integrations including Redis, RabbitMQ, PostgreSQL, and Cassandra",
            "Enhanced system reliability through effective caching, messaging queues, and microservice-level monitoring on Linux servers"
          ],
          technologies: ["Spring Boot 3.x", "JDK 21", "Docker", "Kubernetes", "AWS", "Redis", "RabbitMQ", "PostgreSQL", "Cassandra", "Linux"]
        }
      ],
      achievements: [
        "30% improvement in system efficiency",
        "Successfully migrated Spring to Spring Boot 3.x",
        "Upgraded JDK 8 to JDK 21 for enhanced performance",
        "Implemented comprehensive testing suites"
      ]
    },
    {
      company: "ABB India Limited",
      position: "Industrial Automation Intern",
      duration: "June 2024 - July 2024",
      location: "Nashik, Maharashtra",
      type: "Industry Project",
      description: [
        "Automated the FAT (Factory Acceptance Testing) zone of the Air-Insulated Switchgear area at ABB Nashik",
        "Developed Power Apps dashboards to provide real-time tracking of over 1000 switchgears across 10 lanes",
        "Reduced manual tracking time by 90% and improved operational efficiency by 50%",
        "Integrated QR code-based identification and automated space calculation",
        "Enhanced data accuracy, reducing errors by 70%, and streamlined inventory management in the testing zone"
      ],
      technologies: ["Power Apps", "Power Automate", "SharePoint", "QR Codes", "Data Analytics"],
      achievements: [
        "90% reduction in manual tracking time",
        "50% improvement in operational efficiency", 
        "70% reduction in data errors"
      ]
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
    <Container fluid className="internship-section">
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
                My <strong className="purple">Internship</strong> Experience
              </h1>
              <p style={{ color: 'white', textAlign: 'center', fontSize: '1.2em', marginBottom: '50px' }}>
                Professional experience and industry exposure
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
            {internships.map((internship, index) => (
              <Col md={12} key={index} style={{ marginBottom: '30px' }}>
                <motion.div variants={cardVariants}>
                  <Card className="internship-card">
                    <Card.Body>
                      <div className="internship-header">
                        <h3 className="internship-position">{internship.position}</h3>
                        <h4 className="internship-company">
                          <BsBuilding className="me-2" />
                          {internship.company}
                        </h4>
                      </div>
                      
                      <div className="internship-meta">
                        <span className="internship-duration">
                          <BsCalendar className="me-2" />
                          {internship.duration}
                        </span>
                        <span className="internship-location">
                          <BsGeoAlt className="me-2" />
                          {internship.location}
                        </span>
                        <span className="internship-type">
                          {internship.type}
                        </span>
                      </div>

                      {internship.projects ? (
                        // Tata Communications with multiple projects
                        <Row>
                          <Col md={8}>
                            {internship.projects.map((project, projectIndex) => (
                              <div key={projectIndex} className="project-section">
                                <h5 className="project-name">
                                  <BsFolder className="me-2" />
                                  {project.name}
                                </h5>
                                <div className="project-description">
                                  <ul>
                                    {project.description.map((item, idx) => (
                                      <li key={idx}>{item}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ))}
                          </Col>
                          <Col md={4}>
                            <div className="internship-sidebar">
                              <div className="technologies-used">
                                <h6>Technologies Used:</h6>
                                <div className="tech-tags">
                                  {[...new Set(internship.projects.flatMap(p => p.technologies))].map((tech, idx) => (
                                    <span key={idx} className="tech-tag">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="key-achievements">
                                <h6>Key Metrics:</h6>
                                <ul className="achievements-list">
                                  {internship.achievements.map((achievement, idx) => (
                                    <li key={idx} className="achievement-item">
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      ) : (
                        // ABB with single project structure
                        <Row>
                          <Col md={8}>
                            <div className="internship-description">
                              <h5>Key Responsibilities & Achievements:</h5>
                              <ul>
                                {internship.description.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="internship-sidebar">
                              <div className="technologies-used">
                                <h6>Technologies Used:</h6>
                                <div className="tech-tags">
                                  {internship.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="key-achievements">
                                <h6>Key Metrics:</h6>
                                <ul className="achievements-list">
                                  {internship.achievements.map((achievement, idx) => (
                                    <li key={idx} className="achievement-item">
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      )}
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

export default Internships;