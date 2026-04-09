import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { topAnnouncementsData } from '../data/noticesData';

const TopAnnouncements = () => {
  const [isPaused, setIsPaused] = useState(false);

  const announcements = topAnnouncementsData;

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
                  <a
                    key={`${notice.id}-${index}`}
                    className="announcement-item announcement-link-item"
                    href={notice.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open notice: ${notice.text}`}
                  >
                    <span className="announcement-dot" aria-hidden="true"></span>
                    <p>{notice.text}</p>
                  </a>
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
