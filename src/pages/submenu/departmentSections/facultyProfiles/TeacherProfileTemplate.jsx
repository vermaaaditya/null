import React from 'react';
import { Link } from 'react-router-dom';
import { departmentSectionCatalog } from '../../departmentSectionCatalog';

const TeacherProfileTemplate = ({ deptSlug, profile }) => {
  if (!profile) {
    return null;
  }

  const departmentTitle = departmentSectionCatalog[deptSlug]?.title || 'Department';
  const interests = profile.areaOfInterest
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div className="submenu-page teacher-profile-page">
      <section className="section submenu-content-section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="teacher-profile-shell">
            <div className="teacher-profile-actions">
              <Link to={`/departments/${deptSlug}#faculty`} className="submenu-action-btn secondary">
                Back to Faculty
              </Link>
              <a
                href={profile.vidwan}
                target="_blank"
                rel="noreferrer"
                className="submenu-action-btn"
              >
                VIDWAN Profile
              </a>
            </div>

            <article className="teacher-profile-surface">
              <header className="teacher-profile-header">
                <div className="teacher-profile-photo-wrap">
                  <img src={profile.image} alt={profile.name} className="teacher-profile-photo" loading="eager" />
                </div>

                <div className="teacher-profile-heading">
                  <p className="submenu-kicker">FACULTY PROFILE</p>
                  <h1 className="submenu-title" style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.4rem)' }}>
                    {profile.name}
                  </h1>
                  <p className="teacher-profile-designation">{profile.designation}</p>
                  <p className="teacher-profile-department">{departmentTitle}</p>
                </div>
              </header>

              <div className="teacher-profile-info-grid">
                <div className="teacher-profile-info-card">
                  <h2>Qualification</h2>
                  <p>{profile.qualification}</p>
                </div>
                <div className="teacher-profile-info-card">
                  <h2>Email</h2>
                  <p>
                    <a href={`mailto:${profile.email}`} className="teacher-inline-link">
                      {profile.email}
                    </a>
                  </p>
                </div>
              </div>

              <section className="teacher-profile-interests">
                <h2 className="submenu-section-title" style={{ marginBottom: '0.75rem' }}>
                  Areas of Interest
                </h2>
                <div className="teacher-profile-interest-list">
                  {interests.map((interest) => (
                    <span key={`${profile.slug}-${interest}`} className="teacher-interest-chip">
                      {interest}
                    </span>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfileTemplate;
