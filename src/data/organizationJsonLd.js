import { SITE_URL } from '../utils/seoConstants';

/**
 * Single site-wide LocalBusiness / HVAC entity. No per-city LocalBusiness blocks:
 * service geography is expressed with areaServed + serviceArea only.
 *
 * Street line omitted: site copy describes a Poinciana-based dispatch operation (no public walk-in).
 * Locality + 34759 match the home-market messaging elsewhere.
 */
const POINCIANA_LAT = 28.1369;
const POINCIANA_LON = -81.4856;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACContractor',
  '@id': `${SITE_URL}/#business`,
  name: 'Novation Heating and Air Conditioning',
  alternateName: 'Novation Heating and Cooling',
  legalName: 'Novation Heating and Air Conditioning',
  url: SITE_URL,
  telephone: '+1-407-973-1523',
  email: 'info@novationhvac.com',
  image: `${SITE_URL}/images/logo.png`,
  logo: `${SITE_URL}/images/logo.png`,
  description:
    'HVAC contractor based in Poinciana, FL (34759), serving Orlando, Winter Haven, Lakeland, Kissimmee, and Central Florida. AC repair and new system installation; heating and cooling. 24/7 emergency. Mobile service—no walk-in office required.',
  identifier: {
    '@type': 'PropertyValue',
    name: 'Florida HVAC contractor license',
    value: 'CAC1823924',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Poinciana',
    addressRegion: 'FL',
    postalCode: '34759',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: POINCIANA_LAT,
    longitude: POINCIANA_LON,
  },
  /** Dispatch / service footprint (not separate storefronts per city). */
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: POINCIANA_LAT,
      longitude: POINCIANA_LON,
    },
    geoRadius: {
      '@type': 'Distance',
      value: 120,
      unitCode: 'KMT',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Poinciana', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Orlando', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Winter Haven', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Lakeland', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Kissimmee', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Auburndale', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Haines City', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Osceola County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Orange County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Polk County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Seminole County', containedInPlace: { '@type': 'State', name: 'Florida' } },
  ],
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heating Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cooling Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Indoor Air Quality' } },
    ],
  },
};
