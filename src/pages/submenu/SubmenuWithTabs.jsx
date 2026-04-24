import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSectionHome } from './submenuTemplateShared';
import SubmenuBodyProse from './SubmenuBodyProse';

const SubmenuWithTabs = ({
  sectionLabel,
  title,
  subtitle,
  image,
  imageMode,
  tabs = [],
  body = [],
  points = [],
  resources = [],
  showHeroImage = true,
}) => {
  const sectionHome = getSectionHome(sectionLabel);
  const resolvedTabs = useMemo(() => (tabs.length > 0 ? tabs : []), [tabs]);
  const [activeKey, setActiveKey] = useState(resolvedTabs[0]?.key || '');

  const activeTab = resolvedTabs.find((tab) => tab.key === activeKey) || resolvedTabs[0];

  return (
    <div className="submenu-page">
      <section className="section submenu-hero">
        <div className="container">
          <div className="submenu-hero-surface">
            <div className="submenu-hero-grid">
              <div className="submenu-hero-copy">
                <p className="submenu-kicker">{sectionLabel}</p>
                <h1 className="submenu-title">{title}</h1>
                {subtitle ? <p className="submenu-subtitle">{subtitle}</p> : null}
                <div className="submenu-hero-actions">
                  <Link to={sectionHome.to} className="submenu-action-btn secondary">Back</Link>
                </div>
              </div>

              {showHeroImage && image ? (
                <div className="submenu-hero-visual" aria-hidden="true">
                  <div className="submenu-hero-image-wrap">
                    <img
                      src={image}
                      alt=""
                      className={`submenu-hero-image ${imageMode === 'portrait' ? 'portrait' : ''}`}
                      loading="eager"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section submenu-content-section">
        <div className="container">
          <div className="submenu-layout">
            <main className="submenu-main">
              <div className="submenu-content-card">
                <h2 className="submenu-section-title">Overview</h2>
                {resolvedTabs.length > 0 ? (
                  <>
                    <div className="submenu-tabs" role="tablist" aria-label={`${title} content tabs`}>
                      {resolvedTabs.map((tab) => {
                        const selected = tab.key === activeTab?.key;
                        return (
                          <button
                            key={tab.key}
                            type="button"
                            className={`submenu-tab-btn ${selected ? 'active' : ''}`}
                            role="tab"
                            aria-selected={selected}
                            onClick={() => setActiveKey(tab.key)}
                          >
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>
                    <div className="submenu-prose" role="tabpanel">
                      <SubmenuBodyProse
                        body={activeTab?.body || []}
                        resources={activeTab?.resources || []}
                        points={activeTab?.points || []}
                      />
                    </div>
                  </>
                ) : (
                  <div className="submenu-prose">
                    <SubmenuBodyProse body={body} resources={resources} points={points} />
                  </div>
                )}
              </div>
            </main>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmenuWithTabs;
