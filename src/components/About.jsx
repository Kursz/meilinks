import React from 'react';
import './About.css';

function About() {
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
