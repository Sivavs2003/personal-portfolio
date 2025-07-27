import React from 'react';

function Footer() {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '48px 0 24px 0' }}>
      <svg width="340" height="60" viewBox="0 0 340 60" style={{ marginBottom: -10 }}>
        <path id="curve" d="M20,50 Q170,0 320,50" fill="transparent" />
        <text width="320" style={{ fontSize: 24, fontWeight: 700, fill: '#0a7cff', letterSpacing: 2 }}>
          <textPath href="#curve" startOffset="10%">Thanks for Visiting</textPath>
        </text>
      </svg>
      <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#222', marginTop: 18 }}>Made by Siva V S</div>
    </footer>
  );
}

export default Footer; 