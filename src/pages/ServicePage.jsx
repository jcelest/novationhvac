import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ReplacementCta from '../components/ReplacementCta';
import { breadcrumbJsonLd } from '../utils/schemaBreadcrumb';
import '../components/Hero.css';
import '../components/Services.css';
import '../components/About.css';
import '../components/Contact.css';
import './ServicePage.css';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { canonicalUrlFromPathname } from '../utils/seoPath';
import { jsonLdStringify } from '../utils/jsonLdScript';

export default function ServicePage({ data }) {
  const { metaTitle, metaDescription, heroTitle, heroTagline, sections, faqs, relatedLinks, breadcrumbName } = data;
  const { pathname } = useLocation();
  const canonicalUrl = canonicalUrlFromPathname(pathname);
  const crumbName = breadcrumbName || heroTitle;
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: crumbName, path: pathname },
  ];

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
        <script type="application/ld+json">{jsonLdStringify(breadcrumbJsonLd(breadcrumbItems))}</script>
        {faqSchema && <script type="application/ld+json">{jsonLdStringify(faqSchema)}</script>}
      </Helmet>
      <Header />
      <main id="main-content" className="service-page">
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(${data.heroImage}) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <Breadcrumbs items={breadcrumbItems} />
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
                  {i === 0 && pathname === '/cooling' && <ReplacementCta location="cooling_page" />}
                </div>
                <div className="service-section-visual">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.alt || section.title}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {section.svg && (
                    <div className="service-svg" dangerouslySetInnerHTML={{ __html: section.svg }} />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

        {relatedLinks?.length > 0 && (
          <section className="service-section">
            <div className="container">
              <div className="service-section-content">
                <h2>Related services</h2>
                <ul className="service-related-links">
                  {relatedLinks.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

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
