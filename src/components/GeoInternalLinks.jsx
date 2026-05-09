import { Link } from 'react-router-dom';
import { GEO_INTERNAL_LINKS } from '../data/geoInternalLinks';
import './GeoInternalLinks.css';

/** Cross-links for emphasis markets + Poinciana home base (existing routes only). */
export default function GeoInternalLinks({ slug, title = 'Nearby areas we serve' }) {
  const links = GEO_INTERNAL_LINKS[slug];
  if (!links?.length) return null;

  return (
    <nav className="geo-internal-links" aria-label="Nearby service areas">
      <div className="geo-internal-links-inner">
        <div className="geo-internal-links-header">
          <span className="geo-internal-links-pin" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21.5C12 21.5 19 14.25 19 9.25C19 5.798 15.866 3 12 3C8.134 3 5 5.798 5 9.25C5 14.25 12 21.5 12 21.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9.5" r="2.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
            </svg>
          </span>
          <p className="geo-internal-links-title">{title}</p>
        </div>
        <ul className="geo-internal-links-grid">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className="geo-internal-links-card">
                <span className="geo-internal-links-card-label">{label}</span>
                <span className="geo-internal-links-card-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
