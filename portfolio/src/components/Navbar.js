import React from 'react';

function Navbar() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(255,255,255,0.97)',
      borderRadius: '32px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '12px 40px',
      minWidth: '420px',
      maxWidth: '90vw',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
    }}>
      <ul style={{
        display: 'flex',
        gap: '36px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        alignItems: 'center',
      }}>
        <li><a href="#home" style={navLinkStyle} onClick={e => handleNavClick(e, '#home')}>Home</a></li>
        <li><a href="#about" style={navLinkStyle} onClick={e => handleNavClick(e, '#about')}>About</a></li>
        <li><a href="#skills" style={navLinkStyle} onClick={e => handleNavClick(e, '#skills')}>Skills</a></li>
        <li><a href="#projects" style={navLinkStyle} onClick={e => handleNavClick(e, '#projects')}>Projects</a></li>
        <li><a href="#experience" style={navLinkStyle} onClick={e => handleNavClick(e, '#experience')}>Experience</a></li>
        <li><a href="#certifications" style={navLinkStyle} onClick={e => handleNavClick(e, '#certifications')}>Certification</a></li>
        <li><a href="#contact" style={navLinkStyle} onClick={e => handleNavClick(e, '#contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: 'none',
  color: '#222',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '8px 16px',
  borderRadius: '8px',
  transition: 'background 0.2s, color 0.2s',
  background: 'none',
  cursor: 'pointer',
};

export default Navbar; 