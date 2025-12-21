import React from 'react';
import { FaTwitch, FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import './Socials.css';

function Socials() {
  const socialLinks = [
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/itsmeisol',
      icon: FaTwitch,
      color: '#9146FF'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@meisolYT',
      icon: FaYoutube,
      color: '#FF0000'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@itsmeisol',
      icon: FaTiktok,
      color: '#000000'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/itsmeisol_/',
      icon: FaInstagram,
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61584814779243',
      icon: FaFacebook,
      color: '#1877F2'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/FvPGUKYqDT',
      icon: FaDiscord,
      color: '#5865F2'
    }
  ];

  return (
    <section className="socials">
      <div className="section-header">
        <h2 className="pixelated">Find Me Here</h2>
        <div className="header-line"></div>
      </div>
      <div className="social-grid">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ '--hover-color': social.color }}
            >
              <span className="social-icon">
                <IconComponent />
              </span>
              <span className="social-name">{social.name}</span>
              <span className="social-arrow">→</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Socials;
