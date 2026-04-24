import React, { useLayoutEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AboutInstitute from './AboutInstitute';
import VisionMission from './VisionMission';
import DirectorsMessage from './DirectorsMessage';
import QualityPolicy from './QualityPolicy';
import Affiliations from './Affiliations';
import AntiRagging from './AntiRagging';
import AcademicAntiRagging from './AcademicAntiRagging';
import History from './History';
import DepartmentEngineering from './DepartmentEngineering';
import DepartmentAiMl from './DepartmentAiMl';
import DepartmentCyberSecurity from './DepartmentCyberSecurity';
import DepartmentRobotics from './DepartmentRobotics';
import DepartmentComputerScience from './DepartmentComputerScience';
import DepartmentElectricalEngineering from './DepartmentElectricalEngineering';
import DepartmentElectronicsVlsi from './DepartmentElectronicsVlsi';
import CoursesOffered from './CoursesOffered';
import AcademicCalendar from './AcademicCalendar';
import TeachingLearning from './TeachingLearning';
import Curriculum from './Curriculum';
import ExamSchedule from './ExamSchedule';
import AcademicStudentTestimonials from './AcademicStudentTestimonials';
import Syllabus from './Syllabus';
import CodeOfConduct from './CodeOfConduct';
import AdmissionProspectus from './AdmissionProspectus';
import Infrastructure from './Infrastructure';
import Library from './Library';
import Hostels from './Hostels';
import Sports from './Sports';
import SmartClassrooms from './SmartClassrooms';
import Laboratories from './Laboratories';
import Cafeteria from './Cafeteria';
import Healthcare from './Healthcare';
import Security from './Security';
import CampusTraining from './CampusTraining';
import PlacementBrochure from './PlacementBrochure';
import PlacementRecords from './PlacementRecords';
import MajorRecruiters from './MajorRecruiters';
import PlacementProcess from './PlacementProcess';
import PlacementStudentTestimonials from './PlacementStudentTestimonials';
import AlumniDirectory from './AlumniDirectory';
import AlumniRegistration from './AlumniRegistration';
import AlumniEvents from './AlumniEvents';
import CampusLife from './CampusLife';
import PhotoGallery from './PhotoGallery';
import VideoGallery from './VideoGallery';
import EventsActivities from './EventsActivities';

const submenuComponents = {
  'about/history': History,
  'about/about-institute': AboutInstitute,
  'about/vision-mission': VisionMission,
  'about/directors-message': DirectorsMessage,
  'about/quality-policy': QualityPolicy,
  'about/affiliations': Affiliations,
  'about/anti-ragging': AntiRagging,
  'academics/anti-ragging': AcademicAntiRagging,
  'departments/engineering': DepartmentEngineering,
  'departments/cse': DepartmentComputerScience,
  'departments/ai-ml': DepartmentAiMl,
  'departments/cyber-security': DepartmentCyberSecurity,
  'departments/robotics': DepartmentRobotics,
  'departments/computer-science': DepartmentComputerScience,
  'departments/electrical-engineering': DepartmentElectricalEngineering,
  'departments/electronics-vlsi': DepartmentElectronicsVlsi,
  'academics/courses-offered': CoursesOffered,
  'academics/academic-calendar': AcademicCalendar,
  'academics/syllabus': Syllabus,
  'academics/teaching-learning': TeachingLearning,
  'academics/curriculum': Curriculum,
  'academics/admission-prospectus': AdmissionProspectus,
  'academics/exam-schedule': ExamSchedule,
  'academics/student-testimonials': AcademicStudentTestimonials,
  'academics/code-of-conduct': CodeOfConduct,
  'facilities/infrastructure': Infrastructure,
  'facilities/library': Library,
  'facilities/hostels': Hostels,
  'facilities/sports': Sports,
  'facilities/smart-classrooms': SmartClassrooms,
  'facilities/laboratories': Laboratories,
  'facilities/cafeteria': Cafeteria,
  'facilities/healthcare': Healthcare,
  'facilities/security': Security,
  'placements/campus-training': CampusTraining,
  'placements/placement-brochure': PlacementBrochure,
  'placements/placement-records': PlacementRecords,
  'placements/major-recruiters': MajorRecruiters,
  'placements/placement-process': PlacementProcess,
  'placements/student-testimonials': PlacementStudentTestimonials,
  'alumni/alumni-directory': AlumniDirectory,
  'alumni/alumni-registration': AlumniRegistration,
  'alumni/alumni-events': AlumniEvents,
  'life-at-siet/campus-life': CampusLife,
  'life-at-siet/photo-gallery': PhotoGallery,
  'life-at-siet/video-gallery': VideoGallery,
  'life-at-siet/events-activities': EventsActivities,
};

const SubmenuRouteHandler = () => {
  const location = useLocation();
  const [section, subSection] = location.pathname.split('/').filter(Boolean);

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
  }, [location.pathname]);

  const key = `${section}/${subSection}`;
  const Component = submenuComponents[key];

  if (!Component) {
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default SubmenuRouteHandler;
