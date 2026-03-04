import { Link } from 'react-router-dom';
import HeroReviews from './HeroReviews';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          Novation Heating and Air Conditioning:<br />
          <span>Service You Can Trust</span>
        </h1>
        <p className="hero-tagline">
          Orlando, Kissimmee, Poinciana & Central Florida HVAC Experts
        </p>
        <div className="hero-buttons">
          <Link to="/book-appointment" className="btn-primary">Book Appointment</Link>
          <a href="#contact" className="btn-secondary">Flexible Financing</a>
        </div>
        <div className="hero-reviews-wrapper">
          <HeroReviews />
        </div>
      </div>
    </section>
  );
}
