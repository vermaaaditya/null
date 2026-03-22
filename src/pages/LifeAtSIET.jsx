import React from 'react';
import '../styles.css';

/**
 * Life @ SIET Page Component
 * Media section and gallery
 */
const LifeAtSIET = () => {
  const galleryPool = import.meta.glob('../assets/sietpanchkula.ac.in/wp-content/uploads/**/*.{jpg,jpeg,png,webp}', {
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

  const studentLife = [
    {
      title: 'Cultural Activities',
      description: 'Regular cultural events, festivals, and celebrations bringing the campus to life.',
      icon: '🎭'
    },
    {
      title: 'Technical Events',
      description: 'Hackathons, coding competitions, and technical symposiums throughout the year.',
      icon: '💻'
    },
    {
      title: 'Sports & Fitness',
      description: 'Inter-college tournaments, fitness programs, and recreational activities.',
      icon: '🏃'
    },
    {
      title: 'Student Clubs',
      description: 'Various clubs for robotics, AI, coding, music, dance, and more.',
      icon: '👥'
    },
    {
      title: 'Social Service',
      description: 'NSS and community service activities for social responsibility.',
      icon: '🤝'
    },
    {
      title: 'Industry Interaction',
      description: 'Regular guest lectures, workshops, and industrial visits.',
      icon: '🏢'
    }
  ];

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
          <div className="student-life-grid">
            {studentLife.map((item, idx) => (
              <div key={idx} className="life-card">
                <div className="life-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
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

      <section className="section events-highlights">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Annual Events</h2>
            <div className="title-underline"></div>
          </div>
          <div className="events-grid">
            <div className="event-card">
              <h3>Techfest</h3>
              <p>Annual technical festival featuring competitions, workshops, and exhibitions</p>
            </div>
            <div className="event-card">
              <h3>Cultural Fest</h3>
              <p>Vibrant celebration of music, dance, drama, and artistic performances</p>
            </div>
            <div className="event-card">
              <h3>Sports Week</h3>
              <p>Inter-departmental sports competitions and athletic events</p>
            </div>
            <div className="event-card">
              <h3>Convocation</h3>
              <p>Grand ceremony celebrating graduating students and their achievements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section media-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Media & News</h2>
            <div className="title-underline"></div>
          </div>
          <div className="media-grid">
            <div className="media-card">
              <img src={galleryImages[0]?.src} alt="Campus media coverage" loading="lazy" />
              <h3>Latest News</h3>
              <p>Stay updated with latest campus news and announcements</p>
            </div>
            <div className="media-card">
              <img src={galleryImages[1]?.src} alt="Video gallery highlights" loading="lazy" />
              <h3>Video Gallery</h3>
              <p>Watch highlights from events and campus activities</p>
            </div>
            <div className="media-card">
              <img src={galleryImages[2]?.src} alt="Social stories from SIET" loading="lazy" />
              <h3>Social Media</h3>
              <p>Follow us on Facebook, Instagram, and LinkedIn</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Student Voices</h2>
            <div className="title-underline"></div>
          </div>
          <div className="testimonials-slider">
            <div className="testimonial-box">
              <p className="testimonial-text">
                "SIET has been an incredible journey. The campus life, cultural activities, and
                supportive community have made my college experience truly memorable."
              </p>
              <div className="testimonial-author">
                <h4>Sneha Kapoor</h4>
                <p>B.Tech AIML, 3rd Year</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtSIET;
