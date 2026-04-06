/**
 * One optional "up" link per page: emphasis city OR /service-areas hub.
 * Only non-emphasis slugs that benefit from a path to a primary market page.
 * Keys must match route slugs in App.jsx.
 */
export const GEO_UP_LINKS = {
  kissimmee: { to: '/poinciana', label: 'HVAC services in Poinciana — our home base' },
  'osceola-county': { to: '/poinciana', label: 'HVAC in Poinciana (company home base)' },
  'orange-county': { to: '/orlando', label: 'Orlando metro AC & heating overview' },
  'polk-county': { to: '/service-areas', label: 'Browse Central Florida service areas' },
  auburndale: { to: '/winter-haven', label: 'Winter Haven HVAC hub (nearby Polk County)' },
  'haines-city': { to: '/lakeland', label: 'Lakeland HVAC services (Polk County)' },
  'dr-phillips': { to: '/orlando', label: 'Orlando metro AC & heating overview' },
  windermere: { to: '/orlando', label: 'Orlando & West Orange HVAC overview' },
  'altamonte-springs': { to: '/orlando', label: 'North Orlando metro HVAC overview' },
  'winter-garden': { to: '/orlando', label: 'Orlando metro AC & heating overview' },
  ocoee: { to: '/orlando', label: 'West Orange & Orlando metro HVAC' },
  apopka: { to: '/orlando', label: 'North Orlando metro HVAC overview' },
  'bay-hill': { to: '/orlando', label: 'Southwest Orlando metro HVAC' },
  longwood: { to: '/orlando', label: 'North Orlando & Seminole HVAC' },
  sanford: { to: '/orlando', label: 'Seminole County & Orlando metro HVAC' },
};
