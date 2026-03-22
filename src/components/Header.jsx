import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/LOGO.png';

/**
 * Header Component
 * Displays institute identity and key highlights
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="header-logo" aria-label="State Institute of Engineering and Technology">
            <img
              src={logo}
              alt="SIET Logo"
            />
          </Link>

          <div className="header-info">
            <p className="header-kicker">Public Technical Institute</p>
            <h1 className="college-name">
              State Institute of Engineering and Technology (SIET)
            </h1>
            <p className="college-subtitle">
              Approved by AICTE, New Delhi and affiliated to Kurukshetra University
            </p>
            <p className="college-tagline">
              Practical learning, research culture, and industry-ready graduates
            </p>
          </div>

          <div className="header-meta" aria-label="Institute Highlights">
            <span className="meta-chip">Admissions 2026 Open</span>
            <span className="meta-chip">NAAC A++ Quality Focus</span>
            <span className="meta-chip">Placement Support Cell</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
