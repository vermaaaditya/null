import React, { useState, useEffect } from 'react';
import '../styles.css';
import heroBg1 from '../assets/homepageimage/siet1.jpg';
import heroBg2 from '../assets/homepageimage/siet2.jpg';
import heroBg3 from '../assets/homepageimage/siet3.jpg';
import heroBg4 from '../assets/homepageimage/siet2.webp';
/**
 * Hero Component
 * Full-width banner section with overlay text
 * Features college name and inspiring tagline with autoplay carousel
 */
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroBg1, heroBg2, heroBg3 , heroBg4];

  // Autoplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src={heroImages[currentImageIndex]}
          alt="College Campus"
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        />
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

      {/* Statistics Bar */}
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

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
