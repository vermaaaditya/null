import React from 'react';
import '../styles.css';
import logo from '../assets/LOGO.png';

/**
 * Header Component
 * Displays the college logo, name, and affiliation
 * Government-style design with dark blue background
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Left: Logo */}
          <div className="header-logo">
            <img 
              src={logo}
              alt="College Logo" 
            />
          </div>

          {/* Center: College Name and Info */}
          <div className="header-info">
            <h1 className="college-name">
              State Institute of Engineering and Technology (SIET)
            </h1>
            <p className="college-subtitle">
            Approved by AICTE, New Delhi and Affiliated to Kurukshetra University, Kurukshetra
            </p>
            <p className="college-tagline">
              Excellence in Technical Education Since 2023
            </p>
          </div>

          {/* Right: Emblem or Additional Logo */}
       
        </div>
      </div>
    </header>
  );
};

export default Header;
