import React from 'react';
import '../styles.css';
import principalPhoto from '../assets/new-assets/principal-photo/prienciple.jpeg';

/**
 * About Us Page Component
 * Comprehensive information about SIET
 */
const About = () => {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">About SIET</h1>
          <p className="page-subtitle">Building Excellence in Engineering Education</p>
        </div>
      </section>

      {/* About Institute */}
      <section className="section about-institute">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Institute</h2>
            <div className="title-underline"></div>
          </div>
          <div className="content-block">
            <p className="lead-text">
              State Institute of Engineering &amp; Technology (SIET), Panchkula, is a premier government engineering college committed to excellence in technical education and innovation. Established to nurture the next generation of engineers, SIET currently operates from the shared campus of GPP (Government Polytechnic, Panchkula) Sector-26. The institute offers cutting-edge undergraduate programs in Computer Science and Engineering (AI &amp; ML), Computer Science and Engineering (Cyber Security), and Robotics &amp; Automation. With a focus on industry-oriented learning, state-of-the-art facilities, and expert faculty, SIET aims to empower students with the knowledge and skills required to excel in the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>
                To emerge as a center of excellence in engineering education, research, and innovation,
                producing globally competent engineers who contribute to society and technological advancement.
              </p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h3>Our Mission</h3>
              <ul className="mission-list">
                <li>Provide quality education with state-of-the-art infrastructure and facilities</li>
                <li>Foster research, innovation, and entrepreneurship among students</li>
                <li>Develop industry-ready professionals with strong ethical values</li>
                <li>Create partnerships with leading organizations for holistic development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman/Director Message */}
      <section className="section leadership-message">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">From the Director's Desk</h2>
            <div className="title-underline"></div>
          </div>
          <div className="director-content">
            <div className="director-image-large">
              <img src={principalPhoto} alt="Prof. Anil Kumar - Director" />
            </div>
            <div className="director-message-full">
              <h3>Prof. Anil Kumar</h3>
              <p className="designation">Director & Principal</p>
              <p className="credentials">PhD (IIT Bombay) | M.Tech | B.E.</p>
              <div className="message-content">
                <p>
                  Welcome to SIET. We are building a campus where students learn by doing, collaborate across
                  disciplines, and graduate ready for real engineering challenges. Academic depth, ethical thinking,
                  and practical problem-solving are central to everything we teach.
                </p>
                <p>
                  Our faculty teams combine research experience with industry exposure so every course connects
                  theory to implementation. We encourage project-based learning, internships, and innovation
                  challenges throughout the year. I invite you to explore our programs and become part of a
                  student community focused on leadership, curiosity, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy & Objectives */}
      <section className="section quality-policy">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Quality Policy & Objectives</h2>
            <div className="title-underline"></div>
          </div>
          <div className="quality-content">
            <div className="policy-box">
              <h3>Quality Policy</h3>
              <p>
                SIET is committed to providing quality education through continuous improvement in teaching-learning
                processes, research activities, and industry collaboration. We strive to develop competent
                professionals who meet global standards and contribute positively to society.
              </p>
            </div>
            <div className="objectives-grid">
              <div className="objective-card">
                <span className="obj-number">01</span>
                <h4>Academic Excellence</h4>
                <p>Maintain high standards in curriculum delivery and student assessment</p>
              </div>
              <div className="objective-card">
                <span className="obj-number">02</span>
                <h4>Infrastructure Development</h4>
                <p>Continuously upgrade facilities, labs, and learning resources</p>
              </div>
              <div className="objective-card">
                <span className="obj-number">03</span>
                <h4>Faculty Development</h4>
                <p>Enhance faculty competencies through training and research</p>
              </div>
              <div className="objective-card">
                <span className="obj-number">04</span>
                <h4>Industry Integration</h4>
                <p>Foster strong partnerships with industry for placements and projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations & Approvals */}
      <section className="section affiliations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Affiliations & Approvals</h2>
            <div className="title-underline"></div>
          </div>
          <div className="affiliation-grid">
            <div className="affiliation-card">
              <div className="aff-icon">✓</div>
              <h3>Government Approved</h3>
              <p>Approved by Department of Technical Education, Government of Haryana</p>
            </div>
            <div className="affiliation-card">
              <div className="aff-icon">✓</div>
              <h3>AICTE Approved</h3>
              <p>All programs approved by All India Council for Technical Education</p>
            </div>
            <div className="affiliation-card">
              <div className="aff-icon">✓</div>
              <h3>University Affiliated</h3>
              <p>Affiliated to Panjab University, Chandigarh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Anti-Ragging Measures */}
      <section className="section anti-ragging">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Anti-Ragging Measures</h2>
            <div className="title-underline"></div>
          </div>
          <div className="anti-ragging-content">
            <div className="alert-box">
              <h3>Zero Tolerance Policy</h3>
              <p>
                SIET maintains a strict zero-tolerance policy towards ragging. Any form of ragging is
                considered a serious offense and is punishable under law.
              </p>
            </div>
            <div className="measures-grid">
              <div className="measure-item">
                <h4>Anti-Ragging Committee</h4>
                <p>Dedicated committee to prevent and address ragging incidents</p>
              </div>
              <div className="measure-item">
                <h4>24/7 Helpline</h4>
                <p>Round-the-clock helpline for reporting any ragging incidents</p>
              </div>
              <div className="measure-item">
                <h4>Regular Awareness</h4>
                <p>Orientation programs and awareness sessions for students</p>
              </div>
              <div className="measure-item">
                <h4>Swift Action</h4>
                <p>Immediate investigation and strict action against offenders</p>
              </div>
            </div>
            <div className="helpline-info">
              <p><strong>Anti-Ragging Helpline:</strong> 1800-XXX-XXXX (Toll-Free)</p>
              <p><strong>Email:</strong> antiragging@siet.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
