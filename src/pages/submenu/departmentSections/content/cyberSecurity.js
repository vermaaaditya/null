import createDepartmentDemoSections from '../../departmentDemoSections';

const demoSections = createDepartmentDemoSections(
  'Computer Science & Engineering (Cyber Security)',
  ['Network Security', 'Ethical Hacking'],
  'cyber-security'
);

const cyberSecuritySections = demoSections.map((section) => {
  if (section.id !== 'about-department') return section;
  return {
    ...section,
    body: [
      'The Department of Computer Science & Engineering (Cyber Security) focuses on protecting digital systems, networks, and data from evolving cyber threats. The curriculum is designed to provide both theoretical knowledge and practical exposure to modern security practices.',
      'Students develop skills in ethical hacking, network security, cryptography, and risk management, enabling them to identify vulnerabilities and implement secure solutions.',
      'The department prepares students for critical roles in cybersecurity, ensuring they are equipped to safeguard digital infrastructure in an increasingly connected world.'
    ],
    points: [
      'Network Security',
      'Ethical Hacking',
      'Cryptography'
    ]
  };
});

export default cyberSecuritySections;
