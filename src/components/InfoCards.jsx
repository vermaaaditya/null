import React, { useEffect, useRef } from 'react';
import '../styles.css';

/**
 * InfoCards Component
 * Three information cards with autoplay scrolling
 * Combines InfoCards styling with PlacementUpdate autoplay functionality
 */
const InfoCards = () => {
  // News & Events Data
  const newsEvents = [
    { title: 'Annual Tech Fest 2026', date: 'Feb 15-17', isNew: true },
    { title: 'Guest Lecture by IIT Professor', date: 'Feb 10', isNew: true },
    { title: 'Industrial Visit to Tech Park', date: 'Feb 08', isNew: false },
    { title: 'Sports Week Inauguration', date: 'Feb 05', isNew: false }
  ];

  // Notifications Data
  const notifications = [
    { title: 'Exam Schedule Released', date: 'Feb 06', isNew: true },
    { title: 'Scholarship Application Open', date: 'Feb 04', isNew: true },
    { title: 'Library Extended Hours', date: 'Feb 02', isNew: false },
    { title: 'Workshop on AI & ML', date: 'Jan 30', isNew: false }
  ];

  // Placement Updates Data
  const placements = [
    { title: '150 Students Placed in Top Companies', date: 'Feb 05', isNew: true },
    { title: 'Microsoft Campus Drive', date: 'Feb 03', isNew: true },
    { title: 'Amazon Pre-Placement Talk', date: 'Jan 28', isNew: false },
    { title: 'Google Recruitment Process', date: 'Jan 25', isNew: false }
  ];

  // Refs for each card's scroll container
  const newsScrollRef = useRef(null);
  const newsContentRef = useRef(null);
  const newsPauseRef = useRef(false);

  const notifScrollRef = useRef(null);
  const notifContentRef = useRef(null);
  const notifPauseRef = useRef(false);

  const placScrollRef = useRef(null);
  const placContentRef = useRef(null);
  const placPauseRef = useRef(false);

  // Setup autoplay scroll for a card
  const setupAutoScroll = (scrollRef, contentRef, pauseRef) => {
    useEffect(() => {
      const container = scrollRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      let animationId;
      const speed = 0.6;
      container.scrollTop = 0;

      const smoothScroll = () => {
        if (!pauseRef.current) {
          container.scrollTop += speed;

          if (container.scrollTop >= content.scrollHeight / 2) {
            container.scrollTop = 0;
          }
        }
        animationId = requestAnimationFrame(smoothScroll);
      };

      animationId = requestAnimationFrame(smoothScroll);
      return () => cancelAnimationFrame(animationId);
    }, []);
  };

  // Apply autoplay to each card
  setupAutoScroll(newsScrollRef, newsContentRef, newsPauseRef);
  setupAutoScroll(notifScrollRef, notifContentRef, notifPauseRef);
  setupAutoScroll(placScrollRef, placContentRef, placPauseRef);

  // Scrollable Card Body Component
  const ScrollableCardBody = ({ items, scrollRef, contentRef, pauseRef }) => (
    <div
      className="card-body"
      ref={scrollRef}
      onMouseEnter={() => (pauseRef.current = true)}
      onMouseLeave={() => (pauseRef.current = false)}
      style={{ height: '250px', overflow: 'hidden', position: 'relative' }}
    >
      <ul className="card-list scroll-list" ref={contentRef}>
        {[...items, ...items].map((item, index) => (
          <li key={index} className="card-list-item">
            <div className="list-item-content">
              <span className="item-title">{item.title}</span>
              <span className="item-date">{item.date}</span>
            </div>
            {item.isNew && <span className="badge-new">NEW</span>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="info-cards section" id="updates">
      <div className="container">
        <div className="cards-grid">
          {/* Card 1: News & Events */}
          <div className="info-card card-blue">
            <div className="card-header">
              <div className="card-icon">📰</div>
              <h3 className="card-title">News & Events</h3>
            </div>
            <ScrollableCardBody
              items={newsEvents}
              scrollRef={newsScrollRef}
              contentRef={newsContentRef}
              pauseRef={newsPauseRef}
            />
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', padding: '0.75rem 1.5rem' }}>
              <a href="#news" className="card-link">
                View All News →
              </a>
            </div>
          </div>

          {/* Card 2: Notifications */}
          <div className="info-card card-green">
            <div className="card-header">
              <div className="card-icon">🔔</div>
              <h3 className="card-title">Notifications</h3>
            </div>
            <ScrollableCardBody
              items={notifications}
              scrollRef={notifScrollRef}
              contentRef={notifContentRef}
              pauseRef={notifPauseRef}
            />
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', padding: '0.75rem 1.5rem' }}>
              <a href="#notifications" className="card-link">
                View All Notifications →
              </a>
            </div>
          </div>

          {/* Card 3: Placement Updates */}
          <div className="info-card card-peach">
            <div className="card-header">
              <div className="card-icon">💼</div>
              <h3 className="card-title">Placement Updates</h3>
            </div>
            <ScrollableCardBody
              items={placements}
              scrollRef={placScrollRef}
              contentRef={placContentRef}
              pauseRef={placPauseRef}
            />
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', padding: '0.75rem 1.5rem' }}>
              <a href="#placements" className="card-link">
                View All Placements →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
