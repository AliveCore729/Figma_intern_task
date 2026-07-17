import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="container testimonials-container">
        
        <div className="testimonials-header">
          <h2 className="heading-lg">
            <span className="highlight-pill bg-green">What</span> our customer<br />
            says <span className="highlight-underline">About Us</span>
          </h2>
        </div>

        <div className="testimonials-content">
          
          {/* Floating avatar images */}
          <div className="testimonial-avatars">
             <img src="https://i.pravatar.cc/300?img=1" alt="Customer" className="test-avatar ta-1 animate-float" style={{animationDelay: '0s'}} />
             <img src="https://i.pravatar.cc/300?img=2" alt="Customer" className="test-avatar ta-2 animate-float" style={{animationDelay: '1s'}} />
             <img src="https://i.pravatar.cc/300?img=3" alt="Customer" className="test-avatar ta-3 animate-float" style={{animationDelay: '2s'}} />
             <img src="https://i.pravatar.cc/300?img=4" alt="Customer" className="test-avatar ta-4 animate-float" style={{animationDelay: '0.5s'}} />
             <img src="https://i.pravatar.cc/300?img=5" alt="Customer" className="test-avatar ta-5 animate-float" style={{animationDelay: '1.5s'}} />
             <img src="https://i.pravatar.cc/300?img=6" alt="Customer" className="test-avatar ta-6 animate-float" style={{animationDelay: '2.5s'}} />
          </div>

          <div className="quote-box">
            <div className="quote-marks left-marks">
              <span className="mark">"</span>
            </div>
            
            <p className="quote-text text-md">
              Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable
            </p>
            
            <div className="quote-marks right-marks">
              <span className="mark">"</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
