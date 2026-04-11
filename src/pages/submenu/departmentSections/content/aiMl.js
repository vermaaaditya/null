import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Computer Science & Engineering (AI & Machine Learning)',
  ['Artificial Intelligence', 'Machine Learning'],
  'ai-ml'
);

const aiMlSections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'The Department of Computer Science & Engineering (AI & Machine Learning) is dedicated to advancing intelligent systems and data-driven technologies. The program integrates core computing knowledge with specialized training in artificial intelligence and machine learning.',
      'Students work on real-world datasets and applications, gaining hands-on experience in building predictive models, automation systems, and intelligent solutions using modern tools and frameworks.',
      'The department promotes innovation and research to prepare students for careers in AI engineering, data science, and emerging technology fields.'
    ],
    points: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science'
    ]
  };
});

export default aiMlSections;
