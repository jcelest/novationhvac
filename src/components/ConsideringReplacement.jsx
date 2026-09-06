import { Link } from 'react-router-dom';
import { ReplacementIcon } from './ServiceIcons';
import { trackReplacementCtaClick } from '../utils/analytics';
import './ConsideringReplacement.css';

export default function ConsideringReplacement() {
  return (
    <section className="considering-replacement" aria-labelledby="considering-replacement-title">
      <div className="container considering-replacement-inner">
        <div className="considering-replacement-icon" aria-hidden="true">
          <ReplacementIcon />
        </div>
        <div>
          <h2 id="considering-replacement-title">Considering a New AC System?</h2>
          <p>
            If your current system needs another major repair, struggles with humidity or can no
            longer keep up with Central Florida heat, compare repair and replacement options before
            making a decision.
          </p>
          <Link
            to="/ac-installation-replacement"
            className="btn-book considering-replacement-cta"
            onClick={() => trackReplacementCtaClick('homepage')}
          >
            Explore AC Replacement Options
          </Link>
        </div>
      </div>
    </section>
  );
}
