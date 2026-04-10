import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import campusBuilding from '../assets/new-assets/campus/siet-panchkula-building.jpg';
const AboutInstituteHome = () => {
  return (
    <ScrollReveal>
      <section className="section home-about-institute" aria-label="About the institute">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About the Institute</h2>
            <div className="title-underline"></div>
          </div>

          <div className="home-about-grid">
            <div className="home-about-visual">
              <img src={campusBuilding} alt="SIET Panchkula campus building" loading="lazy" />
            </div>
            <div className="home-about-content">
              <p className="lead-text">
                State Institute of Engineering &amp; Technology (SIET), Panchkula, is a premier government engineering
                college committed to excellence in technical education and innovation. Established to nurture the next
                generation of engineers, SIET currently operates from the shared campus of GPP (Government Polytechnic,
                Panchkula) Sector-26. The institute offers undergraduate programs in Computer Science and Engineering
                (AI &amp; ML), Computer Science and Engineering (Cyber Security), and Robotics &amp; Automation.
              </p>
              <div className="home-about-actions">
                <Link to="/about/about-institute" className="btn btn-primary">
                  Read More
                </Link>
                  <Link to="/departments/cse" className="btn btn-secondary">
                  Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default AboutInstituteHome;

