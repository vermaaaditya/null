import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getInfoText, getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';
import SubmenuSidebar from './SubmenuSidebar';

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

            <div className="submenu-hero-grid doc-reader-hero">
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

              <div className="doc-hero-select-bar">
                <label className="doc-hero-label" htmlFor="syllabus-select">
                  Program
                </label>
                <select
                  id="syllabus-select"
                  className="doc-hero-dropdown"
                  value={active?.key || ''}
                  onChange={(e) => setActiveKey(e.target.value)}
                  aria-label="Select syllabus program"
                >
                  {normalizedCourses.map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.label}
                    </option>
                  ))}
                </select>
                {active?.pdfUrl ? (
                  <a href={active.pdfUrl} target="_blank" rel="noopener noreferrer" className="doc-hero-download-btn">
                    Open PDF in new tab
                  </a>
                ) : null}
              </div>

              <div className="doc-hero-reader submenu-pdf-wrap">
                {active?.pdfUrl ? (
                  <iframe
                    title={`${title} PDF preview`}
                    src={active.pdfUrl}
                    className="submenu-pdf-viewer reader-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="submenu-pdf-empty">
                    Select a course to download the PDF.
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

                      <p className="submenu-info-text">{infoText}</p>
                    </div>
                  </div>
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

export default SyllabusHubTemplate;
