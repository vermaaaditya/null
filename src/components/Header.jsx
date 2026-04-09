import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/new-assets/logos/LOGO.png';
import haryanaEmblem from '../assets/new-assets/logos/haryana-sarkar.png';

/**
 * Header Component
 * Displays institute identity and key highlights
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content tpo-header-content">
          <img
            className="tpo-gov-emblem"
            src={haryanaEmblem}
            alt="Haryana Government Emblem"
            loading="lazy"
          />

          <div className="header-info tpo-header-info">
            <p className="tpo-header-hindi">राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, पंचकुला</p>
            <h1 className="college-name tpo-college-name">STATE INSTITUTE OF ENGINEERING &amp; TECHNOLOGY, PANCHKULA</h1>
            <p className="college-subtitle tpo-college-subtitle">
              APPROVED BY AICTE, NEW DELHI AND AFFILIATED TO KURUKSHETRA UNIVERSITY, KURUKSHETRA
            </p>
            
            
          </div>
          <div className="tpo-header-emblem">
            <Link to="/" className="header-logo tpo-header-logo" aria-label="SIET Panchkula Home">
              <img src={logo} alt="SIET Panchkula Logo" />
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
