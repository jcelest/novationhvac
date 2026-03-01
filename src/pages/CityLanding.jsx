import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/Services.css';
import '../components/About.css';
import '../components/Specials.css';
import '../components/Contact.css';
import './CityLanding.css';

const specials = [
  { offer: '$49', title: 'Heating or AC Tune-Up', terms: 'Valid year-round. Schedule your maintenance today.' },
  { offer: '$100 OFF', title: 'New AC System Installation', terms: 'Terms apply. Ask for details.' },
  { offer: '0% APR', title: 'Flexible Financing Available', terms: 'Qualified customers. Apply today.' },
];

export default function CityLanding({ cityData }) {
  const { name, metaTitle, metaDescription, heroTitle, heroTagline, aboutTitle, aboutSubtitle, aboutPara1, aboutPara2, serviceIntro, seoContent } = cityData;

  return (
    <div className="city-landing">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Header />
      <div className="city-banner">
        <span>HVAC Services in {name} — Same-Day & 24/7 Emergency</span>
      </div>
      <main>
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <span className="city-badge">Serving {name}</span>
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-tagline">{heroTagline}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Book Appointment</a>
              <a href="#contact" className="btn-secondary">Flexible Financing</a>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="services-header">
              <span className="section-label">Trusted Services in {name}</span>
              <h2>HVAC & Cooling Services in {name}</h2>
              <p>{serviceIntro}</p>
              <a href="#contact" className="btn-book">Book Your Appointment</a>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon">❄️</div>
                <h3>Cooling Repair {name}</h3>
                <p>AC repair, installation, and maintenance for all cooling systems. Stay cool year-round with expert cooling service in {name}.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">🔥</div>
                <h3>Heating & Furnace Repair {name}</h3>
                <p>Furnace repair, heat pump services, and heating installation. Reliable warmth when you need it most.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">💨</div>
                <h3>Indoor Air Quality</h3>
                <p>Air purification, humidity control, and duct cleaning for healthier air in your {name} home.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">🔧</div>
                <h3>HVAC Maintenance Plans</h3>
                <p>Preventive maintenance to extend the life of your HVAC system. Schedule AC tune-ups and heating maintenance.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-inner">
            <div className="about-content">
              <h2>{aboutTitle}</h2>
              <h3>{aboutSubtitle}</h3>
              <p>{aboutPara1}</p>
              <p>{aboutPara2}</p>
              <a href="#contact" className="about-cta">
                <strong>We're Here When You Need Us</strong>
                <em>Same-Day Service & 24/7 Emergency Support in {name}</em>
                <span>Whether it's a routine tune-up or an urgent AC repair, our expert technicians are ready to help — any time, any day.</span>
                <span className="cta-link">Request Service Now →</span>
              </a>
            </div>
          </div>
        </section>

        {seoContent && (
          <section id="seo-content" className="about">
            <div className="container about-inner">
              <div className="about-content">
                <h2>{seoContent.h2}</h2>
                {seoContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {seoContent.faqs && (
                  <div className="seo-faqs">
                    <h3>Frequently Asked Questions</h3>
                    {seoContent.faqs.map((faq, i) => (
                      <div key={i} className="faq-item">
                        <h4>{faq.q}</h4>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        <section id="specials" className="specials">
          <div className="container">
            <h2>Don't Miss Out on These Savings!</h2>
            <div className="specials-grid">
              {specials.map((special, i) => (
                <article key={i} className="special-card">
                  <div className="special-offer">{special.offer}</div>
                  <h3>{special.title}</h3>
                  <p>{special.terms}</p>
                  <a href="#contact">Get This Deal</a>
                </article>
              ))}
            </div>
            <a href="#contact" className="specials-all">View All Specials</a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
