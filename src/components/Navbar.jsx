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
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Home',
      href: '/',
      submenu: null
    },
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'About Institute', href: '/about/about-institute' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: 'Director\'s Message', href: '/about/directors-message' },
        { name: 'Quality Policy', href: '/about/quality-policy' },
        { name: 'Affiliations', href: '/about/affiliations' },
        { name: 'Anti-Ragging', href: '/about/anti-ragging' }
      ]
    },
    {
      name: 'Departments',
      href: '/departments',
      submenu: [
        { name: 'Engineering', href: '/departments/engineering' },
        { name: 'AI & Machine Learning', href: '/departments/ai-ml' },
        { name: 'Cyber Security', href: '/departments/cyber-security' },
        { name: 'Robotics & Automation', href: '/departments/robotics' },
        { name: 'Computer Science', href: '/departments/computer-science' }
      ]
    },
    {
      name: 'Academics',
      href: '/academics',
      submenu: [
        { name: 'Courses Offered', href: '/academics/courses-offered' },
        { name: 'Admission Form', href: '/admission-form' },
        { name: 'Academic Calendar', href: '/academics/academic-calendar' },
        { name: 'Teaching & Learning', href: '/academics/teaching-learning' },
        { name: 'Curriculum', href: '/academics/curriculum' },
        { name: 'Exam Schedule', href: '/academics/exam-schedule' },
        { name: 'Student Testimonials', href: '/academics/student-testimonials' }
      ]
    },
    {
      name: 'Facilities',
      href: '/facilities',
      submenu: [
        { name: 'Infrastructure', href: '/facilities/infrastructure' },
        { name: 'Library', href: '/facilities/library' },
        { name: 'Hostels', href: '/facilities/hostels' },
        { name: 'Sports', href: '/facilities/sports' },
        { name: 'Smart Classrooms', href: '/facilities/smart-classrooms' },
        { name: 'Laboratories', href: '/facilities/laboratories' },
        { name: 'Cafeteria', href: '/facilities/cafeteria' },
        { name: 'Healthcare', href: '/facilities/healthcare' },
        { name: 'Security', href: '/facilities/security' }
      ]
    },
    {
      name: 'Training & Placements',
      href: '/placements',
      submenu: [
        { name: 'Campus Training', href: '/placements/campus-training' },
        { name: 'Placement Records', href: '/placements/placement-records' },
        { name: 'Major Recruiters', href: '/placements/major-recruiters' },
        { name: 'Placement Process', href: '/placements/placement-process' },
        { name: 'Student Testimonials', href: '/placements/student-testimonials' }
      ]
    },
    {
      name: 'Alumni',
      href: '/alumni',
      submenu: [
        { name: 'Alumni Directory', href: '/alumni/alumni-directory' },
        { name: 'Alumni Registration', href: '/alumni/alumni-registration' },
        { name: 'Alumni Events', href: '/alumni/alumni-events' }
      ]
    },
    {
      name: 'Life @ SIET',
      href: '/life-at-siet',
      submenu: [
        { name: 'Campus Life', href: '/life-at-siet/campus-life' },
        { name: 'Photo Gallery', href: '/life-at-siet/photo-gallery' },
        { name: 'Video Gallery', href: '/life-at-siet/video-gallery' },
        { name: 'Events & Activities', href: '/life-at-siet/events-activities' }
      ]
    }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleDropdown = (index) =>
    setOpenDropdown((prev) => (prev === index ? null : index));

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
              <li
                key={index}
                className={`nav-item ${item.submenu ? 'has-submenu' : ''} ${openDropdown === index ? 'open' : ''}`}
                onMouseEnter={() => item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => item.submenu && setOpenDropdown(null)}
              >
                <div className="nav-link-row">
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setOpenDropdown(null);
                      closeMobileMenu();
                    }}
                  >
                    {item.name}
                  </NavLink>

                  {item.submenu && (
                    <button
                      className="submenu-toggle"
                      type="button"
                      aria-label={`Toggle ${item.name} submenu`}
                      aria-expanded={openDropdown === index}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(index);
                      }}
                    >
                      <span className="dropdown-arrow" aria-hidden="true">▼</span>
                    </button>
                  )}
                </div>

                {item.submenu && (
                  <div className={`mega-menu ${openDropdown === index ? 'active' : ''}`} role="menu">
                    <div className="mega-menu-header">
                      <p className="mega-kicker">Explore</p>
                      <h3 className="mega-title">{item.name}</h3>
                      <p className="mega-subtitle">Quick links for {item.name.toLowerCase()}.</p>
                    </div>
                    <div className="mega-menu-links">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          to={subitem.href}
                          className="mega-link"
                          role="menuitem"
                          onClick={() => {
                            closeMobileMenu();
                            setOpenDropdown(null);
                          }}
                        >
                          <span className="mega-link-text">{subitem.name}</span>
                          <span className="mega-link-arrow" aria-hidden="true">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
