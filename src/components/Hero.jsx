import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1 className="hero-title">
          Comfort You Can Count On,<br />
          <span>Service You Can Trust</span>
        </h1>
        <p className="hero-tagline">
          Your Trusted Experts for Heating and Cooling
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Book Appointment</a>
          <a href="#contact" className="btn-secondary">Flexible Financing</a>
        </div>
      </div>
    </section>
  );
}
