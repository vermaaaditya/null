import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Electronics Engineering (VLSI Design)',
  ['VLSI Design', 'Embedded Systems'],
  'electronics-vlsi'
);

const electronicsVlsiSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'The Department of Electronics Engineering (VLSI Design) focuses on building strong fundamentals in electronics along with specialized expertise in integrated circuit design and semiconductor technologies. The curriculum is designed to balance theoretical concepts with practical implementation.',
      'Students are trained in key domains such as VLSI design, embedded systems, and modern electronic technologies, enabling them to work on real-world engineering challenges and industry-driven applications.',
      'The department emphasizes hands-on learning, innovation, and research-oriented thinking to prepare students for careers in core electronics, chip design, and emerging technology sectors.'
    ],
    points: [
      'VLSI Design',
      'Embedded Systems',
      'Semiconductor Technology'
    ]
  };
});

export default electronicsVlsiSections;
