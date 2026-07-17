import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        
        <div className="newsletter-section">
          <h2 className="heading-xl newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-subtitle">To make your stay special and even more memorable</p>
          <button className="btn-subscribe">Subscribe Now</button>
          
          <div className="shape-blob blob-purple footer-blob"></div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-column">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#services">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <ul className="footer-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Accesibility</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-list">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Youtube</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-list contact-info">
              <li>1498w Fluton ste, STE 2D</li>
              <li>Chicgo, IL 63867.</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©2022 Homey. All rights reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
