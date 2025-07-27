import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa6';

const socials = [
  { 
    icon: <FaLinkedin />, 
    link: 'https://www.linkedin.com/in/siva-v-s-4aa9b4333', 
    name: 'LinkedIn' 
  },
  { 
    icon: <FaGithub />, 
    link: 'https://github.com/Sivavs2003/Siva', 
    name: 'GitHub' 
  },
  { 
    icon: <FaInstagram />, 
    link: 'https://www.instagram.com/siva._.07?igsh=bHIwZnY0NjI4cWZ4', 
    name: 'Instagram' 
  },
  { 
    icon: <FaEnvelope />, 
    link: 'mailto:vs.siva2003@gmail.com', 
    name: 'Email' 
  }
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#333',
          letterSpacing: '2px'
        }}
      >
        Contact Me
      </motion.h2>

      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '2rem',
              color: '#000',
              background: 'rgba(1, 16, 13, 0.1)',
              borderRadius: '50%',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(3, 18, 15, 0.3)',
              textDecoration: 'none'
            }}
            title={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact; 