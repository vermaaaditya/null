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
      'Integrates core computing with AI and ML specialization — students build predictive models, automation systems, and intelligent solutions using modern frameworks.'
    ],
    points: [
      'Artificial Intelligence',
      'Machine Learning',
      'Data Science'
    ]
  };
});

export default aiMlSections;
