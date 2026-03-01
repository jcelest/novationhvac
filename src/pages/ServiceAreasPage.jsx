import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { serviceAreas } from '../data/serviceAreasData';
import '../components/Hero.css';
import '../components/Contact.css';
import './ServiceAreasPage.css';

export default function ServiceAreasPage() {
  return (
    <>
      <Helmet>
        <title>Service Areas | HVAC Repair Orlando, Kissimmee, Central Florida | Novation</title>
        <meta name="description" content="Novation Heating and Cooling serves Orlando, Kissimmee, Poinciana, Winter Haven, and all of Central Florida. Same-day AC repair, 24/7 emergency service. Book your appointment." />
      </Helmet>
      <Header />
      <main className="service-areas-page">
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">Service Areas</h1>
            <p className="hero-tagline">Proudly serving Central Florida — Orlando, Kissimmee, Poinciana & beyond</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Book Appointment</a>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        <section className="service-areas-intro">
          <div className="container">
            <h2>Where We Serve</h2>
            <p className="service-areas-lead">
              Novation Heating and Cooling provides professional HVAC services throughout Central Florida. 
              From AC repair to furnace installation, we're your trusted local team for heating, cooling, and indoor air quality.
            </p>
          </div>
        </section>

        <section className="service-areas-grid">
          <div className="container">
            <div className="areas-grid">
              {serviceAreas.map((area) => (
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
                    <a href="#contact" className="area-book-btn">Book Appointment</a>
                    <Link to={`/${area.slug}`} className="area-learn-link">Learn more about {area.name} →</Link>
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
