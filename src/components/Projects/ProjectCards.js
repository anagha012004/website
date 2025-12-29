import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsStar, BsEye } from "react-icons/bs";
import { motion } from "framer-motion";

function ProjectCards(props) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const techStack = props.techStack || [];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <Card className="project-card-view enhanced-card">
        <div className="card-img-container">
          <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          <div className="card-overlay">
            <div className="overlay-content">
              <BsEye size={24} />
              <span>View Project</span>
            </div>
          </div>
        </div>
        <Card.Body>
          <Card.Title className="project-title">
            {props.title}
            {props.featured && (
              <motion.div 
                className="featured-badge"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <BsStar className="star-icon" />
              </motion.div>
            )}
          </Card.Title>
          
          {techStack.length > 0 && (
            <div className="tech-stack-badges">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Badge bg="secondary" className="tech-badge">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
          
          <Card.Text className="project-description">
            {props.description}
          </Card.Text>
          
          <div className="project-stats">
            {props.stars && (
              <span className="stat-item">
                <BsStar /> {props.stars}
              </span>
            )}
            {props.language && (
              <span className="stat-item language">
                <span className="language-dot" style={{backgroundColor: props.languageColor || '#c770f0'}}></span>
                {props.language}
              </span>
            )}
          </div>
          
          <div className="project-buttons">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" href={props.ghLink} target="_blank" className="project-btn">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            </motion.div>

            {!props.isBlog && props.demoLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline-primary"
                  href={props.demoLink}
                  target="_blank"
                  className="project-btn demo-btn"
                >
                  <CgWebsite /> &nbsp;
                  Live Demo
                </Button>
              </motion.div>
            )}
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ProjectCards;
