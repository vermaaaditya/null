import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getInfoText, getSectionHome, quickLinks, sectionGuidance } from './submenuTemplateShared';

const normalize = (value) => String(value || '').toLowerCase().trim();

const SyllabusHubTemplate = ({
  sectionLabel,
  title,
  subtitle,
  courses = [],
  body = [],
  points = [],
  resources = [],
  showSidebar = true,
}) => {
  const sectionHome = getSectionHome(sectionLabel);
  const infoText = getInfoText(title, sectionLabel);
  const [query, setQuery] = useState('');
  const [activeKey, setActiveKey] = useState(courses[0]?.key || courses[0]?.label || '');

  const normalizedCourses = useMemo(
    () =>
      (courses || [])
        .filter((c) => c && (c.key || c.label))
        .map((c) => ({
          key: c.key || c.label,
          label: c.label || c.key,
          pdfUrl: c.pdfUrl || '',
        })),
    [courses]
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return normalizedCourses;
    return normalizedCourses.filter((c) => normalize(c.label).includes(q));
  }, [query, normalizedCourses]);

  const active = normalizedCourses.find((c) => c.key === activeKey) || filtered[0] || normalizedCourses[0];

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

              <div className="submenu-hero-visual">
                <div className="submenu-pdf-wrap">
                  {active?.pdfUrl ? (
                    <>
                      <iframe
                        title={`${title} PDF preview`}
                        src={active.pdfUrl}
                        className="submenu-pdf-viewer"
                        loading="lazy"
                      />
                      <a href={active.pdfUrl} target="_blank" rel="noopener noreferrer" className="submenu-pdf-open-link">
                        Open Syllabus PDF in new tab
                      </a>
                    </>
                  ) : (
                    <div className="submenu-pdf-empty">
                      Select a course to download the PDF.
                    </div>
                  )}
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
                <h2 className="submenu-section-title">Syllabus Finder</h2>

                <div className="submenu-syllabus-controls">
                  <input
                    className="submenu-syllabus-search"
                    type="search"
                    value={query}
                    placeholder="Search program…"
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search syllabus programs"
                  />
                </div>

                <div className="submenu-syllabus-grid">
                  <div className="submenu-syllabus-list" role="list">
                    {filtered.map((c) => {
                      const isActive = c.key === active?.key;
                      return (
                        <button
                          key={c.key}
                          type="button"
                          className={`submenu-syllabus-item ${isActive ? 'active' : ''}`}
                          onClick={() => setActiveKey(c.key)}
                        >
                          <span className="submenu-syllabus-item-title">{c.label}</span>
                          <span className="submenu-syllabus-item-meta">{c.pdfUrl ? 'PDF available' : 'PDF pending'}</span>
                        </button>
                      );
                    })}
                    {filtered.length === 0 ? (
                      <div className="submenu-syllabus-empty">
                        No programs match your search.
                      </div>
                    ) : null}
                  </div>

                  <div className="submenu-syllabus-details">
                    <h3 className="submenu-subsection-title">Overview</h3>
                    <div className="submenu-prose">
                      {body.length > 0 ? (
                        <div className="submenu-body">
                          {body.map((para) => (
                            <p key={para} className="submenu-paragraph">
                              {para}
                            </p>
                          ))}
                        </div>
                      ) : null}

                      {resources.length > 0 ? (
                        <div className="submenu-resources">
                          <h3 className="submenu-subsection-title">Resources</h3>
                          <ul className="submenu-resource-list">
                            {resources.map((item, index) => (
                              <li key={`${item.label}-${item.href}-${index}`}>
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
                          {points.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                      ) : null}

                      <p className="submenu-info-text">{infoText}</p>
                    </div>
                  </div>
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

export default SyllabusHubTemplate;

