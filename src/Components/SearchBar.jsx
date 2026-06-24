import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchBar({ isOpen, onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  return (
    <>
      <style>{`
        .search-overlay-container {
          position: fixed;
          top: -100%;
          left: 0;
          width: 100%;
          background-color: #ffffff;
          z-index: 998; 
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: top 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .search-overlay-container.open {
          top: 27px; 
        }

        .search-box-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 30px 50px 45px 50px;
          box-sizing: border-box;
        }

        .search-input-row {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
        }

        .search-bar-icon {
          font-size: 18px;
          color: #111111;
          stroke-width: 0.3;
        }

        .search-main-input {
          width: 100%;
          border: none;
          outline: none;
          background: none;
          padding: 10px 20px;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #111111;
        }

        .search-main-input::placeholder {
          color: #111111;
        }

        .search-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .search-overlay-container.open .search-close-btn {
          transform: rotate(180deg);
        }

        .search-divider-line {
          width: 100%;
          height: 1px;
          background-color: #111111;
          margin-top: 5px;
          margin-bottom: 30px;
        }

        .popular-searches-section h3 {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #111111;
          margin: 0 0 20px 0;
        }

        .popular-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .popular-list li a {
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 1.5px;
          color: #111111;
          transition: opacity 0.2s ease;
        }

        .popular-list li a:hover {
          opacity: 0.6;
        }

        @media (max-width: 991px) {
          .search-box-inner {
            padding: 20px 20px 30px 20px;
          }
          .search-divider-line {
            margin-bottom: 20px;
          }
        }
      `}</style>

      <div className={`search-overlay-container ${isOpen ? 'open' : ''}`}>
        <div className="search-box-inner">
          <div className="search-input-row">
            <CiSearch className="search-bar-icon" />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search" 
              className="search-main-input"
            />
            <button className="search-close-btn" onClick={onClose}>
              <IoCloseOutline />
            </button>
          </div>

          <div className="search-divider-line"></div>

          <div className="popular-searches-section">
            <h3>Popular searches</h3>
            <ul className="popular-list">
              <li><Link to="/news" onClick={onClose}>NEWS</Link></li>
              <li><Link to="/shop/lace-tops" onClick={onClose}>LACE-TOPS</Link></li>
              <li><Link to="/sale" onClick={onClose}>SALE</Link></li>
              <li><Link to="/most-wanted" onClick={onClose}>MOST WANTED</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}