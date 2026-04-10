import React from 'react';
import { Link } from 'react-router-dom';
import { getInfoText, getSectionHome, quickLinks, sectionGuidance } from './submenuTemplateShared';

const SubmenuNoImage = ({
  sectionLabel,
  title,
  subtitle,
  points = [],
  body = [],
  resources = [],
  showSidebar = true,
}) => {
  const sectionHome = getSectionHome(sectionLabel);
  const infoText = getInfoText(title, sectionLabel);

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

            <div className="submenu-hero-grid no-visual">
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
                    Open Notices Board ?
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

export default SubmenuNoImage;
