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

      <section className="section submenu-content-section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          <div className="submenu-layout">
            <main className="submenu-main">
              {/* Syllabus Finder Horizontal Bar */}
              <div className="submenu-content-card syllabus-finder-bar" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                <div className="submenu-syllabus-finder-row" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div style={{ flex: '1', minWidth: '250px' }}>
                     <label className="submenu-paragraph" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Find Program</label>
                     <input
                        className="submenu-syllabus-search"
                        type="search"
                        value={query}
                        placeholder="Search program…"
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ width: '100%', margin: '0' }}
                        aria-label="Search syllabus programs"
                      />
                  </div>
                  <div style={{ flex: '1.5', minWidth: '300px' }}>
                    <label className="submenu-paragraph" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Syllabus</label>
                    <select
                      className="submenu-pdf-select"
                      value={active?.key}
                      onChange={(e) => setActiveKey(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(10,25,47,0.1)' }}
                    >
                      {filtered.map((c) => (
                        <option key={c.key} value={c.key}>
                          {c.label}
                        </option>
                      ))}
                      {filtered.length === 0 && <option value="">No programs match search</option>}
                    </select>
                  </div>
                </div>
              </div>

              {/* PDF Reader Widget */}
              <div className="coc-panel" style={{ boxShadow: 'var(--shadow-mid)' }}>
                <div className="coc-preview-head" style={{ borderBottom: '1px solid rgba(10,25,47,0.05)', padding: '1rem 1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                     <h3 className="submenu-subsection-title" style={{ margin: 0 }}>{active?.label || 'Curriculum Preview'}</h3>
                     {active?.pdfUrl && (
                      <a
                        href={active.pdfUrl}
                        download
                        className="submenu-action-btn primary"
                        style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}
                      >
                        Download PDF
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="coc-preview-frame-wrap" style={{ background: '#f1f5f9' }}>
                  {active?.pdfUrl ? (
                    <iframe
                      key={active.pdfUrl}
                      title={`${title} PDF preview`}
                      src={active.pdfUrl}
                      className="coc-preview-frame"
                      style={{ border: 'none', background: 'white' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="submenu-pdf-empty" style={{ color: '#0a192f', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <p className="submenu-paragraph">Select a program from the finder above to view the syllabus.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Redundant Overview section removed, body content moved here if needed */}
              {body.length > 0 && (
                <div className="submenu-prose" style={{ marginTop: '2.5rem' }}>
                   <SubmenuBodyProse body={body} resources={resources} points={points} />
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SyllabusHubTemplate;
