import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, placeholder: 'Gallery Image 1' },
    { id: 2, placeholder: 'Gallery Image 2' },
    { id: 3, placeholder: 'Gallery Image 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">
      <div className="section-header">
        <h2 className="pixelated">About Me</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="about-content">
        <div className="slideshow">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="placeholder-image">
                  <span className="wip-text">Work in Progress</span>
                  <span className="wip-subtext">{slide.placeholder}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="slideshow-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <div className="about-card">
          <p className="about-text">
            hayo! my name is meisol ₍ᐢ. ̫.ᐢ₎ im just a wandering soul who drifts thru life with warmth and positivity ⛅️
          </p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-icon">🎮</span>
              <span className="stat-label">Live Streams</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🏗️</span>
              <span className="stat-label">Epic Builds</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">💚</span>
              <span className="stat-label">Community Vibes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
