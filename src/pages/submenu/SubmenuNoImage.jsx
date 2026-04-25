import React from 'react';
import SubmenuBodyProse from './SubmenuBodyProse';

const SubmenuNoImage = ({
  title,
  points = [],
  body = [],
  resources = [],
}) => {
  return (
    <div className="submenu-page">
      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-layout">
            <main className="submenu-main">
              <div className="submenu-content-card">
                <h2 className="submenu-section-title">{title}</h2>
                <div className="submenu-prose">
                  <SubmenuBodyProse body={body} resources={resources} points={points} />
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuNoImage;
