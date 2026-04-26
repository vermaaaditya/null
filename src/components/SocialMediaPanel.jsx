import React from 'react';
import { Link } from 'react-router-dom';

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
    <nav className="quick-links-sidebar" aria-label="Quick navigation links">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className="quick-links-sidebar-btn"
          aria-label={link.name}
        >
          <span>{link.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default SocialMediaPanel;
