import React, { useState } from 'react';
import { motion } from 'framer-motion';

import cert1 from '../assets/Java programming 10 days.jpg';
import cert2 from '../assets/Web Developement.jpg';
import cert3 from '../assets/Web Designing Internship.jpg';
import cert4 from '../assets/AI coding 1 week.jpg';
import cert5 from '../assets/Networking.jpg';
import cert6 from '../assets/Web Application.jpg';
import cert7 from '../assets/Java Programming.jpg';

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

function Certifications() {
  const [preview, setPreview] = useState(null);

  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}
    >
      <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24, textAlign: 'center' }}>Certification</h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', width: '100%', maxWidth: 900, justifyItems: 'center', alignItems: 'center',
      }}>
        {certificates.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, boxShadow: '0 8px 32px #0af4' }}
            style={{
              width: 180, height: 140, borderRadius: 16, overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0002', border: '2px solid #eee', cursor: 'pointer',
            }}
            onClick={() => setPreview(img)}
            title="Click to preview"
          >
            <img src={img} alt={`Certificate ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        ))}
      </div>
      {preview && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
        }} onClick={() => setPreview(null)}>
          <img src={preview} alt="Certificate Preview" style={{ maxWidth: '90vw', maxHeight: '90vh', borderRadius: 16, boxShadow: '0 8px 32px #0af8', background: '#fff' }} />
        </div>
      )}
    </motion.section>
  );
}

export default Certifications; 