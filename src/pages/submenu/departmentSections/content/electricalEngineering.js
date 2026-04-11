import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Electrical Engineering',
  ['Power Systems', 'Electrical Machines'],
  'electrical-engineering'
);

const electricalEngineeringSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'The Department of Electrical Engineering provides a strong foundation in electrical systems, power engineering, and control technologies. The curriculum blends theoretical concepts with practical applications to address real-world energy and infrastructure challenges.',
      'Students develop expertise in power generation, transmission, and electrical system design, along with modern tools used in the industry.',
      'The department prepares students for careers in core electrical sectors, energy systems, and emerging technologies in power and automation.'
    ],
    points: [
      'Power Systems',
      'Electrical Machines',
      'Control Engineering'
    ]
  };
});

export default electricalEngineeringSections;
