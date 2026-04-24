import React from 'react';
import SubmenuTemplate from './SubmenuTemplate';
import { submenuData } from './submenuData';

const Hostels = () => <SubmenuTemplate {...submenuData['facilities/hostels']} />;

export default Hostels;
