import meritListDoc from '../assets/new-assets/notifications/12th-merit-list.pdf';
import aicteQualificationsDoc from '../assets/new-assets/notifications/AICTE-Degree-Pay-Qualifications-and-Promotions.pdf';
import applicationPklDoc from '../assets/new-assets/notifications/Application-PKL.pdf';
import leetSyllabusDoc from '../assets/new-assets/notifications/B.Tech-LEET-Syllabus-2025-26-07.05.2025.pdf';
import btechLeetDoc from '../assets/new-assets/notifications/B.Tech_LEET.pdf';
import btechProspectusDoc from '../assets/new-assets/notifications/BTech-Prospectus-2025-26-1.pdf';
import leetKeyDatesDoc from '../assets/new-assets/notifications/BTechLE-KeyDates-2025.pdf';
import admissionDocsDoc from '../assets/new-assets/notifications/Doc_B.techAdmission2025.pdf';
import admissionDocsAltDoc from '../assets/new-assets/notifications/Doc_B.techAdmission2025-1.pdf';
import feeStructureDoc from '../assets/new-assets/notifications/Fee_Structure_b.tech_2025.pdf';
import guestFacultyGuidelinesDoc from '../assets/new-assets/notifications/Guidelines-for-engagement-of-Guest-Faculty-Instructors-dated-22.12.2022.pdf';
import iitRoparDoc from '../assets/new-assets/notifications/IITROPAR.pdf';
import jeeListDoc from '../assets/new-assets/notifications/jee-list.pdf';
import ptmNoticeDoc from '../assets/new-assets/notifications/Notice-PTM.pdf';
import martyrdomQuizDoc from '../assets/new-assets/notifications/Quiz-Competition-on-Martyrdom-Day.pdf';
import academicCalendarDoc from '../assets/new-assets/notifications/Schedule-of-Academic-Calendar-for-Engg.-Affiliated-Colleges-for-the-Session-2025-26.pdf';
import trainingPolicyDoc from '../assets/new-assets/notifications/training-policy.pdf';

export const noticesBoardData = [
  {
    id: 1,
    title: 'B.Tech Prospectus 2025-26',
    category: 'Admission',
    date: '05 May 2025',
    priority: 'High',
    details: 'Prospectus with program details, eligibility, counseling process, and admission instructions.',
    downloadUrl: btechProspectusDoc,
    readMoreUrl: btechProspectusDoc
  },
  {
    id: 2,
    title: 'Application Form (PKL)',
    category: 'Admission',
    date: '08 Aug 2025',
    priority: 'High',
    details: 'Official application document for SIET admissions at Panchkula campus.',
    downloadUrl: applicationPklDoc,
    readMoreUrl: applicationPklDoc
  },
  {
    id: 3,
    title: 'B.Tech LEET Syllabus 2025-26',
    category: 'Academic',
    date: '07 May 2025',
    priority: 'Medium',
    details: 'Detailed LEET syllabus for engineering programs for session 2025-26.',
    downloadUrl: leetSyllabusDoc,
    readMoreUrl: leetSyllabusDoc
  },
  {
    id: 4,
    title: 'Academic Calendar 2025-26',
    category: 'Academic',
    date: 'Jan 2026',
    priority: 'High',
    details: 'Session schedule and key academic milestones for affiliated engineering colleges.',
    downloadUrl: academicCalendarDoc,
    readMoreUrl: academicCalendarDoc
  },
  {
    id: 5,
    title: 'Fee Structure B.Tech 2025',
    category: 'Fee',
    date: 'Jul 2025',
    priority: 'Medium',
    details: 'Updated tuition and fee structure for B.Tech programs.',
    downloadUrl: feeStructureDoc,
    readMoreUrl: feeStructureDoc
  },
  {
    id: 6,
    title: '12th Merit List',
    category: 'Admission',
    date: 'Aug 2025',
    priority: 'Medium',
    details: 'Merit list for 12th based admissions for the current cycle.',
    downloadUrl: meritListDoc,
    readMoreUrl: meritListDoc
  },
  {
    id: 7,
    title: 'JEE Merit/Selection List',
    category: 'Admission',
    date: 'Aug 2025',
    priority: 'Medium',
    details: 'JEE based merit/selection list released for shortlisted candidates.',
    downloadUrl: jeeListDoc,
    readMoreUrl: jeeListDoc
  },
  {
    id: 8,
    title: 'Notice PTM',
    category: 'Notice',
    date: 'Mar 2026',
    priority: 'Low',
    details: 'Parent-Teacher Meeting notice and related instructions.',
    downloadUrl: ptmNoticeDoc,
    readMoreUrl: ptmNoticeDoc
  },
  {
    id: 9,
    title: 'Quiz Competition on Martyrdom Day',
    category: 'Event',
    date: 'Mar 2026',
    priority: 'Low',
    details: 'Event notice for quiz competition conducted on Martyrdom Day.',
    downloadUrl: martyrdomQuizDoc,
    readMoreUrl: martyrdomQuizDoc
  },
  {
    id: 10,
    title: 'IIT Ropar Workshop Notice',
    category: 'Event',
    date: 'Feb 2026',
    priority: 'Low',
    details: 'Workshop or collaboration-related notice/document from IIT Ropar.',
    downloadUrl: iitRoparDoc,
    readMoreUrl: iitRoparDoc
  },
  {
    id: 11,
    title: 'Training Policy',
    category: 'Policy',
    date: 'Mar 2025',
    priority: 'Low',
    details: 'Training policy document for student skill development and placement readiness.',
    downloadUrl: trainingPolicyDoc,
    readMoreUrl: trainingPolicyDoc
  },
  {
    id: 12,
    title: 'AICTE Degree Pay Qualifications and Promotions',
    category: 'Regulation',
    date: 'Aug 2025',
    priority: 'Low',
    details: 'Reference document for faculty qualification norms and promotion regulations.',
    downloadUrl: aicteQualificationsDoc,
    readMoreUrl: aicteQualificationsDoc
  },
  {
    id: 13,
    title: 'Guest Faculty Engagement Guidelines',
    category: 'Guideline',
    date: '22 Dec 2022',
    priority: 'Low',
    details: 'Guidelines for engagement of guest faculty instructors.',
    downloadUrl: guestFacultyGuidelinesDoc,
    readMoreUrl: guestFacultyGuidelinesDoc
  },
  {
    id: 14,
    title: 'B.Tech LEET Information',
    category: 'Admission',
    date: 'Aug 2025',
    priority: 'Medium',
    details: 'LEET admission information and process reference document.',
    downloadUrl: btechLeetDoc,
    readMoreUrl: btechLeetDoc
  },
  {
    id: 15,
    title: 'B.Tech LEET Key Dates 2025',
    category: 'Admission',
    date: 'Jun 2025',
    priority: 'High',
    details: 'Important LEET admission timeline and deadlines.',
    downloadUrl: leetKeyDatesDoc,
    readMoreUrl: leetKeyDatesDoc
  },
  {
    id: 16,
    title: 'B.Tech Admission Document Set',
    category: 'Admission',
    date: 'Jul 2025',
    priority: 'Medium',
    details: 'Primary admission documentation checklist and supporting formats.',
    downloadUrl: admissionDocsDoc,
    readMoreUrl: admissionDocsDoc
  },
  {
    id: 17,
    title: 'B.Tech Admission Document Set (Revised)',
    category: 'Admission',
    date: 'Jul 2025',
    priority: 'Medium',
    details: 'Alternate/revised version of admission documentation requirements.',
    downloadUrl: admissionDocsAltDoc,
    readMoreUrl: admissionDocsAltDoc
  }
];

export const topAnnouncementsData = [
  'B.Tech Prospectus 2025-26 available for download',
  'B.Tech LEET key dates announced for 2025 admissions',
  'Academic Calendar 2025-26 published for affiliated colleges',
  'Fee Structure for B.Tech 2025 updated',
  'Notice PTM and event notices now available'
];

export const noticesStripData = [
  {
    id: 1,
    text: 'B.Tech Prospectus 2025-26 released',
    type: 'important',
    icon: 'AD'
  },
  {
    id: 2,
    text: 'B.Tech LEET key dates announced',
    type: 'deadline',
    icon: 'DL'
  },
  {
    id: 3,
    text: 'Academic Calendar 2025-26 published',
    type: 'result',
    icon: 'AC'
  },
  {
    id: 4,
    text: 'IIT Ropar workshop notice uploaded',
    type: 'event',
    icon: 'EV'
  },
  {
    id: 5,
    text: 'Training policy and admission docs updated',
    type: 'placement',
    icon: 'NT'
  }
];