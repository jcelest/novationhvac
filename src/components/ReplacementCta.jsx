import { Link } from 'react-router-dom';
import { trackReplacementCtaClick } from '../utils/analytics';
import './ReplacementCta.css';

export default function ReplacementCta({ location = 'page' }) {
  return (
    <aside className="replacement-cta" aria-label="AC replacement estimate">
      <p className="replacement-cta-title">Considering a new AC system?</p>
      <p className="replacement-cta-text">
        Compare repair and replacement options with a free residential estimate.
      </p>
      <Link
        to="/ac-installation-replacement#estimate"
        className="replacement-cta-link"
        onClick={() => trackReplacementCtaClick(location)}
      >
        Explore AC Replacement Options
      </Link>
    </aside>
  );
}
