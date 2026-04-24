import React, { useMemo, useEffect } from 'react';
import { Link, Navigate, useParams, useLocation } from 'react-router-dom';
import { submenuData } from '../submenuData';
import { departmentSectionCatalog, departmentSectionTitles } from '../departmentSectionCatalog';
import computerScienceSections from './content/computerScience';
import aiMlSections from './content/aiMl';
import cyberSecuritySections from './content/cyberSecurity';
import roboticsSections from './content/robotics';
import electricalEngineeringSections from './content/electricalEngineering';
import electronicsVlsiSections from './content/electronicsVlsi';

const departmentSectionContent = {
  cse: computerScienceSections,
  'ai-ml': aiMlSections,
  'cyber-security': cyberSecuritySections,
  robotics: roboticsSections,
  'electrical-engineering': electricalEngineeringSections,
  'electronics-vlsi': electronicsVlsiSections
};

const departmentDescriptions = {
  cse: 'Build a strong foundation in computing with focus on algorithms, software development, and system design. The program equips students with problem-solving skills and industry-relevant knowledge to excel in diverse technology domains.',
  'ai-ml': 'Specialize in cutting-edge technologies like artificial intelligence, machine learning, and data science. Students gain hands-on experience in building intelligent systems and solving real-world problems using modern AI tools.',
  'cyber-security': 'Focused on securing digital systems, this program covers network security, ethical hacking, and data protection. Students are trained to identify vulnerabilities and build robust defense mechanisms against cyber threats.',
  robotics: 'Explore the integration of mechanical systems, electronics, and intelligent control. This program prepares students to design and develop automated systems, robotics solutions, and smart technologies for industrial and real-world applications.',
  'electrical-engineering': 'Gain in-depth knowledge of electrical systems, power generation, and control engineering. The program emphasizes practical learning and prepares students for careers in energy, infrastructure, and advanced electrical technologies.',
  'electronics-vlsi': 'Dive into semiconductor technology and chip design with a focus on VLSI systems. Students learn to design, simulate, and optimize integrated circuits used in modern electronic devices.'
};

const DepartmentSectionPage = () => {
  const { deptSlug } = useParams();
  const { hash } = useLocation();
  const config = departmentSectionCatalog[deptSlug];
  const baseData = config ? submenuData[config.dataKey] : null;

  const sections = useMemo(() => {
    return departmentSectionContent[deptSlug] || [];
  }, [deptSlug]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for content rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
       window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [hash, deptSlug]);

  if (!config || !baseData) {
    return <Navigate to="/departments/cse" replace />;
  }

  const homeLink = '/departments';

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-surface">
            <div className="submenu-hero-grid">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">DEPARTMENTS</p>
                <h1 className="submenu-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.75rem)' }}>{config.title}</h1>
                <p className="submenu-subtitle">
                  {departmentDescriptions[deptSlug]}
                </p>
                <div className="submenu-hero-actions">
                  <Link to={homeLink} className="submenu-action-btn secondary">Back</Link>
                </div>
              </div>

              <div className="submenu-hero-visual" aria-hidden="true">
                <div className="submenu-hero-image-wrap">
                  <img src={baseData.image} alt="" className="submenu-hero-image" loading="eager" />
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
              <div className="submenu-content-card">
                <div className="submenu-uniscroll-stack" style={{ display: 'grid', gap: '3rem' }}>
                  {sections.map((section) => (
                    <div key={section.id} id={section.id} className="submenu-uniscroll-section" style={{ scrollMarginTop: '100px' }}>
                      <h2 className="submenu-section-title">{departmentSectionTitles[section.id]}</h2>
                      <div className="submenu-prose">
                        {section.body?.length > 0 ? (
                          <div className="submenu-body">
                            {section.body.map((line) => {
                              const isHeading = line === 'Vision' || line === 'Mission' || line === 'Program Educational Objectives (PEOs)' || line === 'Program Outcomes (POs)';
                              return isHeading ? (
                                <h3 key={`${section.id}-${line}`} className="submenu-subsection-title" style={{ marginTop: '1.5rem' }}>{line}</h3>
                              ) : (
                                <p key={`${section.id}-${line}`} className="submenu-paragraph">{line}</p>
                              );
                            })}
                          </div>
                        ) : null}

                        {section.points?.length > 0 ? (
                          <ul className="submenu-point-list">
                            {section.points.map((point) => (
                              <li key={point} className="submenu-paragraph" style={{ marginBottom: '0.4rem' }}>{point}</li>
                            ))}
                          </ul>
                        ) : null}

                        {section.table?.length > 0 ? (
                          <div className="submenu-demo-table" role="table" aria-label={`${departmentSectionTitles[section.id]} data table`} style={{ marginTop: '1rem' }}>
                            <div className="submenu-demo-table-row submenu-demo-table-head" role="row">
                              {section.table[0].map((cell) => (
                                <div key={cell} role="columnheader" className="submenu-demo-table-cell">{cell}</div>
                              ))}
                            </div>
                            {section.table.slice(1).map((row) => (
                              <div key={row.join('-')} role="row" className="submenu-demo-table-row">
                                {row.map((cell) => (
                                  <div key={cell} role="cell" className="submenu-demo-table-cell">{cell}</div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {section.schedule?.length > 0 ? (
                          <div className="submenu-schedule-grid" style={{ marginTop: '1rem' }}>
                            {section.schedule.map((item) => (
                              <div key={`${item.day}-${item.slot}`} className="submenu-schedule-card">
                                <strong>{item.day}</strong>
                                <span>{item.slot}</span>
                                <p>{item.subject}</p>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      {/* Divider between sections except last */}
                      {section.id !== sections[sections.length - 1].id && (
                        <hr style={{ marginTop: '3rem', border: 'none', borderBottom: '1px solid rgba(10,25,47,0.08)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentSectionPage;
