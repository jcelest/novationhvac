import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/About.css';
import '../components/Contact.css';
import './ServicePage.css';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { jsonLdStringify } from '../utils/jsonLdScript';
import { SITE_URL } from '../utils/seoConstants';

const EMERGENCY_TITLE = '24/7 Emergency AC Repair Central Florida | Same-Day Service | Novation';
const EMERGENCY_DESC =
  'Emergency-first intent: no-cool AC repair after hours and nights—same-day when available across Central Florida. Not your primary install or Orlando metro page. Call (407) 973-1523.';
const EMERGENCY_CANONICAL = `${SITE_URL}/emergency-ac-repair`;

const faqs = [
  { q: 'How fast can you get to my home for emergency AC repair?', a: 'We prioritize emergency calls and typically respond same-day, often within hours. Call (407) 973-1523 for immediate assistance.' },
  { q: 'Do you charge extra for 24/7 or after-hours emergency AC repair?', a: 'We offer transparent pricing. Emergency service rates may apply for after-hours calls—we\'ll explain all costs before starting any work.' },
  { q: 'What areas do you serve for emergency AC repair?', a: 'We provide 24/7 emergency AC repair throughout Orlando, Kissimmee, Poinciana, Winter Haven, and all of Central Florida.' },
  { q: 'Can you repair my AC the same day?', a: 'Yes. We offer same-day emergency AC repair. Many repairs are completed in one visit. Call (407) 973-1523 now.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function EmergencyACPage() {
  return (
    <>
      <Helmet>
        <title>{EMERGENCY_TITLE}</title>
        <meta name="description" content={EMERGENCY_DESC} />
        <link rel="canonical" href={EMERGENCY_CANONICAL} />
        {renderSeoOgTags({ url: EMERGENCY_CANONICAL, title: EMERGENCY_TITLE, description: EMERGENCY_DESC })}
        <script type="application/ld+json">{jsonLdStringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main className="service-page">
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(192, 57, 43, 0.92) 0%, rgba(211, 84, 0, 0.9) 50%, rgba(230, 126, 34, 0.88) 100%), url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <span className="emergency-badge">24/7 EMERGENCY</span>
            <h1 className="hero-title">24/7 Emergency AC Repair — No-Cool Response</h1>
            <p className="hero-tagline">After-hours breakdowns first—not scheduled installs. Same-day when available across Central Florida.</p>
            <div className="hero-buttons">
              <a href="tel:4079731523" className="btn-primary btn-call-now">Call Now: (407) 973-1523</a>
              <a href="#contact" className="btn-secondary">Request Service</a>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <div className="service-section-inner">
              <div className="service-section-content">
                <h2>24-Hour Emergency AC Repair — We're Here When You Need Us</h2>
                <p>When your AC stops working in the Florida heat, you need help fast. Novation Heating and Cooling provides 24/7 emergency AC repair throughout Orlando, Kissimmee, Poinciana, Winter Haven, and all of Central Florida. Our licensed technicians respond quickly to get your cooling back on.</p>
                <p>Whether it's a compressor failure, refrigerant leak, or a system that won't turn on—we diagnose and repair same-day when possible. No AC in the middle of the night? Call us. Weekend breakdown? We're available. Licensed (CAC1823924), bonded, and insured for your peace of mind.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <div className="service-section-inner">
              <div className="service-section-content">
                <h2>Same-Day Emergency HVAC Service</h2>
                <p>We prioritize emergency calls. When you contact us for 24-hour AC repair, our team works to get a technician to your home as quickly as possible. Many repairs are completed in a single visit—no waiting days for parts or follow-up appointments when we can fix it on the spot.</p>
                <p>Serving Orlando, Kissimmee, Poinciana, St. Cloud, Celebration, Winter Park, Oviedo, and all of Central Florida. Same-day emergency AC repair and 24/7 HVAC service. Call <strong>(407) 973-1523</strong> now.</p>
                <Link to="/book-appointment" className="btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Book Appointment</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="service-faq">
          <div className="container about-inner">
            <h2>Emergency AC Repair — Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
