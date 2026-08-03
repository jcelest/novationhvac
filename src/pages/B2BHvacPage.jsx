import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { jsonLdStringify } from '../utils/jsonLdScript';
import { SITE_URL } from '../utils/seoConstants';
import {
  B2B_SLUG,
  b2bHvacMeta,
  b2bAudiences,
  b2bServices,
  b2bFaqs,
} from '../data/b2bHvacData';
import '../components/Hero.css';
import '../components/About.css';
import '../components/Contact.css';
import './ServicePage.css';
import './B2BHvacPage.css';

const CANONICAL = `${SITE_URL}/${B2B_SLUG}`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: b2bFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: b2bHvacMeta.title,
  description: b2bHvacMeta.description,
  isPartOf: { '@id': `${SITE_URL}/#business` },
  about: {
    '@type': 'Service',
    name: 'B2B HVAC Contractor Partnerships',
    areaServed: 'Central Florida',
    provider: { '@id': `${SITE_URL}/#business` },
  },
};

export default function B2BHvacPage() {
  return (
    <>
      <Helmet>
        <title>{b2bHvacMeta.title}</title>
        <meta name="description" content={b2bHvacMeta.description} />
        <link rel="canonical" href={CANONICAL} />
        {renderSeoOgTags({
          url: CANONICAL,
          title: b2bHvacMeta.title,
          description: b2bHvacMeta.description,
        })}
        <script type="application/ld+json">{jsonLdStringify(webPageSchema)}</script>
        <script type="application/ld+json">{jsonLdStringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main className="service-page">
        <section className="hero hero-compact">
          <div
            className="hero-bg"
            style={{
              background:
                'linear-gradient(135deg, rgba(26, 82, 118, 0.93) 0%, rgba(41, 128, 185, 0.9) 55%, rgba(52, 152, 219, 0.88) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80) center/cover no-repeat',
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <span className="b2b-badge">B2B HVAC PARTNER</span>
            <h1 className="hero-title">HVAC Contractor B2B Partnerships in Central Florida</h1>
            <p className="hero-tagline">
              Property managers, builders, HOAs, and investors—multi-property HVAC maintenance, turnover installs, and
              24/7 emergency dispatch from a licensed Florida contractor.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                Request B2B Consultation
              </a>
              <a href="tel:4079731523" className="btn-secondary">
                (407) 973-1523
              </a>
            </div>
          </div>
        </section>

        <section className="b2b-audience-section">
          <div className="container">
            <h2>Who We Partner With</h2>
            <p className="b2b-audience-intro">
              Novation is built for B2B HVAC leads across Orlando, Kissimmee, Poinciana, Winter Haven, Lakeland, and
              the counties we run every week—not one-off residential calls with no account structure.
            </p>
            <div className="b2b-audience-grid">
              {b2bAudiences.map((item) => (
                <article key={item.title} className="b2b-audience-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {b2bServices.map((section) => (
          <section key={section.title} className="service-section">
            <div className="container">
              <div className="service-section-inner">
                <div className="service-section-content">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="b2b-cta-strip">
          <div className="container">
            <h2>Ready to Send B2B HVAC Leads Our Way?</h2>
            <p>
              Share portfolio size, cities, and service mix—maintenance agreements, turnover cap-ex, or emergency-only.
              We respond with scope, pricing approach, and onboarding steps. License CAC1823924 · Poinciana-based
              dispatch.
            </p>
            <div className="hero-buttons">
              <a href="mailto:info@novationhvac.com" className="btn-primary">
                Email info@novationhvac.com
              </a>
              <Link to="/service-areas" className="btn-secondary">
                View service areas
              </Link>
            </div>
          </div>
        </section>

        <section className="service-faq">
          <div className="container about-inner">
            <h2>B2B HVAC Contractor — Frequently Asked Questions</h2>
            {b2bFaqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact variant="b2b" />
      </main>
      <Footer />
    </>
  );
}
