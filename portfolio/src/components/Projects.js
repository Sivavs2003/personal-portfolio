import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import project images
import project1 from '../assets/Kanniyamuari.png';
import project2 from '../assets/To-Do.png';
import project3 from '../assets/portflio.png';
import project4 from '../assets/TournamentHub.png';
import project5 from '../assets/Audio detection.png';

const projects = [
  { 
    title: 'Cape Comorin', 
    desc: "A website built using HTML and CSS, showcasing the beauty and attractions of Kanyakumari. The project features a user-friendly interface, interactive elements, and informative content about the district's popular spots.", 
    img: project1, 
    code: 'https://github.com/Sivavs2003/Cape-Comorin' 
  },
  { 
    title: 'ToDoBuddy', 
    desc: "A web-based task management tool built with HTML, CSS, and JavaScript, allowing users to dynamically create, edit, and track their to-do lists.", 
    img: project2, 
    code: 'https://github.com/Sivavs2003/ToDoBuddy' 
  },
  { 
    title: 'Personal Portfolio', 
    desc: 'React.js portfolio with animated sections, project gallery, skills grid, and interactive timeline. Features smooth navigation and modern UI design showcasing MERN Stack skills.', 
    img: project3, 
    code: 'https://github.com/Sivavs2003/personal-portfolio' 
  },
  { 
    title: 'TournamentHub', 
    desc: "Built with the MERN stack, Tournament Hub is a robust and scalable web application that enables users to create, join, and manage tournaments with ease. Featuring real-time updates and a user-friendly interface, this platform is perfect for tournament enthusiasts.", 
    img: project4, 
    code: 'https://github.com/Sivavs2003/TournamentHUB' 
  },
  { 
    title: 'Audio Detection', 
    desc: "In my academic final year, I developed an AI-powered web application that detects deepfake voices, determining whether they're human or AI-generated. This project was built using Python and Django for the backend, with HTML and CSS for the frontend. The application utilizes a machine learning model trained on a dataset from Kaggle to accurately classify voices as either human or deepfake.", 
    img: project5, 
    code: 'https://github.com/Sivavs2003/Audio-Detection' 
  },
];

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}
      ref={ref}
    >
      {inView && (
        <>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24, textAlign: 'center' }}>Projects</h2>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '32px', 
            marginTop: '32px', 
            width: '100%', 
            maxWidth: 1100
          }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px #0af4' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: '#181a20',
                  borderRadius: '18px',
                  padding: '24px',
                  color: '#fff',
                  boxShadow: '0 2px 8px #0002',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  transition: 'box-shadow 0.2s, background 0.2s',
                }}
              >
                <div style={{ 
                  width: '100%', 
                  height: 120, 
                  borderRadius: 12, 
                  marginBottom: 16, 
                  overflow: 'hidden',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: 12
                    }} 
                  />
                </div>
                <div style={{ marginBottom: 12, fontWeight: 600, fontSize: '1.1rem' }}>{p.title}</div>
                <div style={{ marginBottom: 18, color: '#aaa', fontSize: '0.98rem', textAlign: 'center', lineHeight: 1.5 }}>{p.desc}</div>
                <a href={p.code} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#0af', color: '#fff' }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '10px 24px',
                      borderRadius: '8px',
                      background: '#0af',
                      color: '#fff',
                      border: 'none',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    View Code
                  </motion.button>
                </a>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
}

export default Projects; 