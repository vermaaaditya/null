import React from 'react';
import '../styles.css';

/**
 * Life @ SIET Page Component
 * Media section and gallery
 */
const LifeAtSIET = () => {
  const galleryPool = import.meta.glob('../assets/new-assets/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default'
  });

  const galleryImages = Object.values(galleryPool)
    .slice(0, 12)
    .map((image, index) => ({
      id: index + 1,
      src: image,
      title: `Campus Moment ${index + 1}`,
      category: index % 3 === 0 ? 'campus' : index % 3 === 1 ? 'academics' : 'events'
    }));

  const studentLife = [];

  return (
    <div className="life-at-siet-page">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Life @ SIET</h1>
          <p className="page-subtitle">Experience Campus Life Beyond Classrooms</p>
        </div>
      </section>

      <section className="section life-intro">
        <div className="container">
          <div className="intro-content">
            <h2>A Vibrant Campus Community</h2>
            <p>
              Life at SIET is a perfect blend of academics, extracurricular activities, and personal growth.
              Our campus provides a nurturing environment where students can explore their interests, develop
              new skills, and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      <section className="section student-life-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Student Life</h2>
            <div className="title-underline"></div>
          </div>
          {studentLife.length > 0 ? (
            <div className="student-life-grid">
              {studentLife.map((item, idx) => (
                <div key={idx} className="life-card">
                  <div className="life-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Campus Gallery</h2>
            <div className="title-underline"></div>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <p className="gallery-title">{image.title}</p>
                  <span className="gallery-category">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LifeAtSIET;
