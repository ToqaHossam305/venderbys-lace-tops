import React, { useState, useRef, useEffect } from 'react';
import video1 from '../assets/images/VideoCommunityImage/AQM1lI0DTNHRTvuCtJlNgX0WQeTGnl_z9qYPnaml_suvTTcvAixESLrZcN7ikkZVBF4oS1FELHB0ZzVJtH6orWnr.mp4';
import video2 from '../assets/images/VideoCommunityImage/AQMUWOQ5rmFpGGfPkTD34wbKZfGyTuV-rLMTZwhTdJeMpgAfifmBXKkwnrK-MRc0rEC3bARStjWGBfY1PI-oay-x3xEIiOW-yJy8tRY.mp4';
import video3 from '../assets/images/VideoCommunityImage/AQNd2fWGloFr160sM5uRHX3WGBuBoNDnFdpOif50R9qd2WhftGx-nCnn4UUR1TmaD89IdwGKrJoIeQaP9A9vMG0mqq1QGVetEJgrGQw.mp4';
import video4 from '../assets/images/VideoCommunityImage/AQNF6UYNaZURoVLgKkRFa74hq5f3H8RC6OyWA_XUHL7a6JJaP5o_F098wE8E9rSmbboRIiqqL_JT0fKNO4K6kg4J2E69RSJVM5jKGrU.mp4';
import video5 from '../assets/images/VideoCommunityImage/AQNIhSQWjWBuyxukDI0c1W_dfNdTbf8GayDBDarcCYYT1rh2-79t7WizkwmiPNKMs5aGABl2qcWlirOIgcqpcsvCdBxrgz5ZGH-UW_c.mp4';
import video6 from '../assets/images/VideoCommunityImage/AQNUa4ez_YERmCYHztlFyDOlmJSBEmBMw6SZWvXnLB-d_8A19p3rkiTYvNzz4QOM3sA3UK7OFALfHD5fmjjbJPlcNShTVSsTC95HN34.mp4';
import video7 from '../assets/images/VideoCommunityImage/AQNy13WenWk5Fx8PzqF98WQ3ZdPmADvxln4JYUHcJnskbdsLPNIryLrfB9neL50vubse6qCyHPryvc1lNI5qmDdmA0gKEatyyqos1P4.mp4';
import video8 from '../assets/images/VideoCommunityImage/AQNZ3jREsm66lYSlv2sxrrQadHauXVwxpPALLaA9GrddNvf3H-_W7P8A90FXpUFRgIVi6_f2VbmF7XT6AGQgMJ04Q5QZVvHb2wf7-5I.mp4';
import video9 from '../assets/images/VideoCommunityImage/AQO9lbzEfxP6-k0OqHU-3xUxS10-NN7QB_3zFUzmRIxeg3SOzPuiGMepsT0SFyPkuQ5PMGLZp628s7sfUKgSbcTd.mp4';
import video10 from '../assets/images/VideoCommunityImage/AQO_7ya8wjBVlGHkgDYxLGk1a0Wa3xz5s-bFrXYpfExTFBV_yPyjEHOxCAO4h727ruNagkLcgHmr5ITrwkd_S3Up.mp4';
import video11 from '../assets/images/VideoCommunityImage/AQObojH4wiWxf0XfeKZb5lJYTY85FKeUQZ_AUgDIepz9P0QgNnmVD8iII99N7Qg0rhRkqQHPc2LohyJUbOLDGevl2F1fhh9YbXqiPLE.mp4';
import video12 from '../assets/images/VideoCommunityImage/AQOjUPLdrDXND0jM03PjixKa-YAz6em52eWM4i5azCzB9EMkLKlhPTyMZHNGcjn7eE_H9Tn2ocnW4jZYGkm9rlWtuEDkoeCpsAr2fgE.mp4';
import video13 from '../assets/images/VideoCommunityImage/AQOyb9ke5RBV2nkxtgSre7SLG7NvuNRcsgzoC4Vy6qP0fKxqsmtq2KyAXqFGs3KdewHW6KWzfp2WrjE0eKBD02fPjtJroCqI6Q9TsQk.mp4';

import productImg1 from '../assets/images/LaceTops/c0d8227b7c98914fcf6931f94b81019b.jpg';
import productImg2 from '../assets/images/SkirtsPageImage/d13eefa3389d5dc49277bac4b3c7955c.jpg';
import productImg3 from '../assets/images/LaceTops/d30d4fbcaf590be6c010923dd653e859.jpg';
import productImg4 from '../assets/images/TopsImage/NovaKnitTop-CoralGlitter2.jpeg';
import productImg5 from '../assets/images/PantalonPage/0d5f2a8df143d2a7f30fe3dffbce61c7.jpg';
import productImg6 from '../assets/images/LaceTops/NewBallarenaLaceTop-DarkBrowm.jpeg';
import productImg7 from '../assets/images/TopsImage/Screenshot_19-6-2026_6534_www.instagram.com.jpeg';
import productImg8 from '../assets/images/LaceTops/8d774910acc06b63c1a175d5607f99d3.jpg';
import productImg9 from '../assets/images/TopsImage/ec4f8f60bef46e379c23ce8b98d0bdd6.jpg';
import productImg10 from '../assets/images/LaceTops/b0ce83710ddb98f879d0956688bb6801 (1).jpg';
import productImg11 from '../assets/images/LaceTops/PrettyLaceTop-DarkRed.jpeg';
import productImg12 from '../assets/images/TopsImage/AvaTop-Black1.jpeg';
import productImg13 from '../assets/images/SkirtsPageImage/c12cea73d9d3cef3e0ab3fb331c06dbd.jpg';

import '../Styles/VideoCommunity.css';

const videoData = [
  { id: 1, videoUrl: video1, productName: 'Long Sleeve Off Shoulder Top', price: '490.00 EGP', productImg: productImg1, likes: 245 },
  { id: 2, videoUrl: video2, productName: 'Sculpt Yoga Pants', price: '610.00 EGP', productImg: productImg2, likes: 189 },
  { id: 3, videoUrl: video3, productName: 'Warm Core Sweatshirt', price: '550.00 EGP', productImg: productImg3, likes: 312 },
  { id: 4, videoUrl: video4, productName: 'Classic Couture Blazer', price: '890.00 EGP', productImg: productImg4, likes: 420 },
  { id: 5, videoUrl: video5, productName: 'Ribbed Knit Dress', price: '720.00 EGP', productImg: productImg5, likes: 156 },
  { id: 6, videoUrl: video6, productName: 'High Waisted Leggings', price: '450.00 EGP', productImg: productImg6, likes: 288 },
  { id: 7, videoUrl: video7, productName: 'Oversized Urban Hoodie', price: '580.00 EGP', productImg: productImg7, likes: 340 },
  { id: 8, videoUrl: video8, productName: 'Lace Detail Crop Top', price: '390.00 EGP', productImg: productImg8, likes: 195 },
  { id: 9, videoUrl: video9, productName: 'Satin Luxury Skirt', price: '640.00 EGP', productImg: productImg9, likes: 210 },
  { id: 10, videoUrl: video10, productName: 'Tailored Wide-Leg Pants', price: '690.00 EGP', productImg: productImg10, likes: 511 },
  { id: 11, videoUrl: video11, productName: 'Cozy Knit Cardigan', price: '780.00 EGP', productImg: productImg11, likes: 174 },
  { id: 12, videoUrl: video12, productName: 'Seamless Sports Bra', price: '320.00 EGP', productImg: productImg12, likes: 299 },
  { id: 13, videoUrl: video13, productName: 'Limited December Coat', price: '1,250.00 EGP', productImg: productImg13, likes: 602 }
];

export default function VideoCommunity() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [likedVideos, setLikedVideos] = useState({});
  const sliderRef = useRef(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add('active-dragging');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('active-dragging');
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('active-dragging');
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const toggleLike = (id, e) => {
    if (e) e.stopPropagation();
    setLikedVideos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = videoData.findIndex(v => v.id === activeVideo.id);
    if (currentIndex > 0) setActiveVideo(videoData[currentIndex - 1]);
    else setActiveVideo(videoData[videoData.length - 1]);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = videoData.findIndex(v => v.id === activeVideo.id);
    if (currentIndex < videoData.length - 1) setActiveVideo(videoData[currentIndex + 1]);
    else setActiveVideo(videoData[0]);
  };

  return (
    <>
      <section className="community-section">
        <h2 className="community-title">Join VN's Community:</h2>

        <div 
          className="cards-slider-container" 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {videoData.map((video) => (
            <div 
              key={video.id} 
              className="video-main-card"
              onClick={() => setActiveVideo(video)}
            >
              <video 
                className="bg-video"
                src={video.videoUrl}
                loop
                muted
                autoPlay
                playsInline
              />
              
              <div className="glass-product-badge">
                <img src={video.productImg} alt={video.productName} className="badge-img" />
                <div className="badge-info">
                  <div className="badge-title">{video.productName}</div>
                  <div className="badge-price">{video.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeVideo && (
          <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
            <button className="modal-close-global" onClick={() => setActiveVideo(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="modal-main-wrapper" onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-arrow-nav left-arrow" onClick={handlePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="phone-wrapper">
                  <video 
                    className="modal-video"
                    src={activeVideo.videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  />

                  <div className="phone-top-controls">
                    <button className="control-icon-btn" onClick={() => setIsMuted(!isMuted)}>
                      {isMuted ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                      )}
                    </button>
                  </div>

                  <div className="phone-side-actions">
                    <div className="action-item" onClick={(e) => toggleLike(activeVideo.id, e)}>
                      <div className="action-circle-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={likedVideos[activeVideo.id] ? "#ff3b30" : "none"} stroke={likedVideos[activeVideo.id] ? "#ff3b30" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </div>
                      <span>{likedVideos[activeVideo.id] ? activeVideo.likes + 1 : activeVideo.likes}</span>
                    </div>

                    <div className="action-item">
                      <div className="action-circle-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      </div>
                      <span>Share</span>
                    </div>
                  </div>

                  <div className="phone-shop-card">
                    <div className="shop-card-content">
                      <img src={activeVideo.productImg} alt={activeVideo.productName} className="shop-img" />
                      <div className="shop-text-info">
                        <div className="shop-p-title">{activeVideo.productName}</div>
                        <div className="shop-p-price">{activeVideo.price}</div>
                      </div>
                    </div>
                    <button className="shop-now-btn">
                      Shop Now ❯
                    </button>
                  </div>
                </div>

                <div className="mobile-arrows-container">
                  <button className="mobile-arrow-btn" onClick={handlePrev}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  </button>
                  <button className="mobile-arrow-btn" onClick={handleNext}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </button>
                </div>
              </div>

              <button className="modal-arrow-nav right-arrow" onClick={handleNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

            </div>
          </div>
        )}
      </section>
    </>
  );
}