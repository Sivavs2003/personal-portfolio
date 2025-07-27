import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const skills = [
  { name: 'HTML', icon: <FaHtml5 color="#e44d26" size={38} /> },
  { name: 'CSS', icon: <FaCss3Alt color="#1572b6" size={38} /> },
  { name: 'JS', icon: <SiJavascript color="#f7df1e" size={38} /> },
  { name: 'React', icon: <FaReact color="#61dafb" size={38} /> },
  { name: 'Node', icon: <FaNodeJs color="#3c873a" size={38} /> },
  { name: 'Express', icon: <SiExpress color="#fff" size={38} /> },
  { name: 'Mongo', icon: <SiMongodb color="#47a248" size={38} /> },
  { name: 'MySQL', icon: <GrMysql color="#00758f" size={38} /> },
  { name: 'GitHub', icon: <FaGithub color="#fff" size={38} /> },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24, textAlign: 'center' }}>SKILLS</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          {skills.slice(0, 5).map((skill, index) => (
            <motion.div
            key={skill.name}
            whileHover={{ scale: 1.15, boxShadow: '0 4px 24px #0af4' }}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '18px 22px',
              borderRadius: '14px',
              background: '#181a20',
              color: '#0af',
              fontWeight: 600,
              fontSize: '1.1rem',
              letterSpacing: '1px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px #0002',
              border: 'none',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
              minWidth: 90,
            }}
            >
              {skill.icon}
              <span style={{ marginTop: 10, color: '#fff' }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          {skills.slice(5).map(skill => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.15, boxShadow: '0 4px 24px #0af4' }}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '18px 22px',
                borderRadius: '14px',
                background: '#181a20',
                color: '#0af',
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px #0002',
                border: 'none',
                transition: 'background 0.2s, color 0.2s, box-shadow 0.2s',
                minWidth: 90,
              }}
            >
              {skill.icon}
              <span style={{ marginTop: 10, color: '#fff' }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills; 