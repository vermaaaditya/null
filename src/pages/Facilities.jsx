import React from 'react';
import '../styles.css';

/**
 * Facilities Page Component
 * Showcases all campus facilities at SIET
 */
const Facilities = () => {
  const facilityImages = Object.values(
    import.meta.glob('../assets/new-assets/**/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default'
    })
  ).slice(0, 11);

  const facilities = [
    {
      id: 'infrastructure',
      icon: '🏢',
      title: 'Infrastructure',
      description: 'Modern campus spread across acres with well-designed buildings, spacious classrooms, and green spaces for holistic development.',
      features: [
        'Air-conditioned Smart Classrooms',
        'Seminar Halls with AV Equipment',
        'High-speed WiFi Campus',
        'Green Campus Initiative',
        'Parking Facilities'
      ],
      image: facilityImages[0]
    },
    {
      id: 'library',
      icon: '📚',
      title: 'Library',
      description: 'State-of-the-art library with extensive collection of books, journals, e-resources, and digital databases for comprehensive learning.',
      features: [
        '10,000+ Books Collection',
        'Digital Library & E-Resources',
        'National & International Journals',
        'Reading Rooms & Study Areas',
        'Online Database Access'
      ],
      image: facilityImages[1]
    },
    {
      id: 'hostel',
      icon: '🏠',
      title: 'Hostel',
      description: 'Comfortable and secure hostel accommodation with all modern amenities for both boys and girls, creating a home away from home.',
      features: [
        'Separate Boys & Girls Hostels',
        'Furnished Rooms with WiFi',
        'Mess with Nutritious Food',
        '24/7 Security & CCTV',
        'Recreation & Common Areas'
      ],
      image: facilityImages[2]
    },
    {
      id: 'sports',
      icon: '⚽',
      title: 'Sports Facilities',
      description: 'Comprehensive sports infrastructure promoting physical fitness and sportsmanship with facilities for indoor and outdoor games.',
      features: [
        'Cricket & Football Grounds',
        'Basketball & Volleyball Courts',
        'Indoor Games Room',
        'Gymnasium & Fitness Center',
        'Sports Equipment & Coaching'
      ],
      image: facilityImages[3]
    },
    {
      id: 'smart-classes',
      icon: '💻',
      title: 'Smart Classes',
      description: 'Technology-enabled classrooms with interactive displays, digital content, and modern teaching aids for enhanced learning experience.',
      features: [
        'Interactive Smart Boards',
        'Digital Content Library',
        'Audio-Visual Systems',
        'Recording Facilities',
        'Online Learning Integration'
      ],
      image: facilityImages[4]
    },
    {
      id: 'canteen',
      icon: '🍽️',
      title: 'Canteen',
      description: 'Hygienic and spacious canteen serving nutritious meals, snacks, and beverages at affordable prices in a comfortable environment.',
      features: [
        'Hygienic Food Preparation',
        'Varied Menu Options',
        'Affordable Pricing',
        'Spacious Seating Area',
        'Quality Maintained'
      ],
      image: facilityImages[5]
    },
    {
      id: 'laboratories',
      icon: '🔬',
      title: 'Laboratories',
      description: 'Well-equipped laboratories with latest instruments and technology for practical learning and research in all engineering disciplines.',
      features: [
        'AI/ML Lab with GPU Systems',
        'Cyber Security & Forensics Lab',
        'Robotics & Automation Lab',
        'Computer Labs with Latest Config',
        'Research & Innovation Labs'
      ],
      image: facilityImages[6]
    },
    {
      id: 'seminar-halls',
      icon: '🎤',
      title: 'Seminar/Conference Rooms',
      description: 'Modern seminar halls and conference rooms equipped with advanced audio-visual facilities for workshops, seminars, and events.',
      features: [
        'Seating Capacity: 100-300',
        'Advanced AV Equipment',
        'Video Conferencing Facilities',
        'Acoustic Design',
        'Air Conditioning'
      ],
      image: facilityImages[7]
    },
    {
      id: 'campus',
      icon: '🌳',
      title: 'Campus',
      description: 'Lush green campus with eco-friendly environment, providing a perfect blend of modern infrastructure and natural beauty.',
      features: [
        'Landscaped Gardens',
        'Open Air Theater',
        'Student Gathering Areas',
        'Clean & Green Initiative',
        'Sustainable Practices'
      ],
      image: facilityImages[8]
    },
    {
      id: 'healthcare',
      icon: '⚕️',
      title: 'Healthcare',
      description: 'First-aid and medical facilities available on campus with tie-ups with nearby hospitals for emergency medical care.',
      features: [
        'First Aid Room',
        'Medical Officer on Call',
        'Tie-up with Hospitals',
        'Health Check-up Camps',
        'Emergency Ambulance Service'
      ],
      image: facilityImages[9]
    },
    {
      id: 'security',
      icon: '🛡️',
      title: 'Security',
      description: 'Round-the-clock security with CCTV surveillance, trained security personnel, and controlled access for safe campus environment.',
      features: [
        '24/7 Security Personnel',
        'CCTV Surveillance',
        'Controlled Entry/Exit',
        'Fire Safety Systems',
        'Emergency Response Team'
      ],
      image: facilityImages[10]
    }
  ];

  return (
    <div className="facilities-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Campus Facilities</h1>
          <p className="page-subtitle">World-Class Infrastructure for Excellence in Education</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section facilities-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Comprehensive Facilities for Holistic Development</h2>
            <p>
              SIET provides state-of-the-art facilities designed to support academic excellence, research,
              and overall student development. Our modern infrastructure creates an ideal environment for
              learning, innovation, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section facilities-grid-section">
        <div className="container">
          <div className="facilities-grid">
            {facilities.map((facility) => (
              <div key={facility.id} className="facility-card">
                {facility.image && <img src={facility.image} alt={facility.title} loading="lazy" className="facility-image" />}
                <div className="facility-icon">{facility.icon}</div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
                <ul className="facility-features">
                  {facility.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section campus-map-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Find Us on Map</h2>
            <div className="title-underline"></div>
          </div>
          <div className="campus-map-card">
            <iframe
              title="SIET Panchkula Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.8480%2C30.7040%2C76.8560%2C30.7100&layer=mapnik&marker=30.7070%2C76.8520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-info">
              <h3>State Institute of Engineering and Technology</h3>
              <p>Sector 26, Panchkula, Haryana</p>
              <a href="https://www.openstreetmap.org/?mlat=30.7070&mlon=76.8520#map=17/30.7070/76.8520" target="_blank" rel="noopener noreferrer" className="map-link">
                Open Full Map
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section facilities-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Experience Our Campus</h2>
            <p>
              Visit SIET to see our world-class facilities firsthand. Schedule a campus tour and
              discover how our infrastructure supports your engineering education journey.
            </p>
            <div className="cta-buttons">
              <a href="mailto:sietpkl@gmail.com?subject=Campus%20Tour%20Request" className="btn btn-primary">Schedule Campus Tour</a>
              <a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Virtual Tour</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
