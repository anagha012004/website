import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import {
  SiExpress,
  SiMysql,
  SiBootstrap,
  SiDocker,
  SiKubernetes,
  SiAnsible,
  SiAmazonaws,
  SiApachecassandra,
  SiRabbitmq,
  SiSpring,
  SiSpringboot,
  SiTerraform,
} from 'react-icons/si';

const SkillsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: DiJavascript1, color: '#F7DF1E' },
    { name: 'React.js', level: 85, icon: DiReact, color: '#61DAFB' },
    { name: 'Node.js', level: 80, icon: DiNodejs, color: '#339933' },
    { name: 'Python', level: 85, icon: DiPython, color: '#3776AB' },
    { name: 'Java', level: 80, icon: DiJava, color: '#ED8B00' },
    { name: 'Spring Boot', level: 75, icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Spring', level: 75, icon: SiSpring, color: '#6DB33F' },
    { name: 'MongoDB', level: 75, icon: DiMongodb, color: '#47A248' },
    { name: 'MySQL', level: 70, icon: SiMysql, color: '#4479A1' },
    { name: 'Cassandra', level: 65, icon: SiApachecassandra, color: '#1287B1' },
    { name: 'HTML5', level: 95, icon: DiHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: DiCss3, color: '#1572B6' },
    { name: 'Express.js', level: 75, icon: SiExpress, color: '#000000' },
    { name: 'Bootstrap', level: 85, icon: SiBootstrap, color: '#7952B3' },
    { name: 'Docker', level: 70, icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', level: 65, icon: SiKubernetes, color: '#326CE5' },
    { name: 'AWS', level: 75, icon: SiAmazonaws, color: '#FF9900' },
    { name: 'Terraform', level: 70, icon: SiTerraform, color: '#7B42BC' },
    { name: 'Ansible', level: 65, icon: SiAnsible, color: '#EE0000' },
    { name: 'RabbitMQ', level: 60, icon: SiRabbitmq, color: '#FF6600' },
    { name: 'Git', level: 80, icon: DiGit, color: '#F05032' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container fluid className="skills-section">
      <Container>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Row>
            <Col md={12}>
              <h1 className="project-heading" style={{ textAlign: 'center', marginBottom: '50px' }}>
                My <strong className="purple">Skills</strong>
              </h1>
            </Col>
          </Row>
          <Row>
            {skills.map((skill, index) => (
              <Col md={6} lg={4} key={index} className="skill-item">
                <motion.div
                  variants={itemVariants}
                  className="skill-card"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 30px rgba(199, 112, 240, 0.3)`
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    <skill.icon />
                  </div>
                  <div className="skill-info">
                    <h5>{skill.name}</h5>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        style={{ backgroundColor: skill.color }}
                      />
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default SkillsShowcase;