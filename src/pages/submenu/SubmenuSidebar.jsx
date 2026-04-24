import React from 'react';
import { Link } from 'react-router-dom';
import { quickLinks, sectionGuidance } from './submenuTemplateShared';

const SubmenuSidebar = ({ sectionLabel }) => (
  <aside className="submenu-aside">
    <div className="submenu-aside-card">
      <h3>Quick Links</h3>
      <div className="submenu-link-list">
        {(quickLinks[sectionLabel] || []).map((item) => (
          <Link key={item.label} to={item.to} className="submenu-inline-link">
            {item.label}
          </Link>
        ))}
      </div>
    </div>

    <div className="submenu-aside-card">
      <h3>For Students</h3>
      <ul className="submenu-mini-list">
        {(sectionGuidance[sectionLabel] || []).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

    <div className="submenu-aside-card subtle">
      <h3>Need updates?</h3>
      <p className="submenu-aside-text">
        Check the latest notifications and downloadable notices.
      </p>
      <Link to="/all-notices" className="submenu-aside-cta">
        Open Notices Board?
      </Link>
    </div>
  </aside>
);

export default SubmenuSidebar;
