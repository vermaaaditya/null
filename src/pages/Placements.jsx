import React from 'react';
import '../styles.css';
import recruiterOne from '../assets/new-assets/events/walk-in-1024x593.png';
import recruiterTwo from '../assets/new-assets/documents/b.tech-avt-img.png';
import recruiterThree from '../assets/new-assets/logos/haryana-sarkar.png';
import recruiterFour from '../assets/new-assets/events/Web-Development-Competition.jpg';
import recruiterFive from '../assets/new-assets/gallery/Inspection-Pic-1024x768.jpg';

/**
 * Training & Placements Page Component
 */
const Placements = () => {
  const recruiters = [
    { name: 'Tech Hiring Partner Drive', logo: recruiterOne },
    { name: 'Applied Ventures Team', logo: recruiterTwo },
    { name: 'Public Sector Interface', logo: recruiterThree },
    { name: 'Web Engineering League', logo: recruiterFour },
    { name: 'Advanced Manufacturing Connect', logo: recruiterFive }
  ];

  const placementStats = [
    { label: 'Placement Rate', value: '95%' },
    { label: 'Highest Package', value: '12 LPA' },
    { label: 'Average Package', value: '5.5 LPA' },
    { label: 'Companies Visited', value: '50+' }
  ];

  return (
    <div className="placements-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Training & Placements</h1>
          <p className="page-subtitle">Connecting Talent with Opportunity</p>
        </div>
      </section>

      <section className="section placement-stats-section">
        <div className="container">
          <div className="stats-grid">
            {placementStats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section campus-training">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Campus Training</h2>
            <div className="title-underline"></div>
          </div>
          <div className="content-block">
            <p>
              Our comprehensive training program prepares students for successful careers through
              skill development, aptitude training, and personality development sessions.
            </p>
            <div className="training-features">
              <div className="feature-card">
                <h3>Aptitude Training</h3>
                <p>Quantitative, Logical & Verbal reasoning sessions</p>
              </div>
              <div className="feature-card">
                <h3>Technical Skills</h3>
                <p>Programming, Data Structures, DBMS, OS training</p>
              </div>
              <div className="feature-card">
                <h3>Soft Skills</h3>
                <p>Communication, Presentation & Interview skills</p>
              </div>
              <div className="feature-card">
                <h3>Mock Interviews</h3>
                <p>Regular practice sessions with industry experts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section placement-records">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Placement Records</h2>
            <div className="title-underline"></div>
          </div>
          <div className="records-grid">
            <div className="record-card">
              <h3>2025-26</h3>
              <p>176 offers secured across software, analytics, and core engineering profiles.</p>
            </div>
            <div className="record-card">
              <h3>2024-25</h3>
              <p>154 offers with strong participation from technology, consulting, and product firms.</p>
            </div>
            <div className="record-card">
              <h3>2023-24</h3>
              <p>138 offers with increasing internship-to-offer conversions from partner organizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section placement-process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Placement Process</h2>
            <div className="title-underline"></div>
          </div>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <h3>Registration</h3>
              <p>Students register with Training & Placement Cell</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <h3>Pre-Placement Training</h3>
              <p>Comprehensive skill development program</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <h3>Company Visits</h3>
              <p>Companies conduct pre-placement talks</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <h3>Selection Process</h3>
              <p>Aptitude tests, technical & HR interviews</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <h3>Job Offer</h3>
              <p>Selected candidates receive offer letters</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section recruiters">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Major Recruiters</h2>
            <div className="title-underline"></div>
          </div>
          <div className="recruiters-grid">
            {recruiters.map((company, idx) => (
              <div key={idx} className="recruiter-card">
                <img src={company.logo} alt={company.name} loading="lazy" />
                <div className="company-name">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section industry-activities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industry-Academia Activities</h2>
            <div className="title-underline"></div>
          </div>
          <div className="activities-grid">
            <div className="activity-card">
              <h3>Guest Lectures</h3>
              <p>Regular sessions by industry experts and alumni</p>
            </div>
            <div className="activity-card">
              <h3>Workshops</h3>
              <p>Hands-on training on latest technologies and tools</p>
            </div>
            <div className="activity-card">
              <h3>Internships</h3>
              <p>Summer and winter internship opportunities</p>
            </div>
            <div className="activity-card">
              <h3>Industry Visits</h3>
              <p>Exposure to real-world industrial environments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placements;
