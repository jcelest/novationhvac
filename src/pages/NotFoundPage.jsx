import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Hero.css';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Novation HVAC</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="This page is not available. Return to Novation Heating and Air Conditioning." />
      </Helmet>
      <Header />
      <main id="main-content" className="service-page">
        <section className="hero hero-compact">
          <div
            className="hero-bg"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 82, 118, 0.93) 0%, rgba(41, 128, 185, 0.9) 100%)',
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <h1 className="hero-title">Page not found</h1>
            <p className="hero-tagline">
              That URL is not a published Novation HVAC page. Use the links below to continue.
            </p>
            <div className="hero-buttons">
              <Link to="/" className="btn-primary">
                Back to home
              </Link>
              <Link to="/ac-installation-replacement" className="btn-secondary">
                AC replacement estimate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
