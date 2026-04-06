import { Link } from 'react-router-dom';
import HeroReviews from './HeroReviews';
import { trackCTAClick, trackScheduleServiceClick } from '../utils/analytics';
import './Hero.css';

const HERO_IMAGE_BASE = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img
          src={`${HERO_IMAGE_BASE}?w=800&q=75`}
          srcSet={`${HERO_IMAGE_BASE}?w=800&q=75 800w, ${HERO_IMAGE_BASE}?w=1280&q=78 1280w, ${HERO_IMAGE_BASE}?w=1920&q=80 1920w`}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="hero-bg-img"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          Novation Heating and Air Conditioning:<br />
          <span>Service You Can Trust</span>
        </h1>
        <div className="hero-buttons">
          <Link to="/book-appointment" className="btn-primary" onClick={() => trackCTAClick('book_appointment', 'hero')}>
            Book Appointment
          </Link>
          <a
            href="#contact"
            className="btn-secondary schedule-service-btn"
            onClick={() => {
              trackScheduleServiceClick();
              // Phase 2: Replace with Vapi web call - see docs/IMPLEMENTATION_PLAN.md
            }}
            aria-label="Schedule service"
          >
            Schedule Service
          </a>
          <a href="#contact" className="btn-secondary" onClick={() => trackCTAClick('flexible_financing', 'hero')}>
            Flexible Financing
          </a>
        </div>
        <div className="hero-reviews-wrapper">
          <HeroReviews />
        </div>
      </div>
    </section>
  );
}
