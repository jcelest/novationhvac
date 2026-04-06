import { Helmet } from 'react-helmet-async';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { SITE_URL } from '../utils/seoConstants';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/About.css';
import '../components/Contact.css';

const ABOUT_TITLE = 'About Novation Heating and Air Conditioning | Orlando HVAC | License CAC1823924';
const ABOUT_DESC =
  "Novation Heating and Air Conditioning - Orlando's trusted HVAC company. Licensed (CAC1823924), bonded, insured. 24/7 emergency service. AC repair, heating, cooling. Free estimates. (407) 973-1523.";
const ABOUT_URL = `${SITE_URL}/about`;

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{ABOUT_TITLE}</title>
        <meta name="description" content={ABOUT_DESC} />
        <link rel="canonical" href={ABOUT_URL} />
        {renderSeoOgTags({ url: ABOUT_URL, title: ABOUT_TITLE, description: ABOUT_DESC })}
      </Helmet>
      <Header />
      <main>
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">About Novation Heating and Air Conditioning</h1>
            <p className="hero-tagline">Your Trusted HVAC Experts in Central Florida Since Day One</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Request Service</a>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container about-inner">
            <div className="about-content">
              <h2>A Leading HVAC Company You Can Trust</h2>
              <h3>Providing Reliable Home Comfort Solutions Across Orlando, Kissimmee, Poinciana & Central Florida</h3>
              <p>
                At Novation Heating and Cooling, we pride ourselves on our expertise 
                and customer-focused approach to home comfort. Our background-checked team is 
                fully licensed (CAC1823924), bonded, and insured for your peace of mind. We stay on top of 
                the latest industry developments to provide comprehensive HVAC services tailored 
                to your unique needs.
              </p>
              <p>
                When you search for "AC repair Orlando," "HVAC near me," "furnace repair Kissimmee," or 
                "cooling repair Poinciana," you'll find Novation. We work hard to ensure your home stays 
                comfortable, safe, and efficient. Call our team today — we offer free estimates 
                and same-day service to help you get started.
              </p>
              <a href="#contact" className="about-cta">
                <strong>We're Here When You Need Us</strong>
                <em>Same-Day Service & 24/7 Emergency Support</em>
                <span>Whether it's a routine tune-up or an urgent AC repair, our expert technicians are ready to help — any time, any day.</span>
                <span className="cta-link">Request Service Now →</span>
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
