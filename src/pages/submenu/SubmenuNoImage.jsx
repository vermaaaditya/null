import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';

const SubmenuNoImage = ({
  sectionLabel,
  title,
  subtitle,
  points = [],
  body = [],
  resources = [],
}) => {
  const sectionHome = getSectionHome(sectionLabel);

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-surface">

            <div className="submenu-hero-grid no-visual">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                {subtitle ? <p className="submenu-subtitle">{subtitle}</p> : null}
                <div className="submenu-hero-actions">
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back</Link>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuNoImage;
