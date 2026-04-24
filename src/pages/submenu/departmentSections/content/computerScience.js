import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Computer Science & Engineering (Core)',
  ['Algorithms & Data Structures', 'Software Development'],
  'cse'
);

const computerScienceSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'Covers algorithms, data structures, operating systems, and full-stack development with a focus on coding proficiency and industry readiness.'
    ],
    points: [
      'Algorithms & Data Structures',
      'Software Development',
      'System Design'
    ]
  };
});

export default computerScienceSections;
