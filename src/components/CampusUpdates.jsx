import React from 'react';
import ScrollReveal from './ScrollReveal';

const updates = [
  {
    title: 'National Workshop on AI Applications',
    date: '03 Apr 2026',
    detail: 'Two-day workshop with research scholars and industry experts from partner organizations.'
  },
  {
    title: 'Industry Visit: Smart Manufacturing Unit',
    date: '11 Apr 2026',
    detail: 'Second-year students will visit an automation-enabled facility to study robotics workflows.'
  },
  {
    title: 'Sports and Wellness Week',
    date: '18 Apr 2026',
    detail: 'Campus-wide activities including athletics, indoor games, and fitness challenges.'
  },
  {
    title: 'Campus Innovation Expo',
    date: '26 Apr 2026',
    detail: 'Student teams will showcase prototypes from AI, IoT, and robotics capstone projects.'
  }
];

const CampusUpdates = () => {
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
                <p>{item.detail}</p>
                <a href="#notices" className="campus-update-link">Read Details</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default CampusUpdates;
