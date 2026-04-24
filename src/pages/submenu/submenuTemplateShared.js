export const sectionGuidance = {
  'ABOUT US': [
    'Explore institute profile, governance, policies, and campus culture.'
  ],
  DEPARTMENTS: [
    'Compare curriculum, labs, and career focus across all six branches.'
  ],
  ACADEMICS: [
    'Track calendar, exams, syllabus, and semester announcements.'
  ],
  FACILITIES: [
    'View campus infrastructure, labs, library, and student services.'
  ],
  'TRAINING & PLACEMENTS': [
    'Placement drives, training programs, and recruiter information.'
  ],
  ALUMNI: [
    'Alumni network, registration, events, and mentoring channels.'
  ],
  'LIFE @ SIET': [
    'Clubs, events, galleries, and campus life highlights.'
  ]
};

export const quickLinks = {
  'ABOUT US': [
    { label: 'Home', to: '/' },
    { label: 'All Notices', to: '/all-notices' }
  ],
  DEPARTMENTS: [
    { label: 'Departments Home', to: '/departments' },
    { label: 'All Notices', to: '/all-notices' }
  ],
  ACADEMICS: [
    { label: 'Academics Home', to: '/academics' },
    { label: 'All Notices', to: '/all-notices' }
  ],
  FACILITIES: [
    { label: 'Facilities Home', to: '/facilities' },
    { label: 'Home', to: '/' }
  ],
  'TRAINING & PLACEMENTS': [
    { label: 'Placements Home', to: '/placements/placement-brochure' },
    { label: 'All Notices', to: '/all-notices' }
  ],
  ALUMNI: [
    { label: 'Alumni Home', to: '/alumni' },
    { label: 'Home', to: '/' }
  ],
  'LIFE @ SIET': [
    { label: 'Life @ SIET Home', to: '/life-at-siet' },
    { label: 'All Notices', to: '/all-notices' }
  ]
};

export const getSectionHome = (sectionLabel) => {
  switch (sectionLabel) {
    case 'ABOUT US':
      return { label: 'About', to: '/about' };
    case 'DEPARTMENTS':
      return { label: 'Departments', to: '/departments' };
    case 'ACADEMICS':
      return { label: 'Academics', to: '/academics' };
    case 'FACILITIES':
      return { label: 'Facilities', to: '/facilities' };
    case 'TRAINING & PLACEMENTS':
      return { label: 'Placements', to: '/placements/placement-brochure' };
    case 'ALUMNI':
      return { label: 'Alumni', to: '/alumni' };
    case 'LIFE @ SIET':
      return { label: 'Life @ SIET', to: '/life-at-siet' };
    default:
      return { label: 'Home', to: '/' };
  }
};


