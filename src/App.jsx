import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Specials from './components/Specials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CityLanding from './pages/CityLanding';
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
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <main>
              <Hero />
              <Services />
              <About />
              <Specials />
              <Contact />
            </main>
            <Footer />
          </>
        }
      />
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
  );
}
