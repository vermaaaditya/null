import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';
import SubmenuNestedSection from './SubmenuNestedSection';

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
}) => {
  const location = useLocation();
  const sectionHome = getSectionHome(sectionLabel);

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
                {subtitle ? <p className="submenu-subtitle">{subtitle}</p> : null}
                <div className="submenu-hero-actions">
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
                  <SubmenuBodyProse body={body} resources={resources} points={points} />

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
                          <SubmenuNestedSection key={section.id} section={section} />
                        ))}
                      </div>
                    </>
                  ) : null}

                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuTemplate;
