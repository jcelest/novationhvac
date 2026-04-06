import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../components/Hero.css';
import '../components/Services.css';
import '../components/About.css';
import '../components/Contact.css';
import './ServicePage.css';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { SITE_URL } from '../utils/seoConstants';

export default function ServicePage({ data }) {
  const { metaTitle, metaDescription, heroTitle, heroTagline, sections, faqs } = data;
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname}`;

  const faqSchema = faqs?.length > 0 ? {
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
  } : null;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {renderSeoOgTags({ url: canonicalUrl, title: metaTitle, description: metaDescription })}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      <Header />
      <main className="service-page">
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(${data.heroImage}) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-tagline">{heroTagline}</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Request Service</a>
              <a href="tel:4079731523" className="btn-secondary">(407) 973-1523</a>
            </div>
          </div>
        </section>

        {sections.map((section, i) => (
          <section key={i} className="service-section">
            <div className="container">
              <div className="service-section-inner">
                <div className="service-section-content">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
                <div className="service-section-visual">
                  {section.image && (
                    <img src={section.image} alt={section.alt || section.title} />
                  )}
                  {section.svg && (
                    <div className="service-svg" dangerouslySetInnerHTML={{ __html: section.svg }} />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {faqs && faqs.length > 0 && (
          <section className="service-faq">
            <div className="container about-inner">
              <h2>Frequently Asked Questions</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Contact />
      </main>
      <Footer />
    </>
  );
}
