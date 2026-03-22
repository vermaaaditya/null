import React from 'react';
import '../styles.css';
import aimlImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/AI-ML.jpg';
import cyberImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Cyber-Security.jpg';
import roboticsImg from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Robotics-Automation.jpg';

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
      name: 'Computer Science & Engineering (Cyber Security)',
      shortName: 'CSE (Cyber Security)',
      image: cyberImg,
      description: 'Master the art of protecting digital assets and infrastructure. Learn ethical hacking, network security, cryptography, and how to defend against cyber threats.',
      highlights: [
        'Ethical Hacking & Penetration Testing',
        'Network Security',
        'Cryptography & Information Security',
        'Digital Forensics',
        'Cloud Security'
      ],
      careerPaths: [
        'Cyber Security Analyst',
        'Ethical Hacker',
        'Security Consultant',
        'Information Security Manager'
      ],
      labs: ['Cyber Security Lab', 'Network Lab', 'Forensics Lab']
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
        </div>
      </section>

      {/* Departments List */}
      {departments.map((dept, index) => (
        <section key={dept.id} className={`section department-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
          <div className="container">
            <div className="dept-grid">
              <div className="dept-image">
                <img src={dept.image} alt={dept.name} />
                <div className="dept-badge">{dept.shortName}</div>
              </div>
              <div className="dept-content">
                <h2 className="dept-name">{dept.name}</h2>
                <p className="dept-description">{dept.description}</p>

                <div className="dept-highlights">
                  <h3>Key Areas of Study</h3>
                  <ul className="highlights-list">
                    {dept.highlights.map((highlight, idx) => (
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
                      {dept.careerPaths.map((career, idx) => (
                        <li key={idx}>{career}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>Laboratory Facilities</h4>
                    <ul className="lab-list">
                      {dept.labs.map((lab, idx) => (
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
              </div>
            </div>
          </div>
        </section>
      ))}

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
              <a href="#apply" className="btn btn-primary">Apply Now</a>
              <a href="#contact" className="btn btn-secondary">Contact Admissions</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
