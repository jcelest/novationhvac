import { Helmet } from 'react-helmet-async';
import SeoOgTags from '../components/SeoOgTags';
import { SITE_URL } from '../utils/seoConstants';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/Specials.css';
import '../components/Contact.css';

const SPECIALS_TITLE = 'Veteran & Military Discount | 10% Off HVAC | Novation Heating and Air Conditioning';
const SPECIALS_DESC =
  'Novation Heating and Air Conditioning offers 10% off HVAC services for veterans and active military. AC repair, heating, cooling. Orlando, Kissimmee, Central Florida. Call (407) 973-1523.';
const SPECIALS_URL = `${SITE_URL}/specials`;

export default function SpecialsPage() {
  return (
    <>
      <Helmet>
        <title>{SPECIALS_TITLE}</title>
        <meta name="description" content={SPECIALS_DESC} />
        <link rel="canonical" href={SPECIALS_URL} />
        <SeoOgTags url={SPECIALS_URL} title={SPECIALS_TITLE} description={SPECIALS_DESC} />
      </Helmet>
      <Header />
      <main>
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">Military & Veteran Savings</h1>
            <p className="hero-tagline">10% off HVAC services — Thank you for your service</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Claim Your Discount</a>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        <section className="specials specials-veterans" style={{ padding: '4rem 0' }}>
          <div className="container">
            <h2>Military & Veteran Savings</h2>
            <article className="special-card special-card-veterans">
              <div className="veterans-badge">
                <span className="veterans-star">★</span>
                <span className="veterans-offer">10% OFF</span>
                <span className="veterans-star">★</span>
              </div>
              <h3>For Veterans & Active Military</h3>
              <p>Thank you for your service. Novation Heating and Cooling proudly offers 10% off HVAC services to veterans and active military. Valid on repairs, installations, and maintenance. Orlando, Kissimmee, Poinciana, and all of Central Florida.</p>
              <a href="#contact">Claim Your Discount</a>
            </article>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
