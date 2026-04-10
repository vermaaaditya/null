import React from 'react';
import principalPhoto from '../assets/new-assets/principal-photo/prienciple.jpeg';

/**
 * DirectorDesk Component
 * Split section with director note and profile card
 */
const DirectorDesk = () => {
  const messageParagraphs = [
    'We aim to inculcate industrial skills amongst youth to empower them for gainful employment through technical & industrial education and to enhance productivity of formal and non-formal sector of economy.',
    'Our mission is to provide an outstanding holistic education for our students characterized by successful training and emotional well being that provide firm foundation for the next stage of their learning and fully prepare them for life in a rapidly changing 21st century.'
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
               Director - Principal, SIET Panchkula
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorDesk;