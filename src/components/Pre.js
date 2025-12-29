import React from "react";
import { motion } from "framer-motion";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <motion.div 
          className="preloader-content"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="preloader-logo"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="logo-text">AB</div>
          </motion.div>
          <motion.div 
            className="preloader-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Loading Portfolio...
          </motion.div>
          <motion.div 
            className="preloader-dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            >.</motion.span>
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            >.</motion.span>
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            >.</motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Pre;
