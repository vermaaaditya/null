import React, { useMemo } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
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

const DepartmentSectionPage = ({ sectionId }) => {
  const { deptSlug } = useParams();
  const config = departmentSectionCatalog[deptSlug];

  const baseData = config ? submenuData[config.dataKey] : null;

  const sections = useMemo(() => {
    return departmentSectionContent[deptSlug] || [];
  }, [deptSlug]);

  const activeSection = sections.find((section) => section.id === sectionId);

  if (!config || !baseData || !activeSection) {
    return <Navigate to="/departments/cse" replace />;
  }

  const homeLink = `/departments/${deptSlug}`;
  const otherSections = sections.filter((section) => section.id !== sectionId);

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-surface">
            <nav className="submenu-breadcrumb" aria-label="Breadcrumb">
              <Link to="/" className="crumb-link">Home</Link>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <Link to="/departments" className="crumb-link">Departments</Link>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <Link to={homeLink} className="crumb-link">{config.title}</Link>
              <span className="crumb-sep" aria-hidden="true">/</span>
              <span className="crumb-current" aria-current="page">{departmentSectionTitles[sectionId]}</span>
            </nav>

            <div className="submenu-hero-grid">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">DEPARTMENTS</p>
                <h1 className="submenu-title">{departmentSectionTitles[sectionId]}</h1>
                <p className="submenu-subtitle">
                  {departmentDescriptions[deptSlug]}
                </p>
                <div className="submenu-hero-actions">
                  <Link to={homeLink} className="submenu-action-btn primary">Back to Department</Link>
                  <Link to="/departments" className="submenu-action-btn secondary">Departments Home</Link>
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

      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-layout">
            <main className="submenu-main">
              <div className="submenu-content-card">
                <h2 className="submenu-section-title">Overview</h2>
                <div className="submenu-prose">
                  {activeSection.body?.length > 0 ? (
                    <div className="submenu-body">
                      {activeSection.body.map((line) => {
                        const isHeading = line === 'Vision' || line === 'Mission';
                        return isHeading ? (
                          <h3 key={`${sectionId}-${line}`} className="submenu-subsection-title">{line}</h3>
                        ) : (
                          <p key={`${sectionId}-${line}`} className="submenu-paragraph">{line}</p>
                        );
                      })}
                    </div>
                  ) : null}

                  {activeSection.points?.length > 0 ? (
                    <ul className="submenu-point-list">
                      {activeSection.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}

                  {activeSection.table?.length > 0 ? (
                    <div className="submenu-demo-table" role="table" aria-label={`${departmentSectionTitles[sectionId]} demo table`}>
                      <div className="submenu-demo-table-row submenu-demo-table-head" role="row">
                        {activeSection.table[0].map((cell) => (
                          <div key={cell} role="columnheader" className="submenu-demo-table-cell">{cell}</div>
                        ))}
                      </div>
                      {activeSection.table.slice(1).map((row) => (
                        <div key={row.join('-')} role="row" className="submenu-demo-table-row">
                          {row.map((cell) => (
                            <div key={cell} role="cell" className="submenu-demo-table-cell">{cell}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {activeSection.schedule?.length > 0 ? (
                    <div className="submenu-schedule-grid">
                      {activeSection.schedule.map((item) => (
                        <div key={`${item.day}-${item.slot}`} className="submenu-schedule-card">
                          <strong>{item.day}</strong>
                          <span>{item.slot}</span>
                          <p>{item.subject}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </main>

            <aside className="submenu-aside">
              <div className="submenu-aside-card">
                <h3>Other Sections</h3>
                <div className="submenu-link-list">
                  {otherSections.map((section) => (
                    <Link key={section.id} to={section.route} className="submenu-inline-link">
                      {section.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="submenu-aside-card">
                <h3>For Students</h3>
                <ul className="submenu-mini-list">
                  <li>Check your department page for official syllabus, timetable, and faculty details.</li>
                  <li>Visit the Academics section for calendar, exam schedule, and notices.</li>
                  <li>Contact your department for specific queries or academic guidance.</li>
                </ul>
              </div>

              <div className="submenu-aside-card subtle">
                <h3>Latest Updates</h3>
                <p className="submenu-aside-text">Check the notices board for the latest department announcements and updates.</p>
                <Link to="/all-notices" className="submenu-aside-cta">View Notices</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentSectionPage;
