import React, { useState } from 'react';
import '../styles.css';
import principalPhoto from '../assets/prienciplephoto/prienciple.jpeg';

/**
 * DirectorDesk Component
 * Split section with director note and profile card
 */
const DirectorDesk = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortMessage = "Welcome to SIET. We are building a campus where students learn by doing, collaborate across disciplines, and graduate ready for real engineering challenges. Academic depth, ethical thinking, and practical problem-solving are central to everything we teach.";

  const fullMessage = `${shortMessage} Our faculty teams combine research experience with industry exposure so every course connects theory to implementation. We encourage project-based learning, internships, and innovation challenges throughout the year. I invite you to explore our programs and become part of a student community focused on leadership, curiosity, and measurable impact.`;

  return (
    <section className="director-desk section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Director's Desk</h2>
          <div className="title-underline"></div>
        </div>

        <div className="director-content">
          <div className="director-message">
            <p className="director-kicker">Leadership Message</p>
            <h3 className="message-title">A Message from the Director</h3>
            <p className="message-text">{isExpanded ? fullMessage : shortMessage}</p>
            <button
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              type="button"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <span className="btn-arrow">{isExpanded ? '<-' : '->'}</span>
            </button>

            <div className="highlights">
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">AC</div>
                <div className="highlight-text">
                  <h4>Academic Excellence</h4>
                  <p>Strong outcome-based curriculum</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">RS</div>
                <div className="highlight-text">
                  <h4>Research Focus</h4>
                  <p>Innovation labs and guided projects</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon" aria-hidden="true">IN</div>
                <div className="highlight-text">
                  <h4>Industry Connect</h4>
                  <p>Mentorship and placement readiness</p>
                </div>
              </div>
            </div>
          </div>

          <div className="director-card">
            <div className="director-photo-wrap">
              <div className="card-image">
                <img src={principalPhoto} alt="Prof. Anil Kumar" />
              </div>
            </div>
            <div className="card-info">
              <h3 className="director-name">Prof. Anil Kumar</h3>
              <p className="director-designation">Director & Principal</p>
              <p className="director-credentials">PhD (IIT Bombay) | M.Tech | B.E.</p>

              <div className="director-focus-list">
                <span className="focus-pill">Outcome-Based Learning</span>
                <span className="focus-pill">Research Mentorship</span>
                <span className="focus-pill">Industry Engagement</span>
              </div>

              <div className="director-contact">
                <p>Email: director@siet.edu.in</p>
                <p>Phone: +91-XXX-XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorDesk;