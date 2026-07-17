import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Studio', 'Services', 'Contact', 'FAQ\'s'];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">Elementum</div>
        
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link} className="nav-item">
                <a href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </div>
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link} className="mobile-nav-item">
                <a 
                  href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '')}`} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
