import React from 'react';
import '../styles.css';
import principalPhoto from '../assets/prienciplephoto/prienciple.jpeg';

/**
 * DirectorDesk Component
 * Split section with director note and profile card
 */
const DirectorDesk = () => {
  const messageParagraphs = [
    'The Training & Placement Office and academic leadership at SIET are dedicated to strengthening the professional journey of our students through practical learning, internships, and industry-oriented mentoring. Our objective is to build confident graduates who are ready to meet evolving technical and workplace expectations.',
    'We strongly encourage students to participate in project work, skill-building activities, and internship opportunities, as these experiences improve employability and professional maturity. Faculty and mentors work closely with students to ensure consistent guidance and timely support.',
    'Our institution continues to focus on academic quality, research culture, and responsible leadership. We invite every learner to stay proactive, disciplined, and committed to continuous growth throughout their time at SIET.'
  ];

  return (
    <section className="director-desk section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Director's Desk</h2>
          <div className="title-underline"></div>
        </div>

        <div className="director-classic-wrap">
          <div className="director-classic-photo">
            <img src={principalPhoto} alt="Prof. Anil Kumar - Director" />
          </div>

          <div className="director-classic-message">
            {messageParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="director-classic-signoff">
              Prof. Anil Kumar<br />
              Director &amp; Principal, SIET Panchkula
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorDesk;