import React from 'react';
import principalPhoto from '../assets/new-assets/principal-photo/prienciple.jpeg';

/**
 * DirectorDesk Component
 * Split section with director note and profile card
 */
const DirectorDesk = () => {
  const messageParagraphs = [
    'I take the pleasure in welcoming you to State Institute of Engineering and Technology (SIET), Panchkula an institute dedicated to the proper growth and development of each and every student for a better career prospect. The institute is all set to bring out the potential within each student and provide proper guidance so that their potentials can be utilized to make them future engineers capable of meeting any challenge that will be faced by them after leaving the college. The college provides full support to improve their communication skills, critical thinking abilities, moral values and sense of responsibility. All efforts are made to improve the creativity and problem solving abilities of the students so that they can contribute their best to the society and the country.',
    'The infrastructure has been developed with most modern equipment; provisions have also been made to upgrade the same keeping pace with the technological advancements of the time. SIET has a team of highly qualified, experienced and dedicated faculty who devote their time not only to teaching but also for the overall development of the students. Further, faculty from other renowned institutions are invited to deliver guest lectures to help augment their studies beyond syllabus. We are confident that the students passing out from this college will be technically sound, confident and have good leadership skills. I wish all the best to all the prospective students.'
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