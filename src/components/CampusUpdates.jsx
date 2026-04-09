import React from 'react';
import ScrollReveal from './ScrollReveal';
import { campusUpdatesData } from '../data/noticesData';

const CampusUpdates = () => {
  const updates = campusUpdatesData;

  if (!updates || updates.length === 0) {
    return null;
  }

  return (
    <ScrollReveal>
      <section className="campus-updates section" id="campus-updates">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Campus Updates</h2>
            <div className="title-underline"></div>
          </div>

          <div className="campus-updates-grid">
            {updates.map((item) => (
              <article key={item.title} className="campus-update-card">
                <p className="campus-update-date">{item.date}</p>
                <h3>{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="campus-update-link">Read Details</a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default CampusUpdates;
