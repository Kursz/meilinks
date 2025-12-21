import React, { useState, useEffect, useRef } from 'react';
import './TwitchPreview.css';

function TwitchPreview() {
  const [isLive, setIsLive] = useState(false);
  const [streamData, setStreamData] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef(null);
  const channelName = 'itsmeisol';
  const parentDomain = typeof window !== 'undefined' ? window.location.hostname : 'localhost';

  useEffect(() => {
    // Check if stream is live using Twitch embed
    // Note: For full API access, you'd need Twitch API credentials
    // This is a simplified version using the embed
    checkLiveStatus();
    
    // Check every 2 minutes
    const interval = setInterval(checkLiveStatus, 120000);
    return () => clearInterval(interval);
  }, []);

  const checkLiveStatus = async () => {
    try {
      // Using Twitch's public API endpoint (requires CORS proxy in production)
      // For now, we'll show the embed which handles this automatically
      setIsLive(true); // You can implement actual API checking here
    } catch (error) {
      console.error('Error checking stream status:', error);
    }
  };

  const handleMouseEnter = () => {
    setIsMuted(false);
  };

  const handleMouseLeave = () => {
    setIsMuted(true);
  };

  return (
    <section className="twitch-preview">
      <div className="section-header">
        <h2 className="pixelated">
          <span className={`live-indicator ${isLive ? 'live' : ''}`}>●</span>
          Stream Preview
        </h2>
        <div className="header-line"></div>
      </div>
      
      <a 
        href={`https://www.twitch.tv/${channelName}`}
        target="_blank"
        rel="noopener noreferrer"
        className="twitch-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="twitch-embed-wrapper">
          <iframe
            key={isMuted ? 'muted' : 'unmuted'}
            ref={playerRef}
            src={`https://player.twitch.tv/?channel=${channelName}&parent=${parentDomain}&muted=${isMuted}&autoplay=true`}
            height="500"
            width="100%"
            allowFullScreen={true}
            frameBorder="0"
            scrolling="no"
            title="Twitch Stream"
          ></iframe>
        </div>
      </a>
    </section>
  );
}

export default TwitchPreview;
