import React, { useState, useEffect, useRef } from 'react';
import img1 from '../assets/homepageimage/siet1.jpg';
import img2 from '../assets/homepageimage/siet2.webp';
import img3 from '../assets/homepageimage/siet2.jpg';
import img4 from '../assets/homepageimage/siet3.jpg';
import DirectorDesk from './DirectorDesk';
const Hero = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 4000; // 4 seconds per image

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => resetTimeout();
  }, [currentIndex]);

  function resetTimeout() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  return (
    <section className="hero" id="home">
      
      <div className="hero-background">
        {images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt="College Campus"
            className={`hero-bg-img ${idx === currentIndex ? 'active' : ''}`}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">
              Building Tomorrow's Engineers Today
            </h1>
            <p className="hero-subtitle">
              Empowering minds through innovation, research, and excellence in engineering education
            </p>
            <div className="hero-buttons">
              <a href="#admissions" className="btn btn-primary">
                Apply Now
              </a>
              <a href="#about" className="btn btn-secondary">
                Explore Campus
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Students</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Expert Faculty</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Placement Rate</p>
            </div>
          </div>
        </div>
      </div>
      <DirectorDesk />
    </section>
  );
};

export default Hero;
