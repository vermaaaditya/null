import React from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';
import SubmenuSidebar from './SubmenuSidebar';

const SubmenuWithPDF = ({
  sectionLabel,
  title,
  subtitle,
  pdfUrl,
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

            <div className="submenu-hero-grid doc-reader-hero">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                <p className="submenu-subtitle">
                  {subtitle || 'Focused information and highlights for this submenu section.'}
                </p>
              </div>

              <div className="doc-hero-select-bar">
                <span className="doc-hero-label">Document</span>
                <span className="doc-hero-static">Institute PDF</span>
                {pdfUrl ? (
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="doc-hero-download-btn">
                    Open PDF in new tab
                  </a>
                ) : null}
              </div>

              <div className="doc-hero-reader submenu-pdf-wrap">
                {pdfUrl ? (
                  <iframe
                    title={`${title} PDF preview`}
                    src={pdfUrl}
                    className="submenu-pdf-viewer reader-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="submenu-pdf-empty">
                    PDF is not available for this section yet.
                  </div>
                )}
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
                <div className="submenu-doc-actions">
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back</Link>
                  {pdfUrl ? (
                    <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="submenu-action-btn primary">
                      Download
                    </a>
                  ) : null}
                </div>

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

export default SubmenuWithPDF;
