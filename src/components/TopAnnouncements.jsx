import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const TopAnnouncements = () => {
  const [isPaused, setIsPaused] = useState(false);

  const announcements = [
    'Admission portal open for 2026-27 session',
    'Academic Calendar (Odd Semester) released',
    'Robotics Club orientation on 28 March 2026',
    'Campus hiring prep bootcamp starts next week',
    'Mid-semester exam form deadline: 5 April 2026'
  ];

  return (
    <ScrollReveal>
      <section className="top-announcements" aria-label="Latest notices and announcements">
        <div className="container">
          <div className="top-announcements-wrap">
            <div className="announcements-title-box">
              <span className="announcements-chip">Latest</span>
              <h2>Notices & Announcements</h2>
            </div>

            <div
              className={`announcements-track ${isPaused ? 'paused' : ''}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="announcements-marquee">
                {[...announcements, ...announcements].map((notice, index) => (
                  <article key={`${notice}-${index}`} className="announcement-item">
                    <span className="announcement-dot" aria-hidden="true"></span>
                    <p>{notice}</p>
                  </article>
                ))}
              </div>
            </div>

            <a href="#notices" className="announcements-link">View Notices</a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default TopAnnouncements;
