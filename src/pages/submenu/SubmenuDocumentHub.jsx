import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';

const normalize = (value) => String(value || '').toLowerCase().trim();

const SubmenuDocumentHub = ({
  sectionLabel,
  title,
  subtitle,
  documents = [],
  body = [],
  points = [],
  resources = [],
  showSidebar = true,
}) => {
  const sectionHome = getSectionHome(sectionLabel);
  const [query, setQuery] = useState('');
  const [activeKey, setActiveKey] = useState(documents[0]?.key || documents[0]?.label || '');

  const normalizedDocs = useMemo(
    () =>
      (documents || [])
        .filter((d) => d && (d.key || d.label))
        .map((d) => ({
          key: d.key || d.label,
          label: d.label || d.key,
          pdfUrl: d.pdfUrl || '',
        })),
    [documents]
  );

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return normalizedDocs;
    return normalizedDocs.filter((d) => normalize(d.label).includes(q));
  }, [query, normalizedDocs]);

  const active = normalizedDocs.find((d) => d.key === activeKey) || filtered[0] || normalizedDocs[0];

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

            <div className="submenu-hero-grid doc-hero doc-reader-hero">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                <p className="submenu-subtitle">
                  {subtitle || 'Focused information and highlights for this submenu section.'}
                </p>
                <div className="submenu-hero-actions">
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back</Link>
                  {active?.pdfUrl ? (
                    <a href={active.pdfUrl} target="_blank" rel="noopener noreferrer" className="submenu-action-btn primary">
                      Download
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="doc-hero-select-bar">
                <label className="doc-hero-label" htmlFor="doc-select">
                  Document
                </label>
                <select
                  id="doc-select"
                  className="doc-hero-dropdown"
                  value={active?.key || ''}
                  onChange={(e) => setActiveKey(e.target.value)}
                  aria-label="Select document"
                >
                  {normalizedDocs.map((d) => (
                    <option key={d.key} value={d.key}>
                      {d.label}
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
                    title={`${active.label} PDF preview`}
                    src={active.pdfUrl}
                    className="submenu-pdf-viewer reader-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="submenu-pdf-empty">PDF not available.</div>
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
                <div className="doc-body-grid">
                  <section className="doc-body-copy">
                    <h2 className="submenu-section-title">About this document</h2>
                     <div className="submenu-prose">
                       <SubmenuBodyProse body={body} resources={resources} points={points} />
                     </div>
                  </section>

                  <aside className="doc-body-panel">
                    <div className="doc-panel-card">
                      <h3 className="doc-panel-title">Documents</h3>
                      <input
                        className="doc-panel-search"
                        type="search"
                        value={query}
                        placeholder="Search…"
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search documents"
                      />

                      <div className="doc-panel-list" role="list">
                        {filtered.map((d) => {
                          const isActive = d.key === active?.key;
                          return (
                            <button
                              key={d.key}
                              type="button"
                              className={`doc-panel-item ${isActive ? 'active' : ''}`}
                              onClick={() => setActiveKey(d.key)}
                            >
                              <span className="doc-panel-item-title">{d.label}</span>
                              <span className="doc-panel-item-meta">{d.pdfUrl ? 'PDF' : 'Pending'}</span>
                            </button>
                          );
                        })}
                        {filtered.length === 0 ? (
                          <div className="submenu-syllabus-empty">
                            No documents match your search.
                          </div>
                        ) : null}
                      </div>

                      {active?.pdfUrl ? (
                        <a href={active.pdfUrl} target="_blank" rel="noopener noreferrer" className="doc-panel-download">
                          Download selected PDF
                        </a>
                      ) : null}
                    </div>

                  </aside>
                </div>
              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuDocumentHub;
