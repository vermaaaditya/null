import React, { useState } from 'react';
import '../styles.css';
import principalPhoto from '../assets/prienciplephoto/prienciple.jpeg';

/**
 * DirectorDesk Component
 * Features message from the Director/Principal
 * Split layout: text on left, image card on right
 */
const DirectorDesk = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortMessage = "Welcome to Government Engineering College, where we nurture young minds to become innovative engineers and responsible citizens. Our commitment to academic excellence, combined with state-of-the-art facilities and industry partnerships, ensures that our students are well-prepared for the challenges of tomorrow.";

  const fullMessage = shortMessage + " Over the past three decades, we have consistently maintained our position as one of the premier engineering institutions in the region. Our dedicated faculty members bring both academic expertise and industry experience to the classroom, creating a dynamic learning environment. We emphasize not just theoretical knowledge, but also practical skills, research aptitude, and ethical values. I invite you to explore our programs and join our community of learners and innovators.";

  return (
    <section className="director-desk section" id="about">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <h2 className="section-title">Director's Desk</h2>
          <div className="title-underline"></div>
        </div>

        <div className="director-content">
          {/* Left: Text Content */}
          <div className="director-message">
            <h3 className="message-title">
              Message from the Director
            </h3>
            <p className="message-text">
              {isExpanded ? fullMessage : shortMessage}
            </p>
            <button 
              className="read-more-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <span className="btn-arrow">{isExpanded ? '↑' : '→'}</span>
            </button>

            {/* Key Highlights */}
            <div className="highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-text">
                  <h4>Academic Excellence</h4>
                  <p>NAAC A++ Accredited</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔬</div>
                <div className="highlight-text">
                  <h4>Research Focus</h4>
                  <p>100+ Research Papers Published</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🏆</div>
                <div className="highlight-text">
                  <h4>Industry Connect</h4>
                  <p>150+ Corporate Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Director Image Card */}
          <div className="director-card">
            <div className="card-image">
              <img 
                src={principalPhoto}
                alt="Director" 
              />
              <div className="image-overlay"></div>
            </div>
            <div className="card-info">
              <h3 className="director-name">Prof. Abhishek saini</h3>
              <p className="director-designation">Director & Director-Principal</p>
              <p className="director-credentials">
                Ph.D. (IIT Bombay) | M.Tech | B.E.
              </p>
              <div className="director-contact">
                <p>📧 sietpkl@email.com</p>
                <p>📞 +91-XXX-XXXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorDesk;
