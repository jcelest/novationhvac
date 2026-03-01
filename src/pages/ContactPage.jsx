import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/Contact.css';

export default function ContactPage() {
  const location = useLocation();
  const initialZip = location.state?.zip;

  return (
    <>
      <Helmet>
        <title>Contact Novation Heating and Cooling | Request Service | (407) 973-1523</title>
        <meta name="description" content="Contact Novation Heating and Cooling for AC repair, heating, cooling services. 24/7 emergency. Orlando, Kissimmee, Central Florida. Call (407) 973-1523 or request service online." />
      </Helmet>
      <Header />
      <main>
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-tagline">Request service, get a free estimate, or call us 24/7 for emergency HVAC repair</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Request Service</a>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        <Contact initialZip={initialZip} />
      </main>
      <Footer />
    </>
  );
}
