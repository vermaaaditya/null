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
      'The Department of Robotics & Automation combines principles of mechanical engineering, electronics, and computer science to design intelligent automated systems. The program focuses on developing innovative solutions for industrial and real-world applications.',
      'Students gain hands-on experience in robotics, control systems, and automation technologies, working on projects that integrate hardware and software seamlessly.',
      'The department fosters creativity and technical expertise, preparing students for careers in robotics, automation, and advanced manufacturing industries.'
    ],
    points: [
      'Robotics Systems',
      'Control Systems',
      'Industrial Automation'
    ]
  };
});

export default roboticsSections;
