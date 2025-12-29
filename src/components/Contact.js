import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  AiOutlineMail, 
  AiOutlinePhone, 
  AiOutlineEnvironment,
  AiOutlineSend 
} from 'react-icons/ai';
import { 
  BsLinkedin, 
  BsGithub, 
  BsTwitter 
} from 'react-icons/bs';
import Particle from './Particle';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const contactInfo = [
    {
      icon: AiOutlineMail,
      title: 'Email',
      value: 'anaghabadhe@gmail.com',
      link: 'mailto:anaghabadhe@gmail.com'
    },
    {
      icon: AiOutlinePhone,
      title: 'Phone',
      value: '+91 9158841406',
      link: 'tel:+919158841406'
    },
    {
      icon: AiOutlineEnvironment,
      title: 'Location',
      value: 'Maharashtra, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: BsLinkedin,
      link: 'https://linkedin.com/in/anagha-badhe',
      color: '#0077B5'
    },
    {
      icon: BsGithub,
      link: 'https://github.com/anagha012004',
      color: '#333'
    },
    {
      icon: BsTwitter,
      link: 'https://twitter.com/anaghabadhe',
      color: '#1DA1F2'
    }
  ];

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Row>
            <Col md={12}>
              <motion.h1 
                variants={itemVariants}
                className="project-heading" 
                style={{ textAlign: 'center', marginBottom: '50px' }}
              >
                Get In <strong className="purple">Touch</strong>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                style={{ color: 'white', textAlign: 'center', fontSize: '1.2em', marginBottom: '50px' }}
              >
                I'm always open to discussing new opportunities and interesting projects.
              </motion.p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <motion.div variants={itemVariants} className="contact-info">
                <h3 className="purple" style={{ marginBottom: '30px' }}>Contact Information</h3>
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-info-item"
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="contact-icon">
                      <info.icon />
                    </div>
                    <div className="contact-details">
                      <h5>{info.title}</h5>
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}

                <div className="social-links-contact">
                  <h5 className="purple" style={{ marginTop: '30px', marginBottom: '20px' }}>
                    Follow Me
                  </h5>
                  <div className="social-icons-container">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-contact"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          backgroundColor: social.color 
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col md={6}>
              <motion.div variants={itemVariants} className="contact-form">
                <h3 className="purple" style={{ marginBottom: '30px' }}>Send Message</h3>
                <Form onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="contact-input"
                      />
                    </Form.Group>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <Button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={{ display: 'inline-block' }}
                        >
                          ⟳
                        </motion.div>
                      ) : (
                        <>
                          <AiOutlineSend style={{ marginRight: '8px' }} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Contact;