import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';
import SubmenuSidebar from './SubmenuSidebar';

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
                  <SubmenuBodyProse body={body} resources={resources} points={points} />

                </div>
              </div>
            </main>

            {showSidebar ? <SubmenuSidebar sectionLabel={sectionLabel} /> : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuNoImage;
