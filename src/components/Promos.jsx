import './Promos.css';

function PromoImg({ webp, png, alt, width = 348, height = 260 }) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={png}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

export default function Promos() {
  return (
    <section id="promos" className="promos">
      <div className="container promo-grid">
        <a href="#contact" className="promo-card">
          <PromoImg
            webp="/images/emergency-hvac.webp"
            png="/images/emergency-hvac.png"
            alt="24/7 Emergency HVAC Services - AC trouble at midnight? We're on call around the clock to restore your comfort."
          />
        </a>
        <a href="#contact" className="promo-card">
          <PromoImg
            webp="/images/maintenance-tuneup.webp"
            png="/images/maintenance-tuneup.png"
            alt="Regular maintenance prevents costly repairs. Schedule your tune-up now."
          />
        </a>
        <a href="#contact" className="promo-card">
          <PromoImg
            webp="/images/maintenance-plan.webp"
            png="/images/maintenance-plan.png"
            alt="A/C & Heating System Maintenance Plan - $79 per visit, $159 annual plan. Call 407-973-1523 to sign up."
          />
        </a>
      </div>
    </section>
  );
}
