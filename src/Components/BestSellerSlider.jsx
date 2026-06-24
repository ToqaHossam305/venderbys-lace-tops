import React, { useState, useEffect, useRef } from 'react';
import '../Styles/BestSellerSlider.css';

import prod1_img1 from '../assets/images/BestSellerSliderImage/BoleroLaceTop-Black(Pre-Order)3.jpeg';
import prod1_img2 from '../assets/images/BestSellerSliderImage/AvaTop-Black2.jpeg';
import prod2_img1 from '../assets/images/BestSellerSliderImage/2e1a47a5fd84679f69acb8d0b65b0641.jpg';
import prod2_img2 from '../assets/images/BestSellerSliderImage/dfe7ebfa64772a152533a5a2df80c72b.jpg';
import prod3_img1 from '../assets/images/BestSellerSliderImage/7c9ef659d6d006823ab10a987c9deaf3 (1).jpg';
import prod3_img2 from '../assets/images/BestSellerSliderImage/1d575bbd8ca13496b242c8c36c5598f9 (1).jpg';
import prod4_img1 from '../assets/images/BestSellerSliderImage/5a1b23380a3ecf3f02f764e9d717b9b7.jpg';
import prod4_img2 from '../assets/images/BestSellerSliderImage/f0a9c07752958728873095bb355b9a10.jpg';
import prod5_img1 from '../assets/images/BestSellerSliderImage/NovaKnitTop-CoralGlitter2.jpeg';
import prod5_img2 from '../assets/images/BestSellerSliderImage/NovaKnitTop-CoralGlitter3.jpeg';
import prod6_img1 from '../assets/images/BestSellerSliderImage/83395c149a54a1680c39fa1a99f397f7.jpg';
import prod6_img2 from '../assets/images/BestSellerSliderImage/4d1f187a804121be11d5bc1e5cd3f47f.jpg';
import prod7_img1 from '../assets/images/BestSellerSliderImage/AvaTop-Black3.jpeg';
import prod7_img2 from '../assets/images/BestSellerSliderImage/AvaTop-Black2.jpeg';
import prod8_img1 from '../assets/images/BestSellerSliderImage/3748d7e144eb6ed7edaa965a0a76a955.jpg';
import prod8_img2 from '../assets/images/BestSellerSliderImage/fff70c8b2f2083795ee49259c839e57f.jpg';

const productsData = [
  { id: 1, title: "Rhea Lace Top - Black", price: "50,95 EUR", badge: "NEW", badgeColor: "#111", img1: prod1_img1, img2: prod1_img2 },
  { id: 2, title: "Nora Knit Top - Coral", price: "58,95 EUR", badge: "", img1: prod2_img1, img2: prod2_img2 },
  { id: 3, title: "Bolero Lace Top - Black", price: "54,95 EUR", badge: "", img1: prod3_img1, img2: prod3_img2 },
  { id: 4, title: "Mara Lace Top - Silk", price: "40,95 EUR", badge: "SOLD OUT", badgeColor: "#777", isSoldOut: true, img1: prod4_img1, img2: prod4_img2 },
  { id: 5, title: "Satin Luxury Skirt", price: "35,00 EUR", badge: "SALE", badgeColor: "#ba1818", img1: prod5_img1, img2: prod5_img2 },
  { id: 6, title: "Oversized Urban Hoodie", price: "62,00 EUR", badge: "LIMITED STOCK", badgeColor: "#d97706", img1: prod6_img1, img2: prod6_img2 },
  { id: 7, title: "Classic Corset Top", price: "45,00 EUR", badge: "", img1: prod7_img1, img2: prod7_img2 },
  { id: 8, title: "Luxe Knit Cardigan", price: "70,00 EUR", badge: "SOLD OUT", badgeColor: "#777", isSoldOut: true, img1: prod8_img1, img2: prod8_img2 },
];

export default function BestSellers() {
  const sliderRef = useRef(null);
  const [activeCardId, setActiveCardId] = useState(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sliderRef.current || window.innerWidth > 768) return;
      const slider = sliderRef.current;
      const cards = slider.querySelectorAll('.product-card');
      const sliderCenter = slider.getBoundingClientRect().left + slider.offsetWidth / 2;

      let closestCardId = null;
      let minDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(sliderCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestCardId = parseInt(card.getAttribute('data-id'), 10);
        }
      });

      setActiveCardId(closestCardId);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      setTimeout(handleScroll, 100);
    }
    return () => slider?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e) => {
    isDown.current = true;
    isDragging.current = false;
    sliderRef.current.classList.add('grabbing');
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
  };

  const handleMouseUp = (e) => {
    isDown.current = false;
    sliderRef.current.classList.remove('grabbing');
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.8;
    
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    
    e.preventDefault();
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleLinkClick = (e) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  return (
    <section className="bestsellers-section">
      <div className="section-header-wrap">
        <h2 className="section-title">Best Sellers</h2>
      </div>

      <div 
        className="products-slider-container" 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onClick={handleLinkClick}
      >
        {productsData.map((product) => (
          <div
            key={product.id}
            data-id={product.id}
            className={`product-card ${activeCardId === product.id ? 'active-mobile' : ''}`}
            style={{ opacity: product.isSoldOut ? 0.75 : 1 }}
          >
            <div className="product-image-wrapper">
              {product.badge && (
                <span className="product-badge" style={{ backgroundColor: product.badgeColor || '#111' }}>
                  {product.badge}
                </span>
              )}
              
              <img src={product.img1} alt={product.title} className="product-img primary" />
              <img src={product.img2} alt={product.title} className="product-img secondary" />

              {!product.isSoldOut && (
                <div className="quick-add-overlay">
                  <button className="quick-add-btn">Quick Add +</button>
                </div>
              )}
            </div>

            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}