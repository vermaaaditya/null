import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Robotics & Automation',
  ['Robotics Systems', 'Control Systems'],
  'robotics'
);

const roboticsSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'Combines mechanical engineering, electronics, and software to design intelligent automated systems — with hands-on projects integrating hardware and software.'
    ],
    points: [
      'Robotics Systems',
      'Control Systems',
      'Industrial Automation'
    ]
  };
});

export default roboticsSections;
