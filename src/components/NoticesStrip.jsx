import React, { useState, useEffect } from 'react';
import '../styles.css';

/**
 * NoticesStrip Component
 * Scrolling announcements and notices strip
 * Features auto-scrolling with pause on hover
 */
const NoticesStrip = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Notices data
  const notices = [
    { 
      id: 1, 
      text: 'Admission Open for Academic Year 2026-27',
      type: 'important',
      icon: '📢'
    },
    { 
      id: 2, 
      text: 'Last date to submit exam forms: February 15, 2026',
      type: 'deadline',
      icon: '⏰'
    },
    { 
      id: 3, 
      text: 'Campus Placement Drive by Tech Giants - Register Now!',
      type: 'placement',
      icon: '💼'
    },
    { 
      id: 4, 
      text: 'Results for Semester Examinations declared on student portal',
      type: 'result',
      icon: '📊'
    },
    { 
      id: 5, 
      text: 'Workshop on Machine Learning - Feb 20-22, 2026',
      type: 'event',
      icon: '🎓'
    }
  ];

  return (
    <section className="notices-strip" id="notices">
      <div className="notices-container">
        <div className="notices-label">
          <span className="label-icon">📣</span>
          <span className="label-text">Latest Notices</span>
        </div>
        
        <div 
          className={`notices-wrapper ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="notices-scroll">
            {/* Duplicate notices for seamless loop */}
            {[...notices, ...notices].map((notice, index) => (
              <div key={index} className={`notice-item notice-${notice.type}`}>
                <span className="notice-icon">{notice.icon}</span>
                <span className="notice-text">{notice.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="notices-action">
          <a href="#all-notices" className="view-all-btn">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoticesStrip;
