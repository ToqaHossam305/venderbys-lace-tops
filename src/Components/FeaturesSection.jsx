import React from 'react';

export default function FeaturesSection() {
  return (
    <>
      <style>{`
        .features-container {
          background-color: #ffffff;
          padding: 50px 4%;
          font-family: 'Montserrat', sans-serif;
          border-bottom: 1px solid #f5f5f5;
        }

        .features-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 40px;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }

        .feature-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 8px;
          color: #111111;
        }

        .feature-icon {
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-title {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .feature-subtitle {
          font-size: 12px;
          font-weight: 400;
          color: #666666;
          text-transform: lowercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 768px) {
          .features-container {
            padding: 35px 3%;
          }

          .features-grid {
            flex-direction: row;
            gap: 10px;
          }

          .feature-icon svg {
            width: 18px;
            height: 18px;
          }

          .feature-title {
            font-size: 16px;
          }

          .feature-subtitle {
            font-size: 9px;
            letter-spacing: 0px;
            line-height: 1.2;
            padding: 0 4px;
          }
        }

        @media (max-width: 375px) {
          .feature-title {
            font-size: 14px;
          }
          .feature-subtitle {
            font-size: 8px;
          }
          .features-grid {
            gap: 5px;
          }
        }
      `}</style>

      <div className="features-container">
        <div className="features-grid">
          
          <div className="feature-item">
            <div className="feature-header">
              <span className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
              </span>
              <span className="feature-title">14 days</span>
            </div>
            <div className="feature-subtitle">easy exchange & refund</div>
          </div>

          <div className="feature-item">
            <div className="feature-header">
              <span className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </span>
              <span className="feature-title">48 hrs</span>
            </div>
            <div className="feature-subtitle">avg. delivery</div>
          </div>

          <div className="feature-item">
            <div className="feature-header">
              <span className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span className="feature-title">90%</span>
            </div>
            <div className="feature-subtitle">buy again</div>
          </div>

        </div>
      </div>
    </>
  );
}