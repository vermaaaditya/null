import React, { useState, useEffect } from 'react';
import '../styles.css';

/**
 * Navbar Component
 * Sticky navigation bar with smooth scroll behavior
 * Includes responsive mobile menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Academics', href: '#academics' },
    { name: 'Students Section', href: '#students' },
    { name: 'Placements', href: '#placements' },
    { name: 'Notices', href: '#notices' }
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
         
         

         
          <ul className={`navbar-quick-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
