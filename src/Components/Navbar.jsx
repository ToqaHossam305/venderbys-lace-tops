import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoChevronDownOutline } from 'react-icons/io5';
import SearchBar from '../Components/SearchBar';
import CartBar from '../Components/CartBar'; 
import SidebarMenuPhone from './SidebarMenuPhone';
import '../Styles/Navbar.css';

export default function Navbar() {
  const [selectedCountry, setSelectedCountry] = useState('Austria (EUR €)');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const countries = [
    'Albania (EUR €)', 'Armenia (EUR €)', 'Australia (AUD $)', 
    'Austria (EUR €)', 'Belgium (EUR €)', 'Bulgaria (EUR €)', 
    'Canada (CAD $)', 'Croatia (EUR €)', 'Cyprus (EUR €)'
  ];

  return (
    <header className="main-header">
      <div className="announcement-bar">
        <div className="marquee-track">
          <span>4,6/5 ★ on TrustPilot &nbsp;&nbsp;|&nbsp;&nbsp; 2-5 Business Days Delivery &nbsp;&nbsp;|&nbsp;&nbsp; 300,000+ Customers Worldwide</span>
          <span>4,6/5 ★ on TrustPilot &nbsp;&nbsp;|&nbsp;&nbsp; 2-5 Business Days Delivery &nbsp;&nbsp;|&nbsp;&nbsp; 300,000+ Customers Worldwide</span>
          <span>4,6/5 ★ on TrustPilot &nbsp;&nbsp;|&nbsp;&nbsp; 2-5 Business Days Delivery &nbsp;&nbsp;|&nbsp;&nbsp; 300,000+ Customers Worldwide</span>
          <span>4,6/5 ★ on TrustPilot &nbsp;&nbsp;|&nbsp;&nbsp; 2-5 Business Days Delivery &nbsp;&nbsp;|&nbsp;&nbsp; 300,000+ Customers Worldwide</span>
        </div>
      </div>

      <nav className="navbar">
        <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
          <RiMenu2Fill />
        </button>

        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>VENDERBY'S</Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          
          <li className="dropdown-trigger">
            <span 
              className="has-arrow" 
              style={{ 
                cursor: 'pointer', 
                fontSize: '11.5px',      
                fontWeight: '200',      
                textTransform: 'uppercase', 
                letterSpacing: '1px',    
                color: 'inherit'         
              }}
            >
              Shop
            </span>
            <ul className="shop-dropdown">
              <li><Link to="/shop/tops">TOPS</Link></li>
              <li><Link to="/shop/lace-tops">LACE TOPS</Link></li>
              <li><Link to="/shop/skirts">SKIRTS</Link></li>
              <li><Link to="/shop/pantalon">PANTS</Link></li>
              <li><Link to="/shop/sale">SALE</Link></li>
              <li><Link to="/shop/sweater">SWEATER</Link></li>
            </ul>
          </li>
          
          <li><Link to="/sale" className="sale-link">Sale</Link></li>
          <li><Link to="/most-wanted">Most Wanted</Link></li>
        </ul>

        <div className="nav-actions">
          <div className="country-selector">
            <button className="country-btn" onClick={() => setIsCountryOpen(!isCountryOpen)}>
              <span>{selectedCountry}</span>
              <IoChevronDownOutline className={`arrow-icon ${isCountryOpen ? 'rotate' : ''}`} />
            </button>
            
            {isCountryOpen && (
              <ul className="country-dropdown">
                {countries.map((country) => (
                  <li 
                    key={country} 
                    className={selectedCountry === country ? 'selected-item' : ''}
                    onClick={() => {
                      setSelectedCountry(country);
                      setIsCountryOpen(false);
                    }}
                  >
                    {country}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="action-icon-btn" onClick={() => setIsSearchOpen(true)}>
            <CiSearch style={{ strokeWidth: 0.3 }} />
          </button>
          
          <button className="action-icon-btn" onClick={() => setIsCartOpen(true)}>
            <BsHandbag />
          </button>
        </div>
      </nav>

      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartBar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <SidebarMenuPhone 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        openSearch={() => setIsSearchOpen(true)} 
        openCart={() => setIsCartOpen(true)} 
      />  
    </header>
  );
}