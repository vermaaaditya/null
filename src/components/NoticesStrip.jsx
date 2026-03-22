import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

/**
 * NoticesStrip Component
 * Horizontal scrolling notices with hover pause
 */
const NoticesStrip = () => {
  const [isPaused, setIsPaused] = useState(false);

  const notices = [
    {
      id: 1,
      text: 'Admissions open for academic year 2026-27',
      type: 'important',
      icon: 'AD'
    },
    {
      id: 2,
      text: 'Exam form submission deadline: February 15, 2026',
      type: 'deadline',
      icon: 'DL'
    },
    {
      id: 3,
      text: 'Campus placement drive by top recruiters this month',
      type: 'placement',
      icon: 'PL'
    },
    {
      id: 4,
      text: 'Semester results available on the student portal',
      type: 'result',
      icon: 'RS'
    },
    {
      id: 5,
      text: 'Machine Learning workshop from February 20-22, 2026',
      type: 'event',
      icon: 'EV'
    }
  ];

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
                <div key={`${notice.id}-${index}`} className={`notice-item notice-${notice.type}`}>
                  <span className="notice-icon">{notice.icon}</span>
                  <span className="notice-text">{notice.text}</span>
                </div>
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