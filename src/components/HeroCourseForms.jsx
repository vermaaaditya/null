import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const courseOptions = [
  'Computer Science & Engineering',
  'AI & Machine Learning',
  'Cyber Security',
  'Robotics & Automation',
  'Electrical Engineering',
  'Electronics Engineering (VLSI Design)'
];

const empty = { name: '', phone: '', email: '' };

const HeroCourseForms = () => {
  const navigate = useNavigate();
  const initialState = useMemo(
    () => courseOptions.reduce((acc, course) => ({ ...acc, [course]: { ...empty } }), {}),
    []
  );

  const [valuesByCourse, setValuesByCourse] = useState(initialState);
  const [submittedCourse, setSubmittedCourse] = useState('');

  const update = (course, field, value) => {
    setSubmittedCourse('');
    setValuesByCourse((prev) => ({
      ...prev,
      [course]: {
        ...prev[course],
        [field]: value
      }
    }));
  };

  const onSubmit = (e, course) => {
    e.preventDefault();
    setSubmittedCourse(course);
    setValuesByCourse((prev) => ({ ...prev, [course]: { ...empty } }));
    window.setTimeout(() => navigate(`/admission-form?course=${encodeURIComponent(course)}`), 250);
  };

  return (
    <div className="hero-course-forms" aria-label="Course enquiry forms">
      <div className="hero-course-forms-header">
        <h2 className="hero-course-forms-title">Quick Course Enquiry</h2>
        <p className="hero-course-forms-subtitle">Choose a course and send your enquiry in seconds.</p>
      </div>

      <div className="hero-course-forms-grid">
        {courseOptions.map((course) => {
          const v = valuesByCourse[course];
          return (
            <form key={course} className="hero-course-form" onSubmit={(e) => onSubmit(e, course)}>
              <div className="hero-course-form-head">
                <h3 className="hero-course-form-title">{course}</h3>
              </div>

              <div className="hero-course-form-fields">
                <label className="hero-course-form-label">
                  <span>Name</span>
                  <input
                    value={v.name}
                    onChange={(e) => update(course, 'name', e.target.value)}
                    type="text"
                    required
                    placeholder="Your name"
                  />
                </label>
                <label className="hero-course-form-label">
                  <span>Mobile</span>
                  <input
                    value={v.phone}
                    onChange={(e) => update(course, 'phone', e.target.value)}
                    type="tel"
                    required
                    placeholder="10-13 digits"
                    inputMode="tel"
                    pattern="[+]?[0-9]{10,13}"
                    title="Enter 10 to 13 digits (optionally starting with +)"
                  />
                </label>
                <label className="hero-course-form-label">
                  <span>Email</span>
                  <input
                    value={v.email}
                    onChange={(e) => update(course, 'email', e.target.value)}
                    type="email"
                    required
                    placeholder="you@example.com"
                    inputMode="email"
                  />
                </label>
              </div>

              <div className="hero-course-form-actions">
                <button type="submit" className="hero-course-form-btn">
                  Enquire
                </button>
                {submittedCourse === course ? (
                  <span className="hero-course-form-success" role="status">
                    Saved — opening full enquiry form…
                  </span>
                ) : null}
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCourseForms;

