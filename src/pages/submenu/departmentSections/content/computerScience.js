import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Computer Science & Engineering',
  ['Algorithms & Data Structures', 'Software Development'],
  'cse'
);

const computerScienceSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'Covers algorithms, data structures, operating systems, and full-stack development with a strong focus on coding proficiency and engineering design.',
      'Students work through lab-intensive modules, version-controlled projects, and collaborative development exercises that mirror real software workflows.',
      'The department encourages participation in coding contests, hackathons, internships, and technical clubs to build confidence beyond classrooms.'
    ],
    points: [
      'Algorithms, data structures, and complexity analysis.',
      'Software development lifecycle and testing practices.',
      'System design fundamentals and scalable architecture concepts.',
      'Databases, operating systems, and computer networks integration.',
      'Career readiness through projects, aptitude training, and interview preparation.'
    ]
  };
});

export default computerScienceSections;
