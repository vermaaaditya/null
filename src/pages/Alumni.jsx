import React, { useState } from 'react';
import '../styles.css';

/**
 * Alumni Page Component
 * Alumni registration form
 */
const Alumni = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    batch: '',
    department: '',
    currentCompany: '',
    designation: '',
    location: '',
    linkedIn: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted successfully! (Demo)');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      batch: '',
      department: '',
      currentCompany: '',
      designation: '',
      location: '',
      linkedIn: '',
      message: ''
    });
  };

  return (
    <div className="alumni-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Alumni Network</h1>
          <p className="page-subtitle">Stay Connected with SIET Family</p>
        </div>
      </section>

      <section className="section alumni-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Join Our Growing Alumni Network</h2>
            <p>
              SIET alumni are making their mark across industries worldwide. Stay connected with your alma mater,
              mentor current students, and network with fellow alumni through our alumni association.
            </p>
          </div>
        </div>
      </section>

      <section className="section alumni-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <h2>500+</h2>
              <p>Alumni Worldwide</p>
            </div>
            <div className="stat-box">
              <h2>100+</h2>
              <p>Companies</p>
            </div>
            <div className="stat-box">
              <h2>20+</h2>
              <p>Countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section registration-form-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Alumni Registration</h2>
            <div className="title-underline"></div>
          </div>
          <div className="form-container">
            <p className="form-intro">
              Register to become part of the SIET Alumni Association and stay connected with your
              fellow graduates and the institution.
            </p>
            <form onSubmit={handleSubmit} className="alumni-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="batch">Passing Year/Batch *</label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2023"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="department">Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="aiml">B.Tech AIML</option>
                  <option value="cyber">B.Tech Cyber Security</option>
                  <option value="robotics">B.Tech Robotics & Automation</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="currentCompany">Current Company</label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="designation">Current Designation</label>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Your designation"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">Current Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, Country"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="linkedIn">LinkedIn Profile</label>
                  <input
                    type="url"
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Share your SIET experience, achievements, or how you'd like to contribute..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Register as Alumni
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section alumni-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Alumni Benefits</h2>
            <div className="title-underline"></div>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Networking Opportunities</h3>
              <p>Connect with fellow alumni across industries and locations</p>
            </div>
            <div className="benefit-card">
              <h3>Mentorship Programs</h3>
              <p>Guide and inspire current students with your expertise</p>
            </div>
            <div className="benefit-card">
              <h3>Annual Meetups</h3>
              <p>Participate in alumni gatherings and reunion events</p>
            </div>
            <div className="benefit-card">
              <h3>Career Resources</h3>
              <p>Access exclusive job postings and career opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
