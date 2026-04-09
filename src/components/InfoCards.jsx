import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import { notificationsListData, noticesListData } from '../data/noticesData';

const useAutoScroll = (scrollRef, contentRef, pauseRef) => {
  useEffect(() => {
    const container = scrollRef.current;
    const content = contentRef.current;
    if (!container || !content) {
      return undefined;
    }

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

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [scrollRef, contentRef, pauseRef]);
};

const ScrollableCardBody = ({ items, scrollRef, contentRef, pauseRef }) => (
  <div
    className="card-body"
    ref={scrollRef}
    onMouseEnter={() => {
      pauseRef.current = true;
    }}
    onMouseLeave={() => {
      pauseRef.current = false;
    }}
  >
    {(!items || items.length === 0) ? (
      <div className="card-empty">
        <p className="card-empty-title">No updates available</p>
        <p className="card-empty-subtitle">This section will appear once official updates are added.</p>
      </div>
    ) : (
    <ul className="card-list scroll-list" ref={contentRef}>
      {[...items, ...items].map((item, index) => (
        <li key={`${item.id || item.title}-${index}`} className="card-list-item">
          {item.href ? (
            <a
              className="list-item-link"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open: ${item.title}`}
            >
              <div className="list-item-content">
                <span className="item-title">{item.title}</span>
                <span className="item-date">{item.date}</span>
              </div>
              {item.isNew && <span className="badge-new">NEW</span>}
            </a>
          ) : (
            <>
              <div className="list-item-content">
                <span className="item-title">{item.title}</span>
                <span className="item-date">{item.date}</span>
              </div>
              {item.isNew && <span className="badge-new">NEW</span>}
            </>
          )}
        </li>
      ))}
    </ul>
    )}
  </div>
);

/**
 * InfoCards Component
 * Three auto-scrolling information cards
 */
const InfoCards = () => {
  const newsEvents = [];

  const notifications = notificationsListData;
  const notices = noticesListData;

  const placements = [];

  const newsScrollRef = useRef(null);
  const newsContentRef = useRef(null);
  const newsPauseRef = useRef(false);

  const notifScrollRef = useRef(null);
  const notifContentRef = useRef(null);
  const notifPauseRef = useRef(false);

  const noticesScrollRef = useRef(null);
  const noticesContentRef = useRef(null);
  const noticesPauseRef = useRef(false);

  const placScrollRef = useRef(null);
  const placContentRef = useRef(null);
  const placPauseRef = useRef(false);

  useAutoScroll(newsScrollRef, newsContentRef, newsPauseRef);
  useAutoScroll(notifScrollRef, notifContentRef, notifPauseRef);
  useAutoScroll(noticesScrollRef, noticesContentRef, noticesPauseRef);
  useAutoScroll(placScrollRef, placContentRef, placPauseRef);

  return (
    <section className="info-cards section" id="updates">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Campus Updates</h2>
          <div className="title-underline"></div>
        </div>

        <div className="cards-grid">
          <div className="info-card card-blue">
            <div className="card-header">
              <div className="card-icon" aria-hidden="true">NEWS</div>
              <h3 className="card-title">News and Events</h3>
            </div>
            <ScrollableCardBody
              items={newsEvents}
              scrollRef={newsScrollRef}
              contentRef={newsContentRef}
              pauseRef={newsPauseRef}
            />
            <div className="card-footer">
              <Link to="/all-notices" className="card-link">
                View all news {'->'}
              </Link>
            </div>
          </div>

          <div className="info-card card-green">
            <div className="card-header">
              <div className="card-icon" aria-hidden="true">ALRT</div>
              <h3 className="card-title">Notifications</h3>
            </div>
            <ScrollableCardBody
              items={notifications}
              scrollRef={notifScrollRef}
              contentRef={notifContentRef}
              pauseRef={notifPauseRef}
            />
            <div className="card-footer">
              <Link to="/all-notices" className="card-link">
                View all notifications {'->'}
              </Link>
            </div>
          </div>

          <div className="info-card card-peach">
            <div className="card-header">
              <div className="card-icon" aria-hidden="true">NOTE</div>
              <h3 className="card-title">Notices</h3>
            </div>
            <ScrollableCardBody
              items={notices}
              scrollRef={noticesScrollRef}
              contentRef={noticesContentRef}
              pauseRef={noticesPauseRef}
            />
            <div className="card-footer">
              <Link to="/all-notices" className="card-link">
                View all notices {'->'}
              </Link>
            </div>
          </div>

          <div className="info-card card-peach" id="placements">
            <div className="card-header">
              <div className="card-icon" aria-hidden="true">PLAC</div>
              <h3 className="card-title">Placement Updates</h3>
            </div>
            <ScrollableCardBody
              items={placements}
              scrollRef={placScrollRef}
              contentRef={placContentRef}
              pauseRef={placPauseRef}
            />
            <div className="card-footer">
              <Link to="/placements" className="card-link">
                View all placements {'->'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
