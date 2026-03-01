import { Routes, Route } from 'react-router-dom';
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
import ServicePage from './pages/ServicePage';
import SpecialsPage from './pages/SpecialsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route
        path="/"
        element={
          <>
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
      <Route path="/specials" element={<SpecialsPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
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
    </Routes>
    </>
  );
}
