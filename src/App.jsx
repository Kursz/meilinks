import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import TwitchPreview from './components/TwitchPreview';
import Socials from './components/Socials';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`app ${isVisible ? 'fade-in' : ''}`}>
      {/* Minecraft-style background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>

      <Hero />
      <TwitchPreview />
      <About />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
