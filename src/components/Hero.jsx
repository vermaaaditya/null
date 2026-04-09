import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import heroBg1 from '../assets/new assets/hero or home page/siet1.jpg';
import heroBg2 from '../assets/new assets/hero or home page/siet2.jpg';
import heroBg3 from '../assets/new assets/hero or home page/siet3.jpg';
import heroBg4 from '../assets/new assets/hero or home page/siet2.webp';
/**
 * Hero Component
 * Hero banner with rotating backgrounds and quick actions
 */
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src={heroImages[currentImageIndex]}
          alt="College Campus"
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <p className="hero-eyebrow">Admissions Open for 2026-27 Session</p>
            <h1 className="hero-title">
              Engineering Education Built for Real-World Impact
            </h1>
            <p className="hero-subtitle">
              Learn from faculty mentors, build in modern labs, and graduate with the confidence to lead in AI, Cyber Security, and Robotics.
            </p>
            <div className="hero-buttons">
              <Link to="/departments" className="btn btn-primary">
                Start Application
              </Link>
              <Link to="/admission-form" className="btn btn-secondary">
                Admission Form
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">12+</h3>
              <p className="stat-label">Labs and Studios</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Active Students</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Expert Faculty</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Placement Assistance</p>
            </div>
          </div>
        </div>
      </div>

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
