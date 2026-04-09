import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { noticesStripData } from '../data/noticesData';

/**
 * NoticesStrip Component
 * Horizontal scrolling notices with hover pause
 */
const NoticesStrip = () => {
  const [isPaused, setIsPaused] = useState(false);

  const notices = noticesStripData;

  return (
    <section className="notices-strip" id="notices">
      <div className="container">
        <div className="notices-container">
          <div className="notices-label">
            <span className="label-icon" aria-hidden="true">LIVE</span>
            <span className="label-text">Latest Notices</span>
          </div>

          <div
            className={`notices-wrapper ${isPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="notices-scroll">
              {[...notices, ...notices].map((notice, index) => (
                <a
                  key={`${notice.id}-${index}`}
                  className={`notice-item notice-${notice.type}`}
                  href={notice.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open notice: ${notice.text}`}
                >
                  <span className="notice-icon">{notice.icon}</span>
                  <span className="notice-text">{notice.text}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="notices-action">
            <Link to="/all-notices" className="view-all-btn">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticesStrip;