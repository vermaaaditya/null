import React, { useLayoutEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import '../styles.css';
import campusImage from '../assets/homepageimage/siet1.jpg';
import directorImage from '../assets/prienciplephoto/prienciple.jpeg';
import aiMlImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/AI-ML.jpg';
import cyberImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Cyber-Security.jpg';
import roboticsImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/03/Robotics-Automation.jpg';
import academicCalendarImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/02/Academic-Calendar-2025-26-733x1024.jpg';
import facilitiesImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/02/siet-panchkula-building.jpg';
import competitionImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2026/03/Web-Development-Competition.jpg';
import campusLifeImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/08/1-1-1024x768.jpg';
import galleryImage from '../assets/sietpanchkula.ac.in/wp-content/uploads/2025/08/3-1-edited.jpg';

const submenuContent = {
  about: {
    'about-institute': {
      title: 'About Institute',
      image: campusImage,
      points: [
        'SIET Panchkula is approved by AICTE, New Delhi and affiliated to Kurukshetra University.',
        'The institute emphasizes technical and industrial education for employability and productivity.',
        'Current classes operate from Government Polytechnic campus, Sector 26, Panchkula.'
      ]
    },
    'vision-mission': {
      title: 'Vision & Mission',
      image: campusImage,
      points: [
        'The mission focuses on holistic education with strong training outcomes and student well-being.',
        'The institute aims to prepare students for life in a rapidly changing 21st century.',
        'Teaching approach combines technical skills, practical orientation, and career readiness.'
      ]
    },
    'directors-message': {
      title: "Director's Message",
      image: directorImage,
      imageMode: 'portrait',
      points: [
        'Leadership perspective and student-first priorities',
        'Focus on practical learning and research mindset',
        'Institutional direction for future growth'
      ]
    },
    'quality-policy': {
      title: 'Quality Policy',
      image: campusImage,
      points: [
        'Academic quality assurance and standards',
        'Continuous improvement in teaching-learning',
        'Outcome-focused performance culture'
      ]
    },
    affiliations: {
      title: 'Affiliations',
      image: campusImage,
      points: [
        'University affiliation details',
        'Regulatory approvals and recognition status',
        'Compliance and accreditation overview'
      ]
    },
    'anti-ragging': {
      title: 'Anti-Ragging',
      image: campusImage,
      points: [
        'Zero-tolerance policy and preventive framework',
        'Committee structure and reporting channels',
        'Safety measures and awareness initiatives'
      ]
    }
  },
  departments: {
    engineering: {
      title: 'Engineering',
      image: campusImage,
      points: ['Interdisciplinary engineering foundation', 'Core labs and practical curriculum', 'Project-based learning pathways']
    },
    'ai-ml': {
      title: 'AI & Machine Learning',
      image: aiMlImage,
      points: ['Machine learning fundamentals and applications', 'Model development and evaluation workflows', 'Industry-relevant AI project exposure']
    },
    'cyber-security': {
      title: 'Cyber Security',
      image: cyberImage,
      points: ['Network and application security practices', 'Ethical hacking and digital forensics basics', 'Security operations and risk awareness']
    },
    robotics: {
      title: 'Robotics & Automation',
      image: roboticsImage,
      points: ['Control systems and embedded foundations', 'Sensor integration and automation workflows', 'Robotics prototyping and deployment']
    },
    'computer-science': {
      title: 'Computer Science',
      image: campusImage,
      points: ['Strong programming and algorithmic foundation', 'Software engineering lifecycle and practices', 'Cloud, data, and modern application stacks']
    }
  },
  academics: {
    'courses-offered': {
      title: 'Courses Offered',
      image: aiMlImage,
      points: [
        'B.Tech CSE (AI & ML) with intake of 60 seats.',
        'B.Tech CSE (Cyber Security) with intake of 60 seats.',
        'B.Tech Robotics & Automation with intake of 60 seats.',
        'Official fee structure and admission details are published on the SIET website.'
      ]
    },
    'academic-calendar': {
      title: 'Academic Calendar',
      image: academicCalendarImage,
      points: [
        'Even semester academic calendar notices are published under Updates.',
        'Class commencement and semester session notices are posted regularly.',
        'Students should track updates for latest term dates and institute announcements.'
      ]
    },
    'teaching-learning': {
      title: 'Teaching & Learning',
      image: campusImage,
      points: ['Outcome-based pedagogy model', 'Classroom plus lab integration', 'Mentoring and continuous assessment']
    },
    curriculum: {
      title: 'Curriculum',
      image: campusImage,
      points: ['Course-wise syllabus design', 'Industry updates in subject content', 'Balanced theory and practical credit mix']
    },
    'exam-schedule': {
      title: 'Exam Schedule',
      image: academicCalendarImage,
      points: [
        'External practical datesheets are announced through official updates.',
        'Students are instructed to follow notified timings and dress code.',
        'Exam-related notices are posted with date-wise update entries.'
      ]
    },
    'student-testimonials': {
      title: 'Student Testimonials',
      image: competitionImage,
      points: ['Student success stories', 'Learning journey reflections', 'Placement and internship experiences']
    }
  },
  facilities: {
    infrastructure: {
      title: 'Infrastructure',
      image: facilitiesImage,
      points: [
        'Declared campus area is 5.15 acres.',
        'Current campus status indicates leased and shared infrastructure.',
        'Academic operations are being run from Sector 26 Panchkula location.'
      ]
    },
    library: {
      title: 'Library',
      image: campusImage,
      points: [
        'Library is part of the academic facility ecosystem listed by the institute.',
        'Students are expected to use library support for curriculum and project learning.',
        'Resource availability is managed as part of shared institutional infrastructure.'
      ]
    },
    hostels: {
      title: 'Hostels',
      image: facilitiesImage,
      points: ['Safe and managed residential facilities', 'Student amenities and common spaces', 'Hostel rules and support services']
    },
    sports: {
      title: 'Sports',
      image: competitionImage,
      points: ['Outdoor and indoor sports opportunities', 'Fitness and wellness participation', 'Inter-college competition support']
    },
    'smart-classrooms': {
      title: 'Smart Classrooms',
      image: campusImage,
      points: ['Audio-visual enabled classrooms', 'Interactive teaching tools', 'Hybrid-ready learning setup']
    },
    laboratories: {
      title: 'Laboratories',
      image: roboticsImage,
      points: ['Department-specific lab ecosystems', 'Hands-on experiments and mini projects', 'Safety and equipment standards']
    },
    cafeteria: {
      title: 'Cafeteria',
      image: facilitiesImage,
      points: ['Hygienic food services on campus', 'Student-friendly menu options', 'Comfortable dining environment']
    },
    healthcare: {
      title: 'Healthcare',
      image: facilitiesImage,
      points: ['First-aid and emergency response support', 'Medical consultation access', 'Wellness awareness initiatives']
    },
    security: {
      title: 'Security',
      image: facilitiesImage,
      points: ['Campus security monitoring systems', 'Access control and safety protocols', 'Rapid response for incidents']
    }
  },
  placements: {
    'campus-training': {
      title: 'Campus Training',
      image: competitionImage,
      points: ['Aptitude and technical preparation tracks', 'Soft skills and interview readiness', 'Mock tests and mentoring sessions']
    },
    'placement-records': {
      title: 'Placement Records',
      image: competitionImage,
      points: [
        'Training and placement communication is shared through regular update notices.',
        'Students should monitor update posts for latest institutional opportunities.',
        'Department-specific activities are announced as official date-based notices.'
      ]
    },
    'major-recruiters': {
      title: 'Major Recruiters',
      image: campusImage,
      points: ['Partner organizations and hiring brands', 'Sector diversity in recruitment', 'Recurring placement collaborators']
    },
    'placement-process': {
      title: 'Placement Process',
      image: campusImage,
      points: ['Step-by-step campus recruitment flow', 'Eligibility and registration guidance', 'Interview and offer stages']
    },
    'student-testimonials': {
      title: 'Student Testimonials',
      image: competitionImage,
      points: [
        'Student activities include competitions and academic engagement programs.',
        'Recent updates highlight events such as web development and quiz competitions.',
        'Students are encouraged to participate in institute-level skill events.'
      ]
    }
  },
  alumni: {
    'alumni-directory': {
      title: 'Alumni Directory',
      image: campusLifeImage,
      points: ['Batch-wise alumni network visibility', 'Professional and academic profiles', 'Mentorship and outreach opportunities']
    },
    'alumni-registration': {
      title: 'Alumni Registration',
      image: campusLifeImage,
      points: [
        'For assistance and official communication, contact details are published by SIET.',
        'Institute helpline: 0172-2929871.',
        'Official email: sietpkl@gmail.com.'
      ]
    },
    'alumni-events': {
      title: 'Alumni Events',
      image: campusLifeImage,
      points: ['Meetups, reunions, and knowledge sessions', 'Guest talks and networking events', 'Collaborative alumni initiatives']
    }
  },
  'life-at-siet': {
    'campus-life': {
      title: 'Campus Life',
      image: campusLifeImage,
      points: ['Student clubs and cultural activities', 'Collaborative campus environment', 'Balanced academic and social experience']
    },
    'photo-gallery': {
      title: 'Photo Gallery',
      image: galleryImage,
      points: ['Snapshots from events and campus life', 'Academic and co-curricular highlights', 'Institutional achievements in visuals']
    },
    'video-gallery': {
      title: 'Video Gallery',
      image: galleryImage,
      points: ['Campus showcase and event videos', 'Student projects and initiative clips', 'Official highlights and media reels']
    },
    'events-activities': {
      title: 'Events & Activities',
      image: competitionImage,
      points: ['Workshops, fests, and seminars', 'Technical and non-technical competitions', 'Student engagement calendar']
    }
  }
};

const SubmenuPage = () => {
  const location = useLocation();
  const [section, subSection] = location.pathname.split('/').filter(Boolean);

  const sectionData = submenuContent[section]?.[subSection];

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  }, [location.pathname]);

  if (!sectionData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-card">
            <p className="submenu-kicker">{section.replace('-', ' ').toUpperCase()}</p>
            <h1 className="submenu-title">{sectionData.title}</h1>
            <p className="submenu-subtitle">Focused information and highlights for this submenu section.</p>
          </div>
        </div>
      </section>

      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-content-card">
            <div className="submenu-feature-image-wrap">
              <img
                src={sectionData.image || campusImage}
                alt={sectionData.title}
                className={`submenu-feature-image ${sectionData.imageMode === 'portrait' ? 'portrait' : ''}`}
              />
            </div>
            <h2>Overview</h2>
            <ul className="submenu-point-list">
              {sectionData.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuPage;
