import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
/**
 * Navbar Component
 * Sticky navigation with responsive mobile menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 920px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
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
        { name: 'History', href: '/about/history' },
        { name: 'About Institute', href: '/about/about-institute' },
        { name: 'Vision & Mission', href: '/about/vision-mission' },
        { name: "Director Principal's Desk", href: '/about/directors-message' },
        { name: 'Unnat Bharat Abhiyan', href: 'https://unnatbharatabhiyan.gov.in/', external: true }
      ]
    },
    {
      name: 'Departments',
      href: '/departments',
      submenu: [
        { name: 'Computer Science & Engineering', href: '/departments/cse' },
        { name: 'AI & Machine Learning', href: '/departments/ai-ml' },
        { name: 'Cyber Security', href: '/departments/cyber-security' },
        { name: 'Robotics & Automation', href: '/departments/robotics' },
        { name: 'Electrical Engineering', href: '/departments/electrical-engineering' },
        { name: 'Electronics Engineering (VLSI Design)', href: '/departments/electronics-vlsi' }
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
        { name: 'Student Testimonials', href: '/academics/student-testimonials' },
        { name: 'Anti-Ragging', href: '/academics/anti-ragging' }
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
      href: 'https://siettpo.vercel.app/',
      external: true,
      submenu: null
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
        { name: 'Life @ SIET Overview', href: '/life-at-siet' },
        { name: 'Events', href: '/events' },
        { name: 'Student Helpline', href: '/student-helpline' },
        { name: 'Top-Level Sections', href: '/top-level-sections' },
        { name: 'Staff Utilities', href: '/staff' },
        { name: 'Content Differences', href: '/content-differences' }
      ]
    }
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleDropdown = (index) => setOpenDropdown((prev) => (prev === index ? null : index));

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
                className={`nav-item ${item.submenu ? 'has-submenu' : ''}`}
                onMouseEnter={() => !isMobile && item.submenu && setOpenDropdown(index)}
                onMouseLeave={() => !isMobile && item.submenu && setOpenDropdown(null)}
              >
                <div className="nav-link-row">
                  {item.external ? (
                    <a
                      href={item.href}
                      className="nav-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setOpenDropdown(null);
                        closeMobileMenu();
                      }}
                    >
                      {item.name}
                    </a>
                  ) : item.submenu ? (
                    <button
                      type="button"
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(index);
                      }}
                    >
                      {item.name}
                      <span className={`dropdown-arrow ${openDropdown === index ? 'open' : ''}`}>▼</span>
                    </button>
                  ) : (
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
                  )}
                </div>

                {item.submenu && (
                  <ul className={`dropdown-menu ${openDropdown === index ? 'active' : ''}`}>
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex} className="dropdown-item">
                        {subitem.external ? (
                          <a
                            href={subitem.href}
                            className="dropdown-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              closeMobileMenu();
                              setOpenDropdown(null);
                            }}
                          >
                            {subitem.name}
                          </a>
                        ) : (
                          <Link
                            to={subitem.href}
                            className="dropdown-link"
                            onClick={() => {
                              closeMobileMenu();
                              setOpenDropdown(null);
                            }}
                          >
                            {subitem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
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
