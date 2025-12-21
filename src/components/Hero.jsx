import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-image-container">
          <img 
            src="/assets/profile.png.png" 
            alt="Profile" 
            className="profile-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="profile-placeholder" style={{ display: 'none' }}>
            🎮
          </div>
        </div>
        <h1 className="glitch" data-text="Meisol 𖤓">Meisol<span className="symbol">𖤓</span></h1>
        <p className="subtitle">Streamer • Content Creator • Minecraft Enthusiast</p>
        <div className="hero-decoration">
          <img src="/assets/bee.gif" alt="bee" className="bee bee-1" />
          <img src="/assets/bee.gif" alt="bee" className="bee bee-2" />
          <img src="/assets/bee.gif" alt="bee" className="bee bee-3" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
