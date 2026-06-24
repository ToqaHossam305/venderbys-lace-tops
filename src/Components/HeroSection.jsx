import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg1 from '../assets/images/HeroSectionImage/Tops.jpeg';
import heroImg2 from '../assets/images/HeroSectionImage/Screenshot_19-6-2026_65641_www.instagram.com.jpeg';
import heroImg3 from '../assets/images/HeroSectionImage/Skirts.jpeg';
import '../Styles/HeroSection.css';

const slidesData = [
  {
    id: 1,
    image: heroImg1, 
    title: 'Tops',
    path: '/shop/tops'
  },
  {
    id: 2,
    image: heroImg2, 
    title: 'Lace Tops',
    path: '/shop/lace-tops'
  },
  {
    id: 3,
    image: heroImg3, 
    title: 'Skirts',
    path: '/shop/skirts'
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? 'active' : ''}`}
          onClick={() => navigate(slide.path)}
        >
          <div
            className="hero-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="hero-overlay" />
          
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <div className="hero-line" />
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}