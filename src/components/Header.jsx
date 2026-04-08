import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import logo from '../assets/LOGO.png';
import haryanaEmblem from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/02/haryana-sarkar.png';

/**
 * Header Component
 * Displays institute identity and key highlights
 */
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content tpo-header-content">
          <div className="tpo-header-emblem" aria-hidden="true">
            <Link to="/" className="header-logo tpo-header-logo" aria-label="SIET Panchkula Home">
              <img src={logo} alt="SIET Panchkula Logo" />
            </Link>
           
          </div>

          <div className="header-info tpo-header-info">
            <p className="tpo-header-hindi">राज्य अभियांत्रिकी एवं प्रौद्योगिकी संस्थान, पंचकुला</p>
            <h1 className="college-name tpo-college-name">STATE INSTITUTE OF ENGINEERING &amp; TECHNOLOGY, PANCHKULA</h1>
            <p className="college-subtitle tpo-college-subtitle">
              APPROVED BY AICTE, NEW DELHI AND AFFILIATED TO KURUKSHETRA UNIVERSITY, KURUKSHETRA
            </p>
            
            
          </div>
           <img
              className="tpo-gov-emblem"
              src={haryanaEmblem}
              alt="Haryana Government Emblem"
              loading="lazy"
            />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
