import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { SITE_URL } from '../utils/seoConstants';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { serviceAreas } from '../data/serviceAreasData';
import { EMPHASIS_SERVICE_SLUGS, EMPHASIS_SERVICE_AREAS } from '../data/emphasisServiceAreas';
import '../components/Hero.css';
import '../components/Contact.css';
import './ServiceAreasPage.css';

const EMPHASIS_SLUG_SET = new Set(EMPHASIS_SERVICE_SLUGS);
const secondaryServiceAreas = serviceAreas.filter((a) => !EMPHASIS_SLUG_SET.has(a.slug));

const SA_TITLE = 'Central Florida HVAC Service Areas & City Pages | Novation';
const SA_DESC =
  'Browse where Novation dispatches: Poinciana home base, emphasis markets (Orlando, Winter Haven, Lakeland), counties, and neighborhood pages—not a substitute for city/service detail pages.';
const SA_URL = `${SITE_URL}/service-areas`;

export default function ServiceAreasPage() {
  return (
    <>
      <Helmet>
        <title>{SA_TITLE}</title>
        <meta name="description" content={SA_DESC} />
        <link rel="canonical" href={SA_URL} />
        {renderSeoOgTags({ url: SA_URL, title: SA_TITLE, description: SA_DESC })}
      </Helmet>
      <Header />
      <main className="service-areas-page">
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">Areas we serve</h1>
            <p className="hero-tagline">Poinciana home base — serving Orlando, Winter Haven, Lakeland & all of Central Florida</p>
            <div className="hero-buttons">
              <Link to="/book-appointment" className="btn-primary">Book Appointment</Link>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        <section className="service-areas-intro">
          <div className="container">
            <h2>Where we serve</h2>
            <p className="service-areas-lead">
              This hub lists cities and neighborhood pages—use it to find the right URL. City and service pages carry
              the detailed repair vs install angles; this index stays the map, not a duplicate Orlando or Polk landing.
              Based in Poinciana; we dispatch across Orlando, Winter Haven, Lakeland, and the broader region. No walk-in
              public office—mobile service only.
            </p>
          </div>
        </section>

        <section className="service-areas-emphasis" aria-labelledby="emphasis-areas-heading">
          <div className="container">
            <h2 id="emphasis-areas-heading" className="service-areas-emphasis-title">
              Primary service areas
            </h2>
            <p className="service-areas-emphasis-lead">
              Jump straight to AC repair and full HVAC for our main Central Florida markets (same routes our crews run every week).
            </p>
            <ul className="service-areas-emphasis-list">
              {EMPHASIS_SERVICE_AREAS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="service-areas-emphasis-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="service-areas-grid">
          <div className="container">
            <h2 className="service-areas-secondary-heading">More cities &amp; counties</h2>
            <p className="service-areas-secondary-lead">
              Same licensed team—additional landing pages for Kissimmee, county-wide coverage, and other communities.
            </p>
            <div className="areas-grid">
              {secondaryServiceAreas.map((area) => (
                <article key={area.slug} className="area-card">
                  <div className="area-card-image">
                    <img src={area.image} alt={`HVAC services in ${area.name}`} />
                  </div>
                  <div className="area-card-content">
                    <h3>{area.name}</h3>
                    <p>{area.description}</p>
                    {area.nearby && (
                      <p className="area-nearby">Also serving: {area.nearby}</p>
                    )}
                    <Link to="/book-appointment" className="area-book-btn">Book Appointment</Link>
                    <Link to={`/${area.slug}`} className="area-learn-link">
                      {`AC repair & HVAC in ${area.name}, FL`} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
