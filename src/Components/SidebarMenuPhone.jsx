import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import '../Styles/SidebarMenuPhone.css';

export default function SidebarMenuPhone({ isOpen, onClose, openSearch, openCart }) {
  const [isShopOpen, setIsShopOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSearchClick = () => {
    onClose();
    openSearch();
  };

  const handleCartClick = () => {
    onClose();
    openCart();
  };

  return (
    <>
     
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`mobile-sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="sidebar-close-btn" onClick={onClose}>
            <IoCloseOutline />
          </button>
        </div>

        <div className="sidebar-body-content">
          <ul className="sidebar-links-list">
            <li><Link to="/" onClick={onClose}>Home</Link></li>
            <li><Link to="/news" onClick={onClose}>News</Link></li>
            
            <li className="shop-toggle-item">
              <div className="shop-header-row" onClick={() => setIsShopOpen(!isShopOpen)}>
                <span style={{ fontFamily: 'Montserrat', fontSize: '14px', letterSpacing: '1px' }}>Shop</span>
                <button className="shop-toggle-btn">
                  {isShopOpen ? '−' : '+'}
                </button>
              </div>
              
              <ul className={`sidebar-shop-dropdown ${isShopOpen ? 'expanded' : ''}`}>
                <li><Link to="/shop/tops" onClick={onClose}>TOPS</Link></li>
                <li><Link to="/shop/lace-tops" onClick={onClose}>LACE TOPS</Link></li>
                <li><Link to="/shop/skirts" onClick={onClose}>SKIRTS</Link></li>
                <li><Link to="/shop/pantalon" onClick={onClose}>PANTS</Link></li>
                <li><Link to="/shop/sale" onClick={onClose}>SALE</Link></li>
                <li><Link to="/shop/sweater" onClick={onClose}>SWEATER</Link></li>
              </ul>
            </li>

            <li><Link to="/sale" onClick={onClose}>Sale</Link></li>
            <li><Link to="/most-wanted" onClick={onClose}>Most Wanted</Link></li>
          </ul>

          <div className="sidebar-divider-line"></div>

          <div className="sidebar-bottom-actions">
            <button className="action-row-btn" onClick={handleSearchClick}>
              <CiSearch style={{ strokeWidth: 0.3 }} />
              <span>Search</span>
            </button>

            <button className="action-row-btn" onClick={handleCartClick}>
              <BsHandbag />
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}