import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const links = [
  {
    name: 'Course',
    to: '/academics/courses-offered',
  },
  {
    name: 'About',
    to: '/about/about-institute',
  },
  {
    name: 'Director',
    to: '/about/directors-message',
  },
  {
    name: 'Notice',
    to: '/all-notices',
  }
];

const SocialMediaPanel = () => {
  return (
    <ScrollReveal>
      <section className="social-panel section" aria-label="Quick links">
        <div className="container">
          <div className="social-panel-card">
            <div>
              <h2>Quick Links</h2>
              <p>Use these shortcuts to open the most requested SIET sections quickly.</p>
            </div>
            <div className="social-buttons">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="social-panel-btn"
                  aria-label={link.name}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default SocialMediaPanel;
