import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { renderSeoOgTags } from './components/SeoOgTags';
import { SITE_URL, HOME_PAGE_TITLE, HOME_PAGE_DESCRIPTION } from './utils/seoConstants';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import Promos from './components/Promos';
import Services from './components/Services';
import About from './components/About';
import Specials from './components/Specials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CityLanding from './pages/CityLanding';
import NeighborhoodLanding from './pages/NeighborhoodLanding';
import ServicePage from './pages/ServicePage';
import SpecialsPage from './pages/SpecialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import EmergencyACPage from './pages/EmergencyACPage';
import { coolingData, heatingData, indoorAirQualityData } from './data/serviceData';
import {
  orlandoData,
  kissimmeeData,
  poincianaData,
  osceolaCountyData,
  orangeCountyData,
  polkCountyData,
  winterHavenData,
  auburndaleData,
  hainesCityData,
  drPhillipsData,
  windermereData,
  altamonteSpringsData,
} from './data/cityData';
import { allNeighborhoodData } from './data/neighborhoodData';
import { organizationJsonLd } from './data/organizationJsonLd';
import { jsonLdStringify } from './utils/jsonLdScript';

export default function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{jsonLdStringify(organizationJsonLd)}</script>
      </Helmet>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <title>{HOME_PAGE_TITLE}</title>
              <meta name="description" content={HOME_PAGE_DESCRIPTION} />
              <link rel="canonical" href={`${SITE_URL}/`} />
              {renderSeoOgTags({ url: `${SITE_URL}/`, title: HOME_PAGE_TITLE, description: HOME_PAGE_DESCRIPTION })}
            </Helmet>
            <Header />
            <main>
              <Hero />
              <Promos />
              <Services />
              <About />
              <Specials />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
      <Route path="/cooling" element={<ServicePage data={coolingData} />} />
      <Route path="/heating" element={<ServicePage data={heatingData} />} />
      <Route path="/indoor-air-quality" element={<ServicePage data={indoorAirQualityData} />} />
      <Route path="/emergency-ac-repair" element={<EmergencyACPage />} />
      <Route path="/specials" element={<SpecialsPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/book-appointment" element={<BookAppointmentPage />} />
      <Route path="/orlando" element={<CityLanding cityData={orlandoData} />} />
      <Route path="/kissimmee" element={<CityLanding cityData={kissimmeeData} />} />
      <Route path="/poinciana" element={<CityLanding cityData={poincianaData} />} />
      <Route path="/osceola-county" element={<CityLanding cityData={osceolaCountyData} />} />
      <Route path="/orange-county" element={<CityLanding cityData={orangeCountyData} />} />
      <Route path="/polk-county" element={<CityLanding cityData={polkCountyData} />} />
      <Route path="/winter-haven" element={<CityLanding cityData={winterHavenData} />} />
      <Route path="/auburndale" element={<CityLanding cityData={auburndaleData} />} />
      <Route path="/haines-city" element={<CityLanding cityData={hainesCityData} />} />
      <Route path="/dr-phillips" element={<CityLanding cityData={drPhillipsData} />} />
      <Route path="/windermere" element={<CityLanding cityData={windermereData} />} />
      <Route path="/altamonte-springs" element={<CityLanding cityData={altamonteSpringsData} />} />
        {Object.entries(allNeighborhoodData).map(([slug, data]) => (
          <Route key={slug} path={`/${slug}`} element={<NeighborhoodLanding neighborhoodData={data} />} />
        ))}
    </Routes>
    </>
  );
}
