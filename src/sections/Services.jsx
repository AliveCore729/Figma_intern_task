import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Colaborative & partnership",
      subtitle: "Office of multiple interest content",
    },
    {
      title: "We talk about our weight",
      subtitle: "The hanger US Air force digital experimental",
    },
    {
      title: "Piloting digital confidence",
      subtitle: "Delta faucet content, social, digital",
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container services-container">
        
        <div className="services-header">
          <h2 className="heading-xl">
            What we <span className="highlight-pill bg-green">can</span><br />
            <span className="highlight-underline">offer</span> you!
          </h2>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="service-info">
                <p className="service-subtitle">{service.subtitle}</p>
                <h3 className="service-title">{service.title}</h3>
              </div>
              
              <div className={`service-arrow ${hoveredIndex === index ? 'active' : ''}`}>
                <ArrowRight size={40} />
              </div>

              {/* Optional: Add hover image overlay to match the 'Piloting digital confidence' abstract art */}
              {index === 2 && (
                <div className={`service-hover-art ${hoveredIndex === index ? 'visible' : ''}`}>
                  <div className="abstract-art-circle"></div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
