import React, { useState } from 'react';
import visaIcon from '../assets/images/FooterImage/ApplePay.jpeg';
import mastercardIcon from '../assets/images/FooterImage/Visa1.jpeg';
import applepayIcon from '../assets/images/FooterImage/Visa2.jpeg';
import '../Styles/Footer.css';

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleDropdown = (setter) => {
    setter(prevState => !prevState);
  };

  return (
    <footer className="basic-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            At Venderby's LaceTops, we craft everyday essentials that blend comfort with a couture edge.
            Made from premium Egyptian fabrics, our pieces sculpt, flatter and move with you -
            timeless designs made for everybody, every day.
          </p>
        </div>

        <div className={`footer-col collapsible ${isQuickLinksOpen ? 'is-open' : ''}`}>
          <h3 onClick={() => toggleDropdown(setIsQuickLinksOpen)}>
            Quick Links
            <span className="dropdown-icon">{isQuickLinksOpen ? '×' : '+'}</span>
          </h3>
          <ul className="footer-links">
            <li><a href="#women">Women</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#warm-core">Warm Core</a></li>
            <li><a href="#bc-community">BC Community</a></li>
          </ul>
        </div>

        <div className={`footer-col collapsible ${isHelpOpen ? 'is-open' : ''}`}>
          <h3 onClick={() => toggleDropdown(setIsHelpOpen)}>
            Help & FAQs
            <span className="dropdown-icon">{isHelpOpen ? '×' : '+'}</span>
          </h3>
          <ul className="footer-links">
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#exchange">Exchange & Return</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms Of Service</a></li>
          </ul>
        </div>

        <div className={`footer-col collapsible ${isContactOpen ? 'is-open' : ''}`}>
          <h3 onClick={() => toggleDropdown(setIsContactOpen)}>
            Contact Us
            <span className="dropdown-icon">{isContactOpen ? '×' : '+'}</span>
          </h3>
          <ul className="footer-links">
            <li><a href="#contact">Contact</a></li>
            <li><a href="#collaborate">Collaborate</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-grid footer-secondary-grid">
        <div className="footer-col">
          <div className="payment-icons">
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
            <img src={applepayIcon} alt="Apple Pay" />
          </div>
        </div>

        <div className="newsletter-section">
          <h4>Join our newsletter:</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="button">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;