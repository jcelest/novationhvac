import { Link } from 'react-router-dom';
import { GEO_INTERNAL_LINKS } from '../data/geoInternalLinks';
import './GeoInternalLinks.css';

/** Cross-links for emphasis markets + Poinciana home base (existing routes only). */
export default function GeoInternalLinks({ slug, title = 'Nearby areas we serve' }) {
  const links = GEO_INTERNAL_LINKS[slug];
  if (!links?.length) return null;

  return (
    <nav className="geo-internal-links" aria-label="Nearby service areas">
      <p className="geo-internal-links-title">{title}</p>
      <ul>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
