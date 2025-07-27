import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        marginBottom: 0,
        paddingTop: 0
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#333',
          letterSpacing: '2px'
        }}
      >
        SIVA V S
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          fontSize: '1.8rem',
          fontWeight: '600',
          color: '#21235e',
          letterSpacing: '1px'
        }}
      >
        MERN Stack Developer
      </motion.h2>
    </motion.section>
  );
};

export default Hero; 