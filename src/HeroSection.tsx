// src/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: '#f4f4f9' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Hello, I’m David</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#555' }}>Software Engineer</h2>
      <p style={{ maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
        I specialize in building user-friendly, high-performance web applications with a focus on
        clean, scalable code. I’m passionate about delivering solutions that make a difference.
      </p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer' }}>View Projects</button>
        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Resume</button>
      </div>
    </div>
  );
};

export default HeroSection;
