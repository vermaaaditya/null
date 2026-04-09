import React, { useState } from 'react';
import '../styles.css';
import aimlImg from '../assets/new-assets/departments/AI-ML.jpg';
import csImg from '../assets/new-assets/departments/Cyber-Security.jpg';
import roboticsImg from '../assets/new-assets/departments/Robotics-Automation.jpg';
import syllabusDoc from '../assets/new-assets/notifications/B.Tech-LEET-Syllabus-2025-26-07.05.2025.pdf';
import admissionFormDoc from '../assets/new-assets/documents/SIET-PKL-B.TECH_Admission_Form-2025-26.pdf';

/**
 * Departments Page Component
 * Showcases engineering departments offered at SIET
 */
const Departments = () => {
  const departments = [
    {
      id: 'aiml',
      name: 'Computer Science and Engineering (AI & ML)',
      shortName: 'CSE (AI & ML)',
      image: aimlImg,
      description:
        'Focuses on artificial intelligence and machine learning, covering data science, neural networks, and automation to develop intelligent systems for real-world problem-solving.',
      highlights: [],
      careerPaths: [],
      labs: []
    },
    {
      id: 'cs',
      name: 'Computer Science and Engineering (Cyber Security)',
      shortName: 'CSE (Cyber Security)',
      image: csImg,
      description:
        'Specializes in cybersecurity techniques, ethical hacking, cryptography, and digital forensics to protect systems and networks from cyber threats and ensure data security.',
      highlights: [],
      careerPaths: [],
      labs: []
    },
    {
      id: 'robotics',
      name: 'Robotics & Automation',
      shortName: 'RA',
      image: roboticsImg,
      description:
        'Integrates mechanical engineering, electronics, and AI to design and develop intelligent robots, automated systems, and smart technologies for industrial and real-world applications.',
      highlights: [],
      careerPaths: [],
      labs: []
    },
    {
      id: 'electrical',
      name: 'Electrical Engineering',
      shortName: 'EE',
      image: null,
      description: '',
      highlights: [],
      careerPaths: [],
      labs: []
    },
    {
      id: 'electronics-vlsi',
      name: 'Electronics Engineering (VLSI Design)',
      shortName: 'ECE (VLSI)',
      image: null,
      description: '',
      highlights: [],
      careerPaths: [],
      labs: []
    },
    {
      id: 'applied-science',
      name: 'Applied Science',
      shortName: 'AS',
      image: null,
      description: '',
      highlights: [],
      careerPaths: [],
      labs: []
    }
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);

  return (
    <div className="departments-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Departments</h1>
          <p className="page-subtitle">Cutting-Edge Engineering Programs for Future Leaders</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section dept-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Engineering Excellence</h2>
            <p>
              SIET offers specialized engineering programs designed to meet the demands of tomorrow's technology landscape.
              Our departments combine theoretical knowledge with hands-on experience, industry collaboration, and
              cutting-edge research opportunities.
            </p>
          </div>

          <div className="dept-card-grid">
            {departments.map((dept) => (
              <button
                type="button"
                key={dept.id}
                className={`dept-compact-card ${selectedDepartment.id === dept.id ? 'active' : ''}`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept.image ? <img src={dept.image} alt={dept.name} loading="lazy" /> : null}
                <div>
                  <p className="dept-short-tag">{dept.shortName}</p>
                  <h3>{dept.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section department-showcase">
        <div className="container">
          <div className="dept-showcase-grid">
            <div className="dept-showcase-visual">
              {selectedDepartment.image ? (
                <img src={selectedDepartment.image} alt={selectedDepartment.name} loading="lazy" />
              ) : (
                <div className="dept-showcase-placeholder" aria-hidden="true" />
              )}
              <div className="dept-badge">{selectedDepartment.shortName}</div>
            </div>
            <div className="dept-content">
              <h2 className="dept-name">{selectedDepartment.name}</h2>
              {selectedDepartment.description ? (
                <p className="dept-description">{selectedDepartment.description}</p>
              ) : null}

              {selectedDepartment.highlights.length > 0 ? (
                <div className="dept-highlights">
                  <h3>Key Areas of Study</h3>
                  <ul className="highlights-list">
                    {selectedDepartment.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-icon">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selectedDepartment.careerPaths.length > 0 || selectedDepartment.labs.length > 0 ? (
                <div className="dept-info-grid">
                  {selectedDepartment.careerPaths.length > 0 ? (
                    <div className="info-box">
                      <h4>Career Opportunities</h4>
                      <ul className="career-list">
                        {selectedDepartment.careerPaths.map((career, idx) => (
                          <li key={idx}>{career}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {selectedDepartment.labs.length > 0 ? (
                    <div className="info-box">
                      <h4>Laboratory Facilities</h4>
                      <ul className="lab-list">
                        {selectedDepartment.labs.map((lab, idx) => (
                          <li key={idx}>{lab}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="dept-stats">
                <div className="stat">
                  <span className="stat-value">60</span>
                  <span className="stat-label">Seats Available</span>
                </div>
                <div className="stat">
                  <span className="stat-value">4 Years</span>
                  <span className="stat-label">Duration</span>
                </div>
                <div className="stat">
                  <span className="stat-value">B.Tech</span>
                  <span className="stat-label">Degree</span>
                </div>
              </div>

              <a href={syllabusDoc} target="_blank" rel="noopener noreferrer" className="dept-doc-link">
                View Syllabus Document
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Info */}
      <section className="section admission-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Engineering Journey?</h2>
            <p>
              Join SIET and be part of the next generation of engineers shaping technology and innovation.
              Admissions are now open for the 2026-27 academic session.
            </p>
            <div className="cta-buttons">
              <a href={admissionFormDoc} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Apply Now</a>
              <a href="mailto:sietpkl@gmail.com" className="btn btn-secondary">Contact Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
