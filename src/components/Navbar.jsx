import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

/**
 * Navbar Component
 * Sticky navigation with responsive mobile menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: 'https://siettpo.vercel.app/' },
    { name: 'EVENTS', href: 'https://siettpo.vercel.app/events' },
    { name: 'BROCHURE', href: 'https://siettpo.vercel.app/placement-brochure' },
    { name: 'CODE OF CONDUCT', href: 'https://siettpo.vercel.app/code-of-conduct' },
    { name: 'CURRENT COHORT', href: 'https://siettpo.vercel.app/batch-2025' },
    { name: 'TEAM', href: 'https://siettpo.vercel.app/team' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="nav-brand">
            SIET
          </Link>

          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar-quick-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={closeMobileMenu}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="nav-cta" onClick={closeMobileMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
