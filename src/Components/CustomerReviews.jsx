import React, { useState, useEffect, useRef } from 'react';
import '../Styles/CustomerReviews.css';

const reviewsData = [
  {
    id: 1,
    name: 'Nadine',
    verified: true,
    rating: 5,
    text: 'I received my order, and it’s perfect! I love everything about it.'
  },
  {
    id: 2,
    name: 'Suhaila',
    verified: true,
    rating: 5,
    text: 'I just received my order, and the quality is honestly outstanding. The material feels so premium and everything is just perfect!'
  },
  {
    id: 3,
    name: 'Yasmine',
    verified: true,
    rating: 5,
    text: 'I ordered this as a gift and it was perfect. The quality is beautiful and delivery was fast. Definitely not my last order.'
  },
  {
    id: 4,
    name: 'Mariam',
    verified: true,
    rating: 5,
    text: 'Amazing customer service and breathtaking designs. The fit is incredibly flattering and exactly as pictured!'
  },
  {
    id: 5,
    name: 'Farida',
    verified: true,
    rating: 5,
    text: 'Honestly, the attention to detail is unmatched. It arrived beautifully packaged, and the fabric softness is luxury level.'
  },
  {
    id: 6,
    name: 'Laila',
    verified: true,
    rating: 5,
    text: 'Super fast delivery and flawless craftsmanship. I am so obsessed with the lace detail, will absolutely buy more pieces soon!'
  }
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getCardStatus = (index) => {
    if (index === currentIndex) return 'active';
    if (index === (currentIndex - 1 + reviewsData.length) % reviewsData.length) return 'left';
    if (index === (currentIndex + 1) % reviewsData.length) return 'right';
    return 'hidden';
  };

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Customer Reviews</h2>

      <div className="slider-viewport">
        <div className="edge-fade-left"></div>
        <div className="edge-fade-right"></div>

        <button className="slider-arrow-btn prev-btn" onClick={handlePrev} aria-label="Previous review">
          <svg viewBox="0 0 24 24">
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
          </svg>
        </button>

        {reviewsData.map((review, index) => {
          const status = getCardStatus(index);
          return (
            <div key={review.id} className={`review-card ${status}`}>
              <div className="stars-container">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star-icon">★</span>
                ))}
              </div>

              <div className="reviewer-info">
                <span className="reviewer-name">{review.name}</span>
                {review.verified && (
                  <span className="verified-badge" title="Verified Customer">✓</span>
                )}
              </div>

              <div className="quote-mark">“</div>
              <p className="review-text">{review.text}</p>
            </div>
          );
        })}

        <button className="slider-arrow-btn next-btn" onClick={handleNext} aria-label="Next review">
          <svg viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}