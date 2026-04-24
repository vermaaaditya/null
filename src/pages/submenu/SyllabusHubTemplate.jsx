import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';

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
            <div className="submenu-hero-grid doc-reader-hero">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                {subtitle ? <p className="submenu-subtitle">{subtitle}</p> : null}
                <div className="submenu-hero-actions">
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back</Link>
                </div>
              </div>

                <div className="coc-panel" style={{ marginTop: '2.5rem' }}>
                  <div className="coc-preview-head">
                    <button
                      onClick={() => window.history.back()}
                      className="gradient-button"
                    >
                      Back
                    </button>
                    {active?.pdfUrl && (
                      <a
                        href={active.pdfUrl}
                        download
                        className="gradient-button"
                      >
                        Download Syllabus
                      </a>
                    )}
                  </div>
                  
                  <div className="coc-preview-frame-wrap">
                    {active?.pdfUrl ? (
                      <iframe
                        key={active.pdfUrl}
                        title={`${title} PDF preview`}
                        src={active.pdfUrl}
                        className="coc-preview-frame"
                        loading="lazy"
                      />
                    ) : (
                      <div className="submenu-pdf-empty" style={{ color: '#0a192f', minHeight: '300px' }}>
                        Select a course to view the syllabus PDF.
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
                      <SubmenuBodyProse body={body} resources={resources} points={points} />

                    </div>
                  </div>
                </div>
              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SyllabusHubTemplate;
