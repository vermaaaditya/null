const createDepartmentDemoSections = (departmentName, focusAreas, routeSlug) => [
  {
    id: 'about-department',
    title: 'About Department',
    route: routeSlug ? `/departments/${routeSlug}/about-department` : undefined,
    body: [
      `The ${departmentName} department at SIET offers a practice-oriented curriculum aligned with current industry requirements.`,
      'Academic delivery combines classroom theory, structured lab sessions, tutorials, and project mentorship to strengthen conceptual clarity and practical application.'
    ],
    points: [
      `Primary focus: ${focusAreas[0]}`,
      `Applied learning: ${focusAreas[1]}`,
      'Project-based outcomes and lab-intensive pedagogy.',
      'Industry-oriented assignments with regular faculty feedback.'
    ]
  },
  {
    id: 'vision-mission',
    title: 'Vision & Mission',
    route: routeSlug ? `/departments/${routeSlug}/vision-mission` : undefined,
    body: [
      'Vision',
      `To develop ${departmentName} graduates who solve real problems with confidence, ethics, and practical skill.`,
      'Mission',
      'Create a supportive academic environment that promotes technical excellence, innovation, and professional growth.'
    ],
    points: [
      `Build strong fundamentals in ${focusAreas[0].toLowerCase()}.`,
      `Encourage project work and lab practice in ${focusAreas[1].toLowerCase()}.`,
      'Support internships, certifications, and outcome-based learning.',
      'Promote ethical engineering, teamwork, and communication skills.'
    ]
  },
  {
    id: 'faculty',
    title: 'Faculty',
    route: routeSlug ? `/departments/${routeSlug}/faculty` : undefined,
    body: [
      'Faculty details will be updated with official department staff information.',
      'The department is committed to transparent publication of faculty qualifications, expertise areas, and mentoring roles.'
    ],
    table: [
      ['Name', 'Designation', 'Specialization'],
      ['TBA', 'Head of Department', focusAreas[0]],
      ['TBA', 'Assistant Professor', focusAreas[1]],
      ['TBA', 'Assistant Professor', 'Lab Coordination']
    ]
  },
  {
    id: 'lesson-plans',
    title: 'Lesson Plans',
    route: routeSlug ? `/departments/${routeSlug}/lesson-plans` : undefined,
    body: [
      'Unit-wise teaching plans, assignments, and lab schedules will be published each semester.',
      'Lesson plans are structured to maintain pace, improve outcomes, and ensure timely syllabus completion with practical exposure.'
    ],
    points: [
      'Week 1–2: Foundation lectures and orientation.',
      'Week 3–4: Lab exercises and tutorial sessions.',
      'Week 5+: Internal assessment and project discussions.',
      'End-term review: Revision, doubt sessions, and exam readiness support.'
    ]
  },
  {
    id: 'time-table',
    title: 'Time Table',
    route: routeSlug ? `/departments/${routeSlug}/time-table` : undefined,
    body: [
      'The official semester-wise timetable will be published once the department confirms slot allocations.',
      'Students should refer to the latest departmental notice for updates on room changes, lab batches, and additional tutorial slots.'
    ],
    schedule: [
      { day: 'Monday', slot: '09:30 AM - 10:30 AM', subject: `${departmentName} Theory` },
      { day: 'Wednesday', slot: '11:00 AM - 12:00 PM', subject: 'Tutorial / Mentoring' },
      { day: 'Friday', slot: '02:00 PM - 04:00 PM', subject: 'Lab / Practical' }
    ]
  }
];

export default createDepartmentDemoSections;
