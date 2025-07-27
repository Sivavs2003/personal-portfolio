import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/Photograph.jpeg';
import resumePDF from '../assets/Resume.pdf';

const About = () => {
  return (
    <motion.section
      id="about"
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
        About Me
      </motion.h2>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        flexWrap: 'wrap',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{
          maxWidth: '500px',
          fontSize: '1.1rem',
          color: '#333',
          fontWeight: '500',
          flex: 1,
          minWidth: '300px',
          textAlign: 'left',
          lineHeight: '1.7',
          letterSpacing: '0.2'
        }}>
          I am a dedicated <b>MERN Stack Developer</b> with practical experience in building full-stack web applications using <b>MongoDB</b>, <b>Express</b>, <b>React</b>, and <b>Node.js</b>.
          I enjoy writing clean, efficient code and solving problems through technology. I am eager to learn continuously and contribute positively to a development team.
        </div>
        
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: '#eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          flex: '0 0 200px'
        }}>
          <img 
            src={profileImg} 
            alt="Profile" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              borderRadius: '50%' 
            }} 
          />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <a 
          href={resumePDF} 
          download="Siva_VS_MERN_Stack_Resume.pdf" 
          style={{ textDecoration: 'none' }}
        >
          <button style={{
            padding: '15px 40px',
            borderRadius: '10px',
            background: '#64ffda',
            color: '#333',
            fontWeight: '700',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(100, 255, 218, 0.3)',
            letterSpacing: '1px',
            transition: 'all 0.2s ease'
          }}>
            Download Resume
          </button>
        </a>
      </div>
    </motion.section>
  );
};

export default About; 