import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

const searchableLinks = [
  { label: 'History', href: '/about/history' },
  { label: 'About Institute', href: '/about/about-institute' },
  { label: 'Vision & Mission', href: '/about/vision-mission' },
  { label: "Director Principal's Desk", href: '/about/directors-message' },
  { label: 'Academic Calendar', href: '/academics/academic-calendar' },
  { label: 'Syllabus', href: '/academics/syllabus' },
  { label: 'Admission Form', href: '/admission-form' },
  { label: 'Admission Prospectus', href: '/academics/admission-prospectus' },
  { label: 'Exam Schedule', href: '/academics/exam-schedule' },
  { label: 'Code of Conduct', href: '/academics/code-of-conduct' },
  { label: 'Anti-Ragging', href: '/academics/anti-ragging' },
  { label: 'Grievance Portal', href: 'https://grievance.sietpanchkula.ac.in/', external: true },
  { label: 'Unnat Bharat Abhiyan', href: 'https://unnatbharatabhiyan.gov.in/', external: true },
];

const Search = () => {
  const query = useQuery();
  const q = (query.get('q') || '').trim();

  const results = useMemo(() => {
    if (!q) return [];
    const needle = q.toLowerCase();
    return searchableLinks.filter((item) => item.label.toLowerCase().includes(needle));
  }, [q]);

  return (
    <div className="section">
      <div className="container">
        <div className="content-block">
          <h2>Search</h2>
          <p className="lead-text">
            Results for <strong>{q || '…'}</strong>
          </p>

          {q && results.length === 0 ? <p>No results found.</p> : null}

          {results.length > 0 ? (
            <ul className="submenu-resource-list">
              {results.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="submenu-resource-link">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="submenu-resource-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;

