import React from 'react';
import '../styles.css';

/**
 * Footer Component
 * Institute info, links, and contact details with social media integration
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: 'HOME', href: 'https://siettpo.vercel.app/' },
    { label: 'EVENTS', href: 'https://siettpo.vercel.app/events' },
    { label: 'CODE OF CONDUCT', href: 'https://siettpo.vercel.app/code-of-conduct' },
    { label: 'CURRENT COHORT', href: 'https://siettpo.vercel.app/batch-2025' },
    { label: 'TEAM', href: 'https://siettpo.vercel.app/team' },
    { label: 'CONTACT US', href: 'https://siettpo.vercel.app/contact-us' },
  ];

  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid tpo-footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">STATE INSTITUTE OF ENGINEERING &amp; TECHNOLOGY, PANCHKULA</h3>
              <p className="footer-text">TRAINING &amp; PLACEMENT OFFICE</p>
              <p className="footer-text tpo-footer-text-gap">
                Bridging academia and industry by connecting skilled graduates with leading organizations across the country.
              </p>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">QUICK LINKS</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">CONTACT TPO</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div>
                    <p><a href="mailto:tpo@sietpanchkula.ac.in">tpo@sietpanchkula.ac.in</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <p><a href="tel:01722979887">0172-2979887</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div>
                    <h4 className="tpo-find-title">FIND US</h4>
                    <p>Sector 26, Panchkula, Haryana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} SIET PANCHKULA. TRAINING &amp; PLACEMENT OFFICE. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;