import React, { useState, useEffect } from 'react';
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
            Greetings, lovely humans! My name is Meisol, proudly from the Philippines, a home of good food and genuine smiles. I'm just a wandering soul finding my way through life, hoping to spread warmth and a bit of sunshine to everyone I meet. I'm a 21-year-old student who loves gaming, with Minecraft holding a special place in my heart where it's that one cozy world that has always felt like home.
            <br /><br />
            If you decide to stay for the journey, I'd love to share laughs, good vibes, and genuine smiles with you. Let's enjoy the ride together and make every moment a little brighter and a lot more fun.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
