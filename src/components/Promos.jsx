import './Promos.css';

function PromoImg({ webp, png, alt, width = 348, height = 260 }) {
  if (webp) {
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
  return (
    <img
      src={png}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
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
        <a href="#contact" className="promo-card promo-card--img-cover">
          <PromoImg
            webp="/images/novation-team-event.webp"
            png="/images/novation-team-event.png"
            alt="Novation Heating & Air Conditioning team at a community event — your comfort is our mission."
          />
        </a>
        <a href="#contact" className="promo-card promo-card--img-cover">
          <PromoImg
            webp="/images/ac-heating-maintenance-plan.webp"
            png="/images/ac-heating-maintenance-plan.png"
            alt="Professional HVAC technician performing maintenance on an outdoor AC unit — A/C & heating system maintenance plan."
          />
        </a>
      </div>
    </section>
  );
}
