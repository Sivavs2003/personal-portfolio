import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack',
      description: 'Hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js from Besant Technologies, Velachery ',
      duration: 'MAR 2025 - JUL 2025',
      side: 'left'
    },
    {
      title: 'Web Development',
      description: 'Practical experience in frontend development, responsive design, and modern web technologies during academic year from AK INFOPARK, Nagercoil',
      duration: 'OCT 2023 - NOV 2024',
      side: 'right'
    }
  ];

  return (
    <motion.section
      id="experience"
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
        Experience
      </motion.h2>

      <div style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '4px',
          background: '#000',
          transform: 'translateX(-50%)',
          borderRadius: '2px'
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '80px',
              minHeight: '120px'
            }}
          >
            {/* Timeline node */}
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#64ffda',
              border: '4px solid #fff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2
            }}></div>

            {/* Left side content */}
            <div style={{
              width: '45%',
              paddingRight: '40px',
              textAlign: 'right'
            }}>
              {exp.side === 'left' ? (
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: '#000',
                    marginBottom: '15px',
                    textAlign: 'right',
                    textShadow: '0 0 10px rgba(100, 255, 218, 0.3)'
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    color: '#000',
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    textAlign: 'right'
                  }}>
                    {exp.description}
                  </p>
                </div>
              ) : (
                <div style={{
                  color: '#000',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'right'
                }}>
                  {exp.duration}
                </div>
              )}
            </div>

            {/* Right side content */}
            <div style={{
              width: '45%',
              paddingLeft: '40px',
              textAlign: 'left'
            }}>
              {exp.side === 'right' ? (
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '900',
                    color: '#000',
                    marginBottom: '15px',
                    textAlign: 'left',
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    color: '#000000',
                    lineHeight: '1.6',
                    fontSize: '1rem',
                    textAlign: 'left'
                  }}>
                    {exp.description}
                  </p>
                </div>
              ) : (
                <div style={{
                  color: '#000',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textAlign: 'left'
                }}>
                  {exp.duration}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience; 