import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const SubmenuTemplate = ({
  sectionLabel,
  title,
  subtitle,
  image,
  imageMode,
  points = [],
  body = [],
  resources = [],
  nestedSections = [],
  showHeroImage = true,
  showSidebar = true,
}) => {
  const location = useLocation();

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

  useEffect(() => {
    if (!location.hash) return undefined;

    const targetId = location.hash.replace('#', '');
    const scrollToTarget = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname, title]);

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
                  {body.length > 0 ? (
                    <div className="submenu-body">
                      {body.map((para) => {
                        const isHeading = para === 'Vision' || para === 'Mission';
                        return isHeading ? (
                          <h3 key={para} className="submenu-subsection-title">
                            {para}
                          </h3>
                        ) : (
                          <p key={para} className="submenu-paragraph">
                            {para}
                          </p>
                        );
                      })}
                    </div>
                  ) : null}
                  {resources.length > 0 ? (
                    <div className="submenu-resources">
                      <h3 className="submenu-subsection-title">Resources</h3>
                      <ul className="submenu-resource-list">
                        {resources.map((item) => (
                          <li key={`${item.label}-${item.href}`}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="submenu-resource-link">
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {points.length > 0 ? (
                    <ul className="submenu-point-list">
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                  {nestedSections.length > 0 ? (
                    <>
                      <div className="submenu-nested-links" aria-label="Department sub sections">
                        {nestedSections.map((section) => (
                          <Link key={section.id} to={section.route || `#${section.id}`} className="submenu-inline-link">
                            {section.title}
                          </Link>
                        ))}
                      </div>

                      <div className="submenu-nested-grid">
                        {nestedSections.map((section) => (
                          <article key={section.id} id={section.id} className="submenu-extra-card submenu-nested-card">
                            <div className="submenu-nested-card-head">
                              <p className="submenu-nested-eyebrow">Demo section</p>
                              <h3>{section.title}</h3>
                            </div>

                            {section.body?.length > 0 ? (
                              <div className="submenu-body">
                                {section.body.map((line) => {
                                  const isHeading = line === 'Vision' || line === 'Mission';
                                  return isHeading ? (
                                    <h4 key={`${section.id}-${line}`} className="submenu-subsection-title">
                                      {line}
                                    </h4>
                                  ) : (
                                    <p key={`${section.id}-${line}`} className="submenu-paragraph">
                                      {line}
                                    </p>
                                  );
                                })}
                              </div>
                            ) : null}

                            {section.points?.length > 0 ? (
                              <ul className="submenu-point-list">
                                {section.points.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}

                            {section.table?.length > 0 ? (
                              <div className="submenu-demo-table" role="table" aria-label={`${section.title} demo table`}>
                                <div className="submenu-demo-table-row submenu-demo-table-head" role="row">
                                  {section.table[0].map((cell) => (
                                    <div key={cell} role="columnheader" className="submenu-demo-table-cell">
                                      {cell}
                                    </div>
                                  ))}
                                </div>
                                {section.table.slice(1).map((row) => (
                                  <div key={row.join('-')} role="row" className="submenu-demo-table-row">
                                    {row.map((cell) => (
                                      <div key={cell} role="cell" className="submenu-demo-table-cell">
                                        {cell}
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ) : null}

                            {section.schedule?.length > 0 ? (
                              <div className="submenu-schedule-grid">
                                {section.schedule.map((item) => (
                                  <div key={`${item.day}-${item.slot}`} className="submenu-schedule-card">
                                    <strong>{item.day}</strong>
                                    <span>{item.slot}</span>
                                    <p>{item.subject}</p>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </>
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
                  Open Notices Board?
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
