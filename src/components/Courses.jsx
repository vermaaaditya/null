import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import admissionFormDoc from '../assets/new assets/some other document for official work/SIET-PKL-B.TECH_Admission_Form-2025-26.pdf';

/**
 * Courses Component
 * Displays current and upcoming courses offered by the college
 * Includes AI, Cyber, Robotics (current) and Electrical, Mechanical, Civil (upcoming)
 */
const Courses = () => {
  // Current Courses
  const currentCourses = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      shortCode: 'AI',
      image: 'https://images.unsplash.com/photo-1677442d019aa0de15c0e6e2b2d63e61d1b41d74?w=400&h=300&fit=crop',
      description: 'Master machine learning, deep learning, and AI applications with hands-on projects and industry collaboration.',
      duration: '4 Years',
      status: 'ongoing',
      seats: 60
    },
    {
      id: 2,
      title: 'Cyber Security',
      shortCode: 'CS',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
      description: 'Learn cybersecurity fundamentals, ethical hacking, and network security from industry experts.',
      duration: '4 Years',
      status: 'ongoing',
      seats: 50
    },
    {
      id: 3,
      title: 'Robotics & Automation',
      shortCode: 'RA',
      image: 'https://images.unsplash.com/photo-1561603879-2f8b92a40141?w=400&h=300&fit=crop',
      description: 'Explore robotics, automation systems, and intelligent machines with practical laboratory experience.',
      duration: '4 Years',
      status: 'ongoing',
      seats: 45
    }
  ];

  // Upcoming Courses
  const upcomingCourses = [
    {
      id: 4,
      title: 'Electrical Engineering',
      shortCode: 'EE',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
      description: 'Comprehensive study of electrical systems, power generation, and modern electrical technologies.',
      duration: '4 Years',
      status: 'upcoming',
      seats: 55
    },
    {
      id: 5,
      title: 'Mechanical Engineering',
      shortCode: 'ME',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=300&fit=crop',
      description: 'Learn mechanical design, manufacturing, and thermodynamics with state-of-the-art facilities.',
      duration: '4 Years',
      status: 'upcoming',
      seats: 60
    },
    {
      id: 6,
      title: 'Civil Engineering',
      shortCode: 'CE',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3780?w=400&h=300&fit=crop',
      description: 'Study structural design, construction management, and infrastructure development projects.',
      duration: '4 Years',
      status: 'upcoming',
      seats: 50
    }
  ];

  const CourseCard = ({ course }) => (
    <div className={`course-card ${course.status}`}>
      <div className="course-card-image">
        <img 
          src={course.image}
          alt={course.title}
          className="course-img"
        />
        <div className="course-overlay">
          <div className="course-badge">{course.status === 'upcoming' ? 'Coming Soon' : 'Available'}</div>
        </div>
      </div>
      
      <div className="course-card-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-code">Code: {course.shortCode}</p>
        
        <p className="course-description">{course.description}</p>
        
        <div className="course-details">
          <div className="detail-item">
            <span className="detail-label">Duration:</span>
            <span className="detail-value">{course.duration}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Seats:</span>
            <span className="detail-value">{course.seats}</span>
          </div>
        </div>
        
        {course.status === 'upcoming' ? (
          <a href={admissionFormDoc} target="_blank" rel="noopener noreferrer" className={`course-btn ${course.status}`}>
            Pre-Register
          </a>
        ) : (
          <Link to="/departments" className={`course-btn ${course.status}`}>
            Learn More
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <section className="courses section" id="courses">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <div className="title-underline"></div>
        </div>

        {/* Current Courses */}
        <div className="courses-category">
          <h3 className="category-title">Currently Offered</h3>
          <div className="courses-grid">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Upcoming Courses */}
        <div className="courses-category">
          <h3 className="category-title">Coming Soon</h3>
          <div className="courses-grid">
            {upcomingCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
