import React from 'react';
import { useNavigate } from 'react-router-dom';
import newsVideoSource from '../assets/images/VideoCommunityImage/AQNF6UYNaZURoVLgKkRFa74hq5f3H8RC6OyWA_XUHL7a6JJaP5o_F098wE8E9rSmbboRIiqqL_JT0fKNO4K6kg4J2E69RSJVM5jKGrU.mp4';
import '../Styles/NewsVideoSection.css';

export default function NewsVideoSection() {
  const navigate = useNavigate();
  const marqueeText = "NEW COLLECTION DROP • FREE SHIPPING ON ORDERS OVER 150€ • EXPLORE OUR CRAFTSMANSHIP • LIMITED EDITION PIECES AVAILABLE NOW • ";

  return (
    <>
      <section className="news-video-section">
        <video 
          className="news-video-element"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={newsVideoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay">
          <div className="video-content">
            <h2 className="video-title" onClick={() => navigate('/news')}>
              News
            </h2>
          </div>
        </div>
      </section>

      <div className="marquee-container">
        <div className="marquee-wrapper">
          <span className="marquee-text">{marqueeText}{marqueeText}</span>
          <span className="marquee-text">{marqueeText}{marqueeText}</span>
        </div>
      </div>
    </>
  );
}