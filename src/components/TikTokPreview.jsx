import React, { useState, useEffect } from 'react';
import './TikTokPreview.css';
import { FaTiktok } from 'react-icons/fa';

function TikTokPreview() {
  // You can manually set this to true when going live
  const [isLive, setIsLive] = useState(false);
  const tiktokUsername = '@itsmeisol';
  const tiktokLiveUrl = 'https://www.tiktok.com/@itsmeisol/live';
  // Replace this with your latest video URL
  const latestVideoUrl = 'https://www.tiktok.com/@itsmeisol';

  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="tiktok-preview">
      <div className="section-header">
        <h2 className="pixelated">
          <span className={`live-indicator ${isLive ? 'live' : ''}`}>●</span>
          TikTok Live
        </h2>
        <div className="header-line"></div>
      </div>
      
      <div className="tiktok-wrapper">
        {isLive && (
          <div className="live-alert">
            <FaTiktok className="live-icon-animated" />
            <div>
              <h3>🔴 I'M LIVE NOW ON TIKTOK!</h3>
              <p>Click below to join the stream</p>
            </div>
          </div>
        )}
        
        <a 
          href={isLive ? tiktokLiveUrl : latestVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tiktok-live-card"
        >
          <div className="tiktok-live-content">
            <div className="tiktok-icon-large">
              <FaTiktok />
            </div>
            <div className="tiktok-live-info">
              <h3>{isLive ? 'Join My Live Stream!' : 'Latest on TikTok'}</h3>
              <p className="username">{tiktokUsername}</p>
              <p className="status-text">
                {isLive ? 'Click to watch now!' : 'Check out my latest content'}
              </p>
              {isLive && <span className="live-pulse">WATCH LIVE</span>}
            </div>
          </div>
        </a>
        
        <p className="tiktok-note">
          💡 Note: TikTok doesn't support live stream embeds. Click the card above to watch {isLive ? 'the live stream' : 'on TikTok'}!
        </p>
      </div>
    </section>
  );
}

export default TikTokPreview;
