import React, { useState } from 'react';
import '../styles.css';
import facultyLead from '../assets/new-assets/teachers/anil-kumar.jpg';
import facultyNormsDoc from '../assets/new-assets/documents/UGC-Qualification-18-Jul-2018.pdf';
import aicteDoc from '../assets/new-assets/notifications/AICTE-Degree-Pay-Qualifications-and-Promotions.pdf';
import academicCalendarDoc from '../assets/new-assets/notifications/Schedule-of-Academic-Calendar-for-Engg.-Affiliated-Colleges-for-the-Session-2025-26.pdf';

/**
 * Academics Page Component
 * Academic information, faculty, curriculum, and student feedback
 */
const Academics = () => {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    course: '',
    semester: '',
    feedback: '',
    rating: '5'
  });
  const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFeedbackSubmitted(true);
    setFeedbackForm({
      name: '',
      email: '',
      course: '',
      semester: '',
      feedback: '',
      rating: '5'
    });
  };

  const testimonials = [
    {
      name: 'Rahul Sharma',
      course: 'B.Tech AIML, 2025',
      text: 'The practical approach to learning at SIET has helped me understand complex AI concepts. The faculty support and lab facilities are excellent.',
      rating: 5
    },
    {
      name: 'Priya Verma',
      course: 'B.Tech Cyber Security, 2024',
      text: 'The hands-on training in cyber security labs and industry-relevant curriculum have prepared me well for my career. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      course: 'B.Tech Robotics, 2025',
      text: 'Working on real robotics projects and learning from experienced faculty has been an amazing experience. SIET provides the perfect environment for innovation.',
      rating: 5
    }
  ];

  return (
    <div className="academics-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Academics</h1>
          <p className="page-subtitle">Excellence in Engineering Education</p>
        </div>
      </section>

      {/* Administration & Faculty */}
      <section className="section admin-faculty">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Administration & Faculty</h2>
            <div className="title-underline"></div>
          </div>
          <div className="content-block">
            <p>
              SIET boasts a team of highly qualified and experienced faculty members with expertise in
              various engineering disciplines. Our faculty includes PhDs from premier institutions, industry
              professionals, and researchers committed to academic excellence and student development.
            </p>
            <div className="faculty-stats">
              <div className="stat-card">
                <h3>20+</h3>
                <p>Expert Faculty</p>
              </div>
              <div className="stat-card">
                <h3>15+</h3>
                <p>PhD Holders</p>
              </div>
              <div className="stat-card">
                <h3>50+</h3>
                <p>Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section faculty-docs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Faculty Profile & Documents</h2>
            <div className="title-underline"></div>
          </div>
          <div className="faculty-docs-grid">
            <article className="faculty-profile-card">
              <img src={facultyLead} alt="Prof. Anil Kumar" loading="lazy" />
              <div>
                <h3>Prof. Anil Kumar</h3>
                <p>Director and Senior Academic Lead</p>
                <p>Research-driven leadership with focus on quality technical education.</p>
              </div>
            </article>
            <div className="faculty-doc-list">
              <a href={facultyNormsDoc} target="_blank" rel="noopener noreferrer" className="faculty-doc-item">
                UGC Qualification Guidelines
              </a>
              <a href={aicteDoc} target="_blank" rel="noopener noreferrer" className="faculty-doc-item">
                AICTE Degree Qualifications and Promotions
              </a>
              <a href={academicCalendarDoc} target="_blank" rel="noopener noreferrer" className="faculty-doc-item">
                Official Academic Calendar Schedule
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Learning Process */}
      <section className="section teaching-learning">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Teaching Learning Process</h2>
            <div className="title-underline"></div>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">📖</div>
              <h3>Theory Classes</h3>
              <p>Comprehensive lectures using modern teaching aids and interactive methods</p>
            </div>
            <div className="process-card">
              <div className="process-icon">🔬</div>
              <h3>Practical Sessions</h3>
              <p>Hands-on lab work and experiments in state-of-the-art laboratories</p>
            </div>
            <div className="process-card">
              <div className="process-icon">💼</div>
              <h3>Project-Based Learning</h3>
              <p>Real-world projects and industry collaborations for practical experience</p>
            </div>
            <div className="process-card">
              <div className="process-icon">🎯</div>
              <h3>Assessment & Evaluation</h3>
              <p>Continuous evaluation through tests, assignments, and presentations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section academic-calendar">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Academic Calendar</h2>
            <div className="title-underline"></div>
          </div>
          <div className="calendar-content">
            <p className="calendar-intro">
              The academic year is divided into two semesters with a well-structured schedule of
              classes, examinations, and academic activities.
            </p>
            <div className="semester-grid">
              <div className="semester-card">
                <h3>Odd Semester</h3>
                <ul>
                  <li><strong>Duration:</strong> August - December</li>
                  <li><strong>Mid-Term:</strong> October</li>
                  <li><strong>End-Term:</strong> December</li>
                  <li><strong>Vacation:</strong> December - January</li>
                </ul>
              </div>
              <div className="semester-card">
                <h3>Even Semester</h3>
                <ul>
                  <li><strong>Duration:</strong> January - May</li>
                  <li><strong>Mid-Term:</strong> March</li>
                  <li><strong>End-Term:</strong> May</li>
                  <li><strong>Vacation:</strong> May - July</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section curriculum">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Curriculum</h2>
            <div className="title-underline"></div>
          </div>
          <div className="content-block">
            <p>
              Our curriculum is designed to provide a strong foundation in engineering fundamentals
              while offering specialized knowledge in cutting-edge technologies. The curriculum is
              regularly updated to align with industry requirements and technological advancements.
            </p>
            <div className="curriculum-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>Industry-Aligned</h4>
                  <p>Curriculum developed in consultation with industry experts</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>Practical Focus</h4>
                  <p>Balance of theory and hands-on practical experience</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>Elective Choices</h4>
                  <p>Flexibility to choose from various elective courses</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <div>
                  <h4>Skill Development</h4>
                  <p>Integrated soft skills and professional development programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Schedule */}
      <section className="section exam-schedule">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Examination Schedule</h2>
            <div className="title-underline"></div>
          </div>
          <div className="content-block">
            <p>
              Examinations are conducted as per the university schedule. Students are evaluated through
              continuous internal assessment and end-semester examinations.
            </p>
            <div className="exam-info-grid">
              <div className="exam-info-card">
                <h4>Internal Assessment</h4>
                <p>30% weightage through tests, assignments, and attendance</p>
              </div>
              <div className="exam-info-card">
                <h4>End Semester Exam</h4>
                <p>70% weightage through comprehensive written examination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Student Testimonials</h2>
            <div className="title-underline"></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Feedback Form */}
      <section className="section feedback-form-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Student Feedback Form</h2>
            <div className="title-underline"></div>
          </div>
          <div className="form-container">
            <p className="form-intro">
              Your feedback helps us improve our academic programs and teaching quality.
              Please share your thoughts and suggestions.
            </p>
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={feedbackForm.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={feedbackForm.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="course">Course *</label>
                  <select
                    id="course"
                    name="course"
                    value={feedbackForm.course}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="aiml">B.Tech AIML</option>
                    <option value="cyber">B.Tech Cyber Security</option>
                    <option value="robotics">B.Tech Robotics</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="semester">Semester *</label>
                  <select
                    id="semester"
                    name="semester"
                    value={feedbackForm.semester}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1st Semester</option>
                    <option value="2">2nd Semester</option>
                    <option value="3">3rd Semester</option>
                    <option value="4">4th Semester</option>
                    <option value="5">5th Semester</option>
                    <option value="6">6th Semester</option>
                    <option value="7">7th Semester</option>
                    <option value="8">8th Semester</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="rating">Overall Rating *</label>
                <select
                  id="rating"
                  name="rating"
                  value={feedbackForm.rating}
                  onChange={handleInputChange}
                  required
                >
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very Good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Needs Improvement</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="feedback">Your Feedback *</label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={feedbackForm.feedback}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Share your experience, suggestions, or concerns..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Feedback
              </button>
              {isFeedbackSubmitted && (
                <p className="form-success">Thank you for your feedback. We value your suggestions.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
