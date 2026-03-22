import React, { useState } from 'react';
import '../styles.css';
import aimlImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/AI-ML.jpg';
import csImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Cyber-Security.jpg';
import roboticsImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Robotics-Automation.jpg';
import syllabusDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/06/B.Tech-LEET-Syllabus-2025-26-07.05.2025.pdf';
import admissionFormDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/07/SIET-PKL-B.TECH_Admission_Form-2025-26.pdf';

/**
 * Departments Page Component
 * Showcases engineering departments offered at SIET
 */
const Departments = () => {
  const departments = [
    {
      id: 'aiml',
      name: 'Artificial Intelligence & Machine Learning',
      shortName: 'AIML',
      image: aimlImg,
      description: 'Dive into the future of technology with AI and Machine Learning. Learn to build intelligent systems, work with neural networks, and create solutions that think and learn.',
      highlights: [
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Ethics & Applications'
      ],
      careerPaths: [
        'Machine Learning Engineer',
        'Data Scientist',
        'AI Research Scientist',
        'Deep Learning Specialist'
      ],
      labs: ['AI/ML Lab', 'Data Science Lab', 'Research Lab']
    },
    {
      id: 'cs',
      name: 'Computer Science & Engineering',
      shortName: 'CSE',
      image: csImg,
      description: 'Build strong foundations in algorithms, software systems, cloud-native applications, and modern full stack development for high-impact careers.',
      highlights: [
        'Data Structures and Algorithms',
        'Operating Systems and DBMS',
        'Web and Mobile Application Development',
        'Cloud Computing and DevOps',
        'Open Source and System Design'
      ],
      careerPaths: [
        'Software Development Engineer',
        'Full Stack Developer',
        'Cloud Engineer',
        'Product Engineer'
      ],
      labs: ['Programming Lab', 'Systems Lab', 'Cloud and DevOps Lab']
    },
    {
      id: 'robotics',
      name: 'Robotics & Automation',
      shortName: 'Robotics',
      image: roboticsImg,
      description: 'Shape the future of automation and robotics. Learn to design, build, and program robots for industrial, medical, and consumer applications.',
      highlights: [
        'Robot Design & Kinematics',
        'Industrial Automation',
        'IoT & Embedded Systems',
        'Control Systems',
        'Autonomous Systems'
      ],
      careerPaths: [
        'Robotics Engineer',
        'Automation Specialist',
        'Control Systems Engineer',
        'IoT Developer'
      ],
      labs: ['Robotics Lab', 'Automation Lab', 'IoT Lab']
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
                <img src={dept.image} alt={dept.name} loading="lazy" />
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
              <img src={selectedDepartment.image} alt={selectedDepartment.name} loading="lazy" />
              <div className="dept-badge">{selectedDepartment.shortName}</div>
            </div>
            <div className="dept-content">
              <h2 className="dept-name">{selectedDepartment.name}</h2>
              <p className="dept-description">{selectedDepartment.description}</p>

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

              <div className="dept-info-grid">
                <div className="info-box">
                  <h4>Career Opportunities</h4>
                  <ul className="career-list">
                    {selectedDepartment.careerPaths.map((career, idx) => (
                      <li key={idx}>{career}</li>
                    ))}
                  </ul>
                </div>
                <div className="info-box">
                  <h4>Laboratory Facilities</h4>
                  <ul className="lab-list">
                    {selectedDepartment.labs.map((lab, idx) => (
                      <li key={idx}>{lab}</li>
                    ))}
                  </ul>
                </div>
              </div>

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
                View Department Syllabus Document
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
              <a href="mailto:admissions@siet.edu.in" className="btn btn-secondary">Contact Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
