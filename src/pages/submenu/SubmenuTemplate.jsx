import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

const SubmenuTemplate = ({ sectionLabel, title, subtitle, image, imageMode, points }) => {
  const sectionGuidance = {
    'ABOUT US': [
      'Review institute profile and governance details before admission decisions.',
      'Use this section to understand policies, affiliations, and campus culture.'
    ],
    DEPARTMENTS: [
      'Compare curriculum focus, labs, and project opportunities across branches.',
      'Choose your specialization based on long-term skills and career goals.'
    ],
    ACADEMICS: [
      'Track calendar notices and exam updates regularly during each semester.',
      'Plan assignments, practicals, and assessments from official announcements.'
    ],
    FACILITIES: [
      'Check available infrastructure and student support services before joining.',
      'Use campus facilities for balanced academic, technical, and personal growth.'
    ],
    'TRAINING & PLACEMENTS': [
      'Prepare early through aptitude, communication, and technical practice.',
      'Follow placement notices and eligibility criteria for each drive.'
    ],
    ALUMNI: [
      'Stay connected through alumni registration, events, and mentoring channels.',
      'Use alumni networks for internships, guidance, and career referrals.'
    ],
    'LIFE @ SIET': [
      'Participate in clubs, activities, and events for holistic development.',
      'Use media and gallery updates to stay connected with campus life.'
    ]
  };

  const quickLinks = {
    'ABOUT US': [
      { label: 'Home', to: '/' },
      { label: 'All Notices', to: '/all-notices' }
    ],
    DEPARTMENTS: [
      { label: 'Departments Home', to: '/departments' },
      { label: 'All Notices', to: '/all-notices' }
    ],
    ACADEMICS: [
      { label: 'Academics Home', to: '/academics' },
      { label: 'All Notices', to: '/all-notices' }
    ],
    FACILITIES: [
      { label: 'Facilities Home', to: '/facilities' },
      { label: 'Home', to: '/' }
    ],
    'TRAINING & PLACEMENTS': [
      { label: 'Placements Home', to: '/placements' },
      { label: 'All Notices', to: '/all-notices' }
    ],
    ALUMNI: [
      { label: 'Alumni Home', to: '/alumni' },
      { label: 'Home', to: '/' }
    ],
    'LIFE @ SIET': [
      { label: 'Life @ SIET Home', to: '/life-at-siet' },
      { label: 'All Notices', to: '/all-notices' }
    ]
  };

  const infoText = `${title} is an important part of ${sectionLabel}. This section helps students and visitors quickly understand the scope, focus, and practical relevance.`;

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-card">
            <p className="submenu-kicker">{sectionLabel}</p>
            <h1 className="submenu-title">{title}</h1>
            <p className="submenu-subtitle">{subtitle || 'Focused information and highlights for this submenu section.'}</p>
          </div>
        </div>
      </section>

      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-content-card">
            <div className="submenu-feature-image-wrap">
              <img
                src={image}
                alt={title}
                className={`submenu-feature-image ${imageMode === 'portrait' ? 'portrait' : ''}`}
              />
            </div>
            <h2>Overview</h2>
            <ul className="submenu-point-list">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className="submenu-info-text">{infoText}</p>

            <div className="submenu-extra-grid">
              <div className="submenu-extra-card">
                <h3>For Students</h3>
                <ul className="submenu-mini-list">
                  {(sectionGuidance[sectionLabel] || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="submenu-extra-card">
                <h3>Quick Links</h3>
                <div className="submenu-link-list">
                  {(quickLinks[sectionLabel] || []).map((item) => (
                    <Link key={item.label} to={item.to} className="submenu-inline-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuTemplate;
