import React from 'react';

function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '3rem',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <img
        src="/profile.jpg"
        alt="Rocky"
        style={{ width: 150, borderRadius: '50%', border: '4px solid #ccc' }}
      />
      <h1 style={{ margin: '1rem 0 0.5rem' }}>Hi, I'm Rocky 👋</h1>
      <p style={{ fontSize: '1.1rem', margin: 0 }}>
        MSc Data Science | Cloud & Data Engineer | Backend-Developer
      </p>
    </div>
  );
}

export default Hero;