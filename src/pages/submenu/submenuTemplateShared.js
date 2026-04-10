export const sectionGuidance = {
  'ABOUT US': [
    'Review institute profile and governance details before admission decisions.',
    'Use this section to understand policies, affiliations, and campus culture.'
  ],
  DEPARTMENTS: [
    'Compare curriculum focus, labs, and project opportunities across branches.',
    'Choose your specialization based on long-term skills and career goals.'
  ],
  ACADEMICS: [
    'Track calendar notices and exam updates regularly during each semester.',
    'Plan assignments, practicals, and assessments from official announcements.'
  ],
  FACILITIES: [
    'Check available infrastructure and student support services before joining.',
    'Use campus facilities for balanced academic, technical, and personal growth.'
  ],
  'TRAINING & PLACEMENTS': [
    'Prepare early through aptitude, communication, and technical practice.',
    'Follow placement notices and eligibility criteria for each drive.'
  ],
  ALUMNI: [
    'Stay connected through alumni registration, events, and mentoring channels.',
    'Use alumni networks for internships, guidance, and career referrals.'
  ],
  'LIFE @ SIET': [
    'Participate in clubs, activities, and events for holistic development.',
    'Use media and gallery updates to stay connected with campus life.'
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

export const getInfoText = (title, sectionLabel) => `${title} is an important part of ${sectionLabel}.`;
