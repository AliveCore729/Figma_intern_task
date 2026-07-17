import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Features.css';

const Feature1 = () => {
  return (
    <section id="studio" className="section feature">
      <div className="container feature-container">
        
        <div className="feature-content">
          <h2 className="heading-lg feature-title">
            To<span className="highlight-underline">morrow</span> should be better than <span className="highlight-pill bg-green">today</span>
          </h2>
          <p className="text-md feature-text">
            We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
          </p>
          <a href="#read-more" className="read-more">
            Read more <ArrowRight size={20} className="arrow-icon" />
          </a>
        </div>

        <div className="feature-image-wrapper">
          {/* Decorative shapes */}
          <div className="shape-blob blob-red-triangle blob-triangle-1"></div>
          <div className="shape-blob blob-red-triangle blob-triangle-2"></div>
          
          <div className="image-circle-container">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" alt="Team meeting" className="feature-img" />
          </div>
          
          {/* Wavy line spanning across */}
          <svg className="wavy-line wavy-line-1" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 200 0, 400 100 T 800 100" stroke="#FF7171" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Feature1;
