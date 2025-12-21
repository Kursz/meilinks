import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const slides = [
    { id: 1, placeholder: 'Gallery Image 1' },
    { id: 2, placeholder: 'Gallery Image 2' },
    { id: 3, placeholder: 'Gallery Image 3' },
    { id: 4, placeholder: 'Gallery Image 4' },
    { id: 5, placeholder: 'Gallery Image 5' },
  ];

  return (
    <section className="about">
      <div className="section-header">
        <h2 className="pixelated">About Me</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-card">
          <p className="about-text">
            hayo! my name is meisol ₍ᐢ. ̫.ᐢ₎ im just a wandering soul who drifts thru life with warmth and positivity ⛅️
          </p>
          
          <div className="gallery">
            {slides.map((slide) => (
              <div key={slide.id} className="gallery-item">
                <div className="placeholder-image">
                  <span className="wip-icon">🖼️</span>
                  <span className="wip-text">WIP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
