import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="container hero-container">
        
        {/* Decorative Floating Elements */}
        <div className="hero-decorations">
           {/* We use Pravatar for placeholder avatar images to match the 'floating faces' design */}
           <img src="https://i.pravatar.cc/300?img=68" alt="Team member" className="float-img img-1 animate-float" style={{animationDelay: '0s'}} />
           <img src="https://i.pravatar.cc/300?img=59" alt="Team member" className="float-img img-2 animate-float" style={{animationDelay: '1s'}} />
           <img src="https://i.pravatar.cc/300?img=47" alt="Team member" className="float-img img-3 animate-float" style={{animationDelay: '2s'}} />
           <img src="https://i.pravatar.cc/300?img=33" alt="Team member" className="float-img img-4 animate-float" style={{animationDelay: '0.5s'}} />
           <img src="https://i.pravatar.cc/300?img=12" alt="Team member" className="float-img img-5 animate-float" style={{animationDelay: '1.5s'}} />
           <img src="https://i.pravatar.cc/300?img=11" alt="Team member" className="float-img img-6 animate-float" style={{animationDelay: '2.5s'}} />
           
           {/* Abstract Shapes */}
           <div className="shape-blob blob-purple animate-pulse-slow"></div>
           <div className="shape-line line-red">
             <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10 Q 90 90 10 190 T 10 390" stroke="#FF7171" strokeWidth="4" fill="none" strokeLinecap="round"/>
             </svg>
           </div>
        </div>

        <div className="hero-content">
          <h1 className="heading-xl hero-title">
            The <span className="highlight-underline">thinkers</span> and doers were changing the <span className="highlight-pill bg-pink">status Quo</span> with
          </h1>
          <p className="text-md hero-subtitle">
            We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
