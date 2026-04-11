const createDepartmentDemoSections = (departmentName, focusAreas, routeSlug) => [
  {
    id: 'about-department',
    title: 'About Department',
    route: routeSlug ? `/departments/${routeSlug}/about-department` : undefined,
    body: [
      `${departmentName} is shown here with demo content so the submenu layout can be tested before the official data is added.`,
      'Replace this block with the real department introduction, intake details, and departmental vision when ready.'
    ],
    points: [
      `Demo focus area 1: ${focusAreas[0]}`,
      `Demo focus area 2: ${focusAreas[1]}`,
      'Demo note: this section is reusable for every department page.'
    ]
  },
  {
    id: 'vision-mission',
    title: 'Vision & Mission',
    route: routeSlug ? `/departments/${routeSlug}/vision-mission` : undefined,
    body: [
      'Vision',
      `To develop ${departmentName} graduates who can solve real problems with confidence, ethics, and practical skill.`,
      'Mission'
    ],
    points: [
      `Build strong fundamentals in ${focusAreas[0].toLowerCase()}.`,
      `Encourage project work and lab practice in ${focusAreas[1].toLowerCase()}.`,
      'Support internships, certifications, and outcome-based learning.'
    ]
  },
  {
    id: 'faculty',
    title: 'Faculty',
    route: routeSlug ? `/departments/${routeSlug}/faculty` : undefined,
    body: [
      'Demo faculty data is shown below. Use this layout to plug in the official department staff list later.'
    ],
    table: [
      ['Name', 'Designation', 'Specialization'],
      ['Dr. Demo Faculty', 'Head of Department', focusAreas[0]],
      ['Prof. Demo Faculty', 'Assistant Professor', focusAreas[1]],
      ['Ms. Demo Faculty', 'Assistant Professor', 'Lab Coordination']
    ]
  },
  {
    id: 'lesson-plans',
    title: 'Lesson Plans',
    route: routeSlug ? `/departments/${routeSlug}/lesson-plans` : undefined,
    body: [
      'Demo lesson-plan cards are shown here as placeholders for the official weekly plan.',
      'Each card can later be replaced with unit-wise teaching notes, assignments, and lab schedule updates.'
    ],
    points: [
      'Week 1: foundation lectures and orientation.',
      'Week 2: lab exercise and tutorial session.',
      'Week 3: internal assessment and project discussion.'
    ]
  },
  {
    id: 'time-table',
    title: 'Time Table',
    route: routeSlug ? `/departments/${routeSlug}/time-table` : undefined,
    body: [
      'This demo timetable shows the expected layout for the final department schedule.',
      'Replace it with the official timetable when the department confirms semester-wise slots.'
    ],
    schedule: [
      { day: 'Monday', slot: '09:30 AM - 10:30 AM', subject: `${departmentName} Theory Demo` },
      { day: 'Wednesday', slot: '11:00 AM - 12:00 PM', subject: 'Tutorial / Mentoring Demo' },
      { day: 'Friday', slot: '02:00 PM - 04:00 PM', subject: 'Lab / Practical Demo' }
    ]
  }
];

export default createDepartmentDemoSections;
