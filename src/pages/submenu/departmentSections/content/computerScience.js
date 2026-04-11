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
      'The Department of Computer Science & Engineering (Core) focuses on building strong foundations in computing, programming, and system design. The curriculum is structured to develop analytical thinking and problem-solving skills essential for modern software development.',
      'Students gain expertise in algorithms, data structures, operating systems, and full-stack development, enabling them to design efficient and scalable solutions for real-world challenges.',
      'The department emphasizes practical learning, coding proficiency, and industry readiness to prepare students for careers in software engineering, development, and technology-driven domains.'
    ],
    points: [
      'Algorithms & Data Structures',
      'Software Development',
      'System Design'
    ]
  };
});

export default computerScienceSections;
