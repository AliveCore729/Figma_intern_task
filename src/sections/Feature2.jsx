import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Features.css';

const Feature2 = () => {
  return (
    <section className="section feature">
      <div className="container feature-container reverse">
        
        <div className="feature-image-wrapper">
          {/* Decorative shapes */}
          <div className="shape-blob blob-red-triangle blob-triangle-3"></div>
          
          <div className="image-circle-container">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop" alt="Working together" className="feature-img" />
          </div>
          
          {/* Wavy line spanning across */}
          <svg className="wavy-line wavy-line-2" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100 Q 200 200, 400 100 T 800 100" stroke="#FF7171" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="feature-content">
          <h2 className="heading-lg feature-title">
            <span className="highlight-pill bg-green">See</span> how we can help you <span className="highlight-underline">progress</span>
          </h2>
          <p className="text-md feature-text">
            We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
          </p>
          <a href="#read-more" className="read-more">
            Read more <ArrowRight size={20} className="arrow-icon" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Feature2;
