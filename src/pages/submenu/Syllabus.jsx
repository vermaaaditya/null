import React from 'react';
import SubmenuWithPdfDropdown from './SubmenuWithPdfDropdown';
import { submenuData } from './submenuData';

const Syllabus = () => <SubmenuWithPdfDropdown {...submenuData['academics/syllabus']} />;

export default Syllabus;

