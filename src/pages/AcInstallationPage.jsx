import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import ReplacementEstimateForm from '../components/ReplacementEstimateForm';
import {
  WarningSignIcon,
  CompareIcon,
  ClipboardIcon,
  ReplacementIcon,
  RebateIcon,
  StepsIcon,
} from '../components/ServiceIcons';
import { renderSeoOgTags } from '../components/SeoOgTags';
import { jsonLdStringify } from '../utils/jsonLdScript';
import { SITE_URL } from '../utils/seoConstants';
import { breadcrumbJsonLd } from '../utils/schemaBreadcrumb';
import { trackReplacementCtaClick } from '../utils/analytics';
import { reviews } from '../data/reviews';
import {
  INSTALL_SLUG,
  installMeta,
  installOffer,
  replacementSigns,
  repairVsReplace,
  estimateIncludes,
  optionLevels,
  installScopeItems,
  processSteps,
  installFaqs,
  installAreaLinks,
} from '../data/acInstallationData';
import '../components/Hero.css';
import '../components/Contact.css';
import './ServicePage.css';
import './AcInstallationPage.css';

const CANONICAL = `${SITE_URL}/${INSTALL_SLUG}`;

const breadcrumbItems = [
  { name: 'Home', path: '/' },
  { name: 'AC Installation and Replacement', path: `/${INSTALL_SLUG}` },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${CANONICAL}#webpage`,
  url: CANONICAL,
  name: installMeta.title,
  description: installMeta.description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${CANONICAL}#service` },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${CANONICAL}#service`,
  name: 'Residential AC Installation and Replacement',
  description: installMeta.description,
  provider: { '@id': `${SITE_URL}/#business` },
  areaServed: 'Central Florida',
  serviceType: 'Air conditioning installation and replacement',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: installFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function AcInstallationPage() {
  return (
    <>
      <Helmet>
        <title>{installMeta.title}</title>
        <meta name="description" content={installMeta.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL} />
        {renderSeoOgTags({
          url: CANONICAL,
          title: installMeta.title,
          description: installMeta.description,
        })}
        <script type="application/ld+json">{jsonLdStringify(webPageSchema)}</script>
        <script type="application/ld+json">{jsonLdStringify(serviceSchema)}</script>
        <script type="application/ld+json">{jsonLdStringify(breadcrumbJsonLd(breadcrumbItems))}</script>
        <script type="application/ld+json">{jsonLdStringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main id="main-content" className="service-page install-page">
        <section className="hero hero-compact">
          <div
            className="hero-bg"
            style={{
              background:
                'linear-gradient(135deg, rgba(26, 82, 118, 0.93) 0%, rgba(41, 128, 185, 0.9) 55%, rgba(52, 152, 219, 0.86) 100%)',
            }}
          />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <Breadcrumbs items={breadcrumbItems} />
            <span className="install-badge">{installOffer.eyebrow}</span>
            <h1 className="hero-title">{installMeta.h1}</h1>
            <p className="hero-tagline">{installOffer.support}</p>
            <div className="hero-buttons">
              <a
                href="#estimate"
                className="btn-primary"
                onClick={() => trackReplacementCtaClick('install_hero')}
              >
                {installOffer.primaryCta}
              </a>
              <a href="tel:4079731523" className="btn-secondary" data-track-location="install_hero">
                {installOffer.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="signs-heading">
          <div className="container">
            <h2 id="signs-heading">Signs an AC may need replacement</h2>
            <p className="install-lead">
              These are common reasons homeowners ask for a second look. A visit confirms what
              applies to your system.
            </p>
            <div className="install-grid">
              {replacementSigns.map((item) => (
                <article key={item.title} className="install-card">
                  <div className="install-card-icon">
                    <WarningSignIcon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="compare-heading">
          <div className="container">
            <h2 id="compare-heading">Repair versus replacement</h2>
            <p className="install-lead">
              We still prioritize honest repair when that is the better path. Use this comparison as
              a starting point, then request an estimate.
            </p>
            <div className="install-grid install-compare">
              {repairVsReplace.map((column) => (
                <article key={column.title} className="install-card">
                  <div className="install-card-icon">
                    <CompareIcon />
                  </div>
                  <h3>{column.title}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="estimate-includes-heading">
          <div className="container">
            <h2 id="estimate-includes-heading">What is included in the free estimate</h2>
            <p className="install-lead">
              No published prices or monthly payments. You leave with a written comparison you can
              review on your own time.
            </p>
            <ul className="install-list">
              {estimateIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="install-section" aria-labelledby="options-heading">
          <div className="container">
            <h2 id="options-heading">Three option levels we can discuss</h2>
            <p className="install-lead">
              These are planning levels, not product SKUs. Equipment, efficiency ratings, and
              warranties are confirmed during the estimate.
            </p>
            <div className="install-grid">
              {optionLevels.map((level) => (
                <article key={level.name} className="install-card">
                  <div className="install-card-icon">
                    <ReplacementIcon />
                  </div>
                  <h3>{level.name}</h3>
                  <p>{level.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="scope-heading">
          <div className="container">
            <h2 id="scope-heading">What may be included in an installation</h2>
            <p className="install-lead">
              Scope depends on the home and the equipment you approve. We only list services
              Novation already performs.
            </p>
            <ul className="install-list">
              {installScopeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="install-section" aria-labelledby="rebate-heading">
          <div className="container">
            <div className="install-card" style={{ maxWidth: '42rem', margin: '0 auto' }}>
              <div className="install-card-icon">
                <RebateIcon />
              </div>
              <h2 id="rebate-heading" style={{ textAlign: 'left' }}>
                Efficiency and utility-rebate guidance
              </h2>
              <p>
                Newer equipment can use less energy than an aging system, but savings vary by home,
                usage, and the unit you choose. Some Central Florida utilities offer efficiency
                incentives from time to time. We do not guarantee rebate amounts or tax credits.
                During the estimate we can outline questions to ask your utility. Confirm current
                programs directly with that provider.
              </p>
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="process-heading">
          <div className="container">
            <h2 id="process-heading">Four-step installation process</h2>
            <p className="install-lead">
              <span className="install-card-icon" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
                <StepsIcon />
              </span>
              A simple path from estimate to scheduled work.
            </p>
            <ol className="install-steps">
              {processSteps.map((step) => (
                <li key={step.title} className="install-step">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="install-section" aria-labelledby="reviews-heading">
          <div className="container">
            <h2 id="reviews-heading">What customers have said</h2>
            <p className="install-lead">
              Reviews below are from existing Novation customers. We do not invent ratings or review
              totals.
            </p>
            <div className="install-reviews">
              {reviews.map((review) => (
                <article key={review.name} className="install-review">
                  <p className="install-review-stars" aria-label={`${review.rating} out of 5`}>
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <svg key={index} viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
                        <path
                          fill="currentColor"
                          d="M10 1.6 12.4 7l6 .5-4.5 3.9 1.4 5.8L10 14.6 4.7 17.2l1.4-5.8L1.6 7.5l6-.5L10 1.6z"
                        />
                      </svg>
                    ))}
                  </p>
                  <blockquote>{review.text}</blockquote>
                  <cite>{review.name}</cite>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="install-section" aria-labelledby="areas-heading">
          <div className="container">
            <h2 id="areas-heading">Service areas for replacement estimates</h2>
            <p className="install-lead">
              Dispatch from our Poinciana base. These links go to existing service pages, not
              separate offices.
            </p>
            <div className="install-areas">
              {installAreaLinks.map((area) => (
                <Link key={area.to} to={area.to}>
                  {area.label}
                </Link>
              ))}
            </div>
            <div className="install-related">
              <Link to="/cooling">Cooling and AC repair</Link>
              <Link to="/emergency-ac-repair">Emergency AC repair</Link>
              <Link to="/book-appointment">Book an appointment</Link>
              <a href="#estimate">Ask about financing on qualifying systems</a>
            </div>
          </div>
        </section>

        <section className="service-faq" aria-labelledby="install-faq-heading">
          <div className="container about-inner">
            <h2 id="install-faq-heading">Installation FAQ</h2>
            {installFaqs.map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container contact-inner">
            <div className="contact-info">
              <h2>Free Residential AC Replacement Estimate</h2>
              <p>
                Tell us about the home and the current system. We will follow up to schedule an
                evaluation.
              </p>
              <div className="contact-details">
                <a href="tel:4079731523" className="contact-link" data-track-location="install_form">
                  <strong className="contact-call-label">Call Us</strong>
                  <span className="contact-phone">(407) 973-1523</span>
                </a>
                <p className="contact-hours">Repair and emergency lines remain available 24/7</p>
              </div>
            </div>
            <ReplacementEstimateForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
