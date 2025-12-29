import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BsPlus, 
  BsArrowUp, 
  BsGithub, 
  BsLinkedin, 
  BsEnvelope,
  BsDownload
} from 'react-icons/bs';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: BsArrowUp,
      label: 'Scroll to Top',
      action: scrollToTop,
      color: '#4CAF50'
    },
    {
      icon: BsGithub,
      label: 'GitHub',
      action: () => window.open('https://github.com/anagha012004', '_blank'),
      color: '#333'
    },
    {
      icon: BsLinkedin,
      label: 'LinkedIn',
      action: () => window.open('https://linkedin.com/in/anagha-badhe', '_blank'),
      color: '#0077B5'
    },
    {
      icon: BsEnvelope,
      label: 'Contact',
      action: () => window.location.href = '/contact',
      color: '#FF5722'
    }
  ];

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      scale: 0.3,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  return (
    <div className="floating-action-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="floating-actions"
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                className="floating-action-item"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={action.action}
                style={{ backgroundColor: action.color }}
                title={action.label}
              >
                <action.icon />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        className="floating-action-main"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <BsPlus />
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;