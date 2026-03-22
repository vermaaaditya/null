import React from 'react';
import ScrollReveal from './ScrollReveal';
import admissionsDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/05/BTech-Prospectus-2025-26-1.pdf';
import examNoticeDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/03/Notice-PTM.pdf';
import placementDriveDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/03/Quiz-Competition-on-Martyrdom-Day.pdf';
import academicCalendarDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/01/Schedule-of-Academic-Calendar-for-Engg.-Affiliated-Colleges-for-the-Session-2025-26.pdf';
import workshopDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/02/IITROPAR.pdf';
import libraryNoticeDoc from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/training-policy.pdf';

const allNotices = [
  {
    id: 1,
    title: 'Admissions Open for B.Tech 2026-27',
    category: 'Admission',
    date: '23 Mar 2026',
    priority: 'High',
    details: 'Online applications are open for AIML, CSE, and Robotics streams. Last date: 30 April 2026.',
    downloadUrl: admissionsDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/'
  },
  {
    id: 2,
    title: 'Mid-Semester Examination Form Notice',
    category: 'Examination',
    date: '19 Mar 2026',
    priority: 'Medium',
    details: 'Students must complete exam form submission with fee before the deadline to avoid late charges.',
    downloadUrl: examNoticeDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/category/updates/'
  },
  {
    id: 3,
    title: 'Campus Placement Preparation Drive',
    category: 'Placement',
    date: '17 Mar 2026',
    priority: 'High',
    details: 'Aptitude + technical interview preparation sessions will run every Saturday in Seminar Hall A.',
    downloadUrl: placementDriveDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/category/updates/'
  },
  {
    id: 4,
    title: 'Academic Calendar Update',
    category: 'Academic',
    date: '12 Mar 2026',
    priority: 'Low',
    details: 'Updated academic activity schedule for even semester is now available for all departments.',
    downloadUrl: academicCalendarDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/academic-calendar/'
  },
  {
    id: 5,
    title: 'Workshop: Industry Ready Web Development',
    category: 'Event',
    date: '08 Mar 2026',
    priority: 'Medium',
    details: 'Two-day workshop focused on modern frontend architecture, version control, and deployment.',
    downloadUrl: workshopDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/events/'
  },
  {
    id: 6,
    title: 'Library Extended Timings Notice',
    category: 'Facility',
    date: '06 Mar 2026',
    priority: 'Low',
    details: 'Library remains open till 9 PM on weekdays during examination preparation period.',
    downloadUrl: libraryNoticeDoc,
    readMoreUrl: 'https://sietpanchkula.ac.in/facilities/'
  }
];

const AllNoticesBoard = () => {
  return (
    <ScrollReveal>
      <section className="all-notices section" id="all-notices" aria-label="All notices board">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">All Notices</h2>
            <div className="title-underline"></div>
          </div>

          <div className="all-notices-grid">
            {allNotices.map((notice) => (
              <article key={notice.id} className="all-notice-card">
                <div className="all-notice-meta">
                  <span className="all-notice-category">{notice.category}</span>
                  <span className={`all-notice-priority ${notice.priority.toLowerCase()}`}>{notice.priority}</span>
                </div>
                <h3>{notice.title}</h3>
                <p className="all-notice-date">Posted: {notice.date}</p>
                <p className="all-notice-details">{notice.details}</p>
                <div className="all-notice-actions">
                  <a href={notice.downloadUrl} target="_blank" rel="noopener noreferrer" className="notice-btn secondary">Download</a>
                  <a href={notice.readMoreUrl} target="_blank" rel="noopener noreferrer" className="notice-btn primary">Read More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default AllNoticesBoard;
