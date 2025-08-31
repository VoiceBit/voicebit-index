import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/voicebit-logo.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="padding-inline pad-blk">
      <div className="header">
        <div className="logo-container">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="VoiceBit Logo" className="logo" />
          </Link>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
          <Link to="/how-it-works" className={`nav-link ${isActive('/how-it-works')}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>How It Works</Link>
          <Link to="/about-us" className={`nav-link ${isActive('/about-us')}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
          <div className="menu-border"></div>
          {isMobileMenuOpen && <button className="demo-button">Book a Demo</button>}
        </nav>
        <div className="header-actions">
          <button className="demo-button">Book a Demo</button>
          <div className="hamburger" onClick={toggleMobileMenu}>
            ≡
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;