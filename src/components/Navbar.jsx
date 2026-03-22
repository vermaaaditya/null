import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Departments', href: '/departments' },
    { name: 'Academics', href: '/academics' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Training & Placements', href: '/placements' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Life @ SIET', href: '/life-at-siet' }
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
                <NavLink
                  to={item.href}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
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
