import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Promos from '../components/Promos';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { CoolingIcon, HeatingIcon, IAQIcon, MaintenanceIcon } from '../components/ServiceIcons';
import '../components/Hero.css';
import '../components/Services.css';
import '../components/About.css';
import '../components/Specials.css';
import '../components/Contact.css';
import './CityLanding.css';

const BASE_URL = 'https://novationhvac.com';

export default function NeighborhoodLanding({ neighborhoodData }) {
  const { name, slug, parentCity, parentCitySlug, metaTitle, metaDescription, heroTitle, heroTagline, aboutTitle, aboutSubtitle, aboutPara1, aboutPara2, serviceIntro, seoContent } = neighborhoodData;
  const canonicalUrl = `${BASE_URL}/${slug}`;

  const faqSchema = seoContent?.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seoContent.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  } : null;

  return (
    <div className="city-landing">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
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
            <span className="city-badge">
              <Link to={`/${parentCitySlug}`} className="breadcrumb-link">{parentCity}</Link>
              {' '}→ {name}
            </span>
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-tagline">{heroTagline}</p>
            <div className="hero-buttons">
              <Link to="/book-appointment" className="btn-primary">Book Appointment</Link>
              <a href="#contact" className="btn-secondary">Flexible Financing</a>
            </div>
          </div>
        </section>

        <Promos />

        <section id="services" className="services">
          <div className="container">
            <div className="services-header">
              <span className="section-label">Trusted Services in {name}</span>
              <h2>HVAC & Cooling Services in {name}</h2>
              <p>{serviceIntro}</p>
              <Link to="/book-appointment" className="btn-book">Book Your Appointment</Link>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon"><CoolingIcon /></div>
                <h3>Cooling Repair {name}</h3>
                <p>AC repair, installation, and maintenance for all cooling systems. Stay cool year-round with expert cooling service in {name}.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><HeatingIcon /></div>
                <h3>Heating & Furnace Repair {name}</h3>
                <p>Furnace repair, heat pump services, and heating installation. Reliable warmth when you need it most.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><IAQIcon /></div>
                <h3>Indoor Air Quality</h3>
                <p>Air purification, humidity control, and duct cleaning for healthier air in your {name} home.</p>
              </article>
              <article className="service-card">
                <div className="service-icon"><MaintenanceIcon /></div>
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
              <p className="parent-link">
                <Link to={`/${parentCitySlug}`}>← View all HVAC services in {parentCity}</Link>
              </p>
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

        <section id="specials" className="specials specials-veterans">
          <div className="container">
            <h2>Military & Veteran Savings</h2>
            <article className="special-card special-card-veterans">
              <div className="veterans-badge">
                <span className="veterans-star">★</span>
                <span className="veterans-offer">10% OFF</span>
                <span className="veterans-star">★</span>
              </div>
              <h3>For Veterans & Active Military</h3>
              <p>Thank you for your service. Novation Heating and Cooling proudly offers 10% off HVAC services to veterans and active military in {name}. Valid on repairs, installations, and maintenance.</p>
              <a href="#contact">Claim Your Discount</a>
            </article>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
