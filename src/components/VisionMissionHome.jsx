import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const VisionMissionHome = () => {
  return (
    <ScrollReveal>
      <section className="vision-mission-home section" aria-label="Vision and Mission">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Vision &amp; Mission</h2>
            <div className="title-underline"></div>
          </div>

          <div className="vm-home-grid">
            <div className="vm-home-card vm-vision-card">
              <div className="vm-home-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3>Vision</h3>
              <p>
                To be a centre of excellence in technical education, research, and innovation — fostering a skilled and ethical workforce for sustainable development.
              </p>
            </div>

            <div className="vm-home-card vm-mission-card">
              <div className="vm-home-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Mission</h3>
              <ul className="vm-home-mission-list">
                <li>Quality Education — Inclusive learning that nurtures creativity and technical expertise.</li>
                <li>Research &amp; Innovation — Advancing technology to address local and global challenges.</li>
                <li>Industry Collaboration — Partnerships for hands-on learning and employability.</li>
                <li>Social Responsibility — Ethics, leadership, and sustainability.</li>
                <li>Lifelong Learning — Skills for continuous adaptation to emerging technologies.</li>
              </ul>
            </div>
          </div>

          <div className="vm-home-action">
            <Link to="/about/vision-mission" className="vm-home-read-more">Read Full Vision &amp; Mission →</Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default VisionMissionHome;
