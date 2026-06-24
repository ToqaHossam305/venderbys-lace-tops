import React, { useState, useEffect, useRef } from 'react';


const AnimatedNumber = ({ value, duration = 2000, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;


    const target = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(target)) {
      setCount(value);
      return;
    }

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);

      const easeOutQuad = 1 - (1 - progressRatio) * (1 - progressRatio);
      const currentCount = Math.floor(easeOutQuad * target);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); 
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, startCount]);

  
  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

 
  if (value.includes('+')) {
    return <>{formatNumber(count)}+</>;
  } else if (value.includes('★')) {
    if (!startCount) return <>0.0<span>★</span></>;
    const targetFloat = parseFloat(value);
    return <>{targetFloat.toFixed(1)}</>;
  }

  return <>{formatNumber(count)}</>;
};

export default function StatsSection() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .stats-container {
          background-color: #ffffff;
          padding: 60px 4%;
          font-family: 'Montserrat', sans-serif;
          text-align: center;
          border-bottom: 1px solid #f5f5f5;
        }

        .stats-top-sub {
          font-size: 11px;
          font-weight: 500;
          color: #777777;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 40px;
        }

        .stats-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 35px auto;
          gap: 30px;
        }

        .stat-item {
          flex: 1;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.5px;
          margin-bottom: 8px;
          min-height: 52px; 
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-label {
          font-size: 12px;
          font-weight: 500;
          color: #555555;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .stats-bottom-note {
          font-size: 10px;
          font-weight: 400;
          color: #999999;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* تحسين الريسبونسيف للموبايل ليبقى بالعرض تماماً كالديسكتوب */
        @media (max-width: 768px) {
          .stats-container { 
            padding: 40px 3%; 
          }
          
          .stats-top-sub { 
            font-size: 9px; 
            margin-bottom: 25px; 
            letter-spacing: 1px;
            padding: 0 10px;
          }


          .stats-grid { 
            flex-direction: row; 
            gap: 10px; 
            margin-bottom: 25px; 
          }

       
          .stat-number { 
            font-size: 20px; 
            min-height: 30px; 
            margin-bottom: 4px;
          }

          .stat-number span {
            font-size: 14px !important; 
          }

       
          .stat-label { 
            font-size: 9px; 
            letter-spacing: 0.5px;
            line-height: 1.3;
          }

          .stats-bottom-note { 
            font-size: 8px; 
          }
        }

        @media (max-width: 375px) {
          .stat-number { font-size: 17px; }
          .stat-label { font-size: 8px; }
        }
      `}</style>

      <div className="stats-container" ref={sectionRef}>
        <div className="stats-top-sub">
          Chances are, someone you know already owns it
        </div>

        <div className="stats-grid">
          
      
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedNumber value="241,000+" startCount={isIntersecting} />
            </div>
            <div className="stat-label">Lace Tops Sold</div>
          </div>


          <div className="stat-item">
            <div className="stat-number">
              <AnimatedNumber value="4.5" startCount={isIntersecting} />
              <span style={{ fontSize: '28px', position: 'relative', top: '-2px', marginLeft: '2px' }}>★</span>
            </div>
            <div className="stat-label">Thousands of Reviews</div>
          </div>

        
          <div className="stat-item">
            <div className="stat-number">
              <AnimatedNumber value="154,000+" startCount={isIntersecting} />
            </div>
            <div className="stat-label">Customers</div>
          </div>

        </div>

        <div className="stats-bottom-note">
          Based on customer data from the last 18 months
        </div>
      </div>
    </>
  );
}