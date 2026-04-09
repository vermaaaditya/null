import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

const SubmenuTemplate = ({
  sectionLabel,
  title,
  subtitle,
  image,
  imageMode,
  points = [],
  showHeroImage = true,
  showSidebar = true,
}) => {
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

  const infoText = `${title} is an important part of ${sectionLabel}.`;

  const sectionHome = (() => {
    switch (sectionLabel) {
      case 'ABOUT US':
        return { label: 'About', to: '/about' };
      case 'DEPARTMENTS':
        return { label: 'Departments', to: '/departments' };
      case 'ACADEMICS':
        return { label: 'Academics', to: '/academics' };
      case 'FACILITIES':
        return { label: 'Facilities', to: '/facilities' };
      case 'TRAINING & PLACEMENTS':
        return { label: 'Placements', to: '/placements' };
      case 'ALUMNI':
        return { label: 'Alumni', to: '/alumni' };
      case 'LIFE @ SIET':
        return { label: 'Life @ SIET', to: '/life-at-siet' };
      default:
        return { label: 'Home', to: '/' };
    }
  })();

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-surface">
            <nav className="submenu-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="crumb-link">Home</Link>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <Link to={sectionHome.to} className="crumb-link">{sectionHome.label}</Link>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <span className="crumb-current" aria-current="page">{title}</span>
            </nav>

            <div className="submenu-hero-grid">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                <p className="submenu-subtitle">
                  {subtitle || 'Focused information and highlights for this submenu section.'}
                </p>
                <div className="submenu-hero-actions">
                  <Link to="/all-notices" className="submenu-action-btn primary">Notices</Link>
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back to {sectionHome.label}</Link>
                </div>
              </div>

              {showHeroImage && image ? (
                <div className="submenu-hero-visual" aria-hidden="true">
                  <div className="submenu-hero-image-wrap">
                    <img
                      src={image}
                      alt=""
                      className={`submenu-hero-image ${imageMode === 'portrait' ? 'portrait' : ''}`}
                      loading="eager"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-layout">
            <main className="submenu-main">
              <div className="submenu-content-card">
                <h2 className="submenu-section-title">Overview</h2>
                <div className="submenu-prose">
                  {points.length > 0 ? (
                    <ul className="submenu-point-list">
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  <p className="submenu-info-text">{infoText}</p>
                </div>
              </div>
            </main>

            {showSidebar ? (
              <aside className="submenu-aside">
              <div className="submenu-aside-card">
                <h3>Quick Links</h3>
                <div className="submenu-link-list">
                  {(quickLinks[sectionLabel] || []).map((item) => (
                    <Link key={item.label} to={item.to} className="submenu-inline-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="submenu-aside-card">
                <h3>For Students</h3>
                <ul className="submenu-mini-list">
                  {(sectionGuidance[sectionLabel] || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="submenu-aside-card subtle">
                <h3>Need updates?</h3>
                <p className="submenu-aside-text">
                  Check the latest notifications and downloadable notices.
                </p>
                <Link to="/all-notices" className="submenu-aside-cta">
                  Open Notices Board →
                </Link>
              </div>
              </aside>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuTemplate;
