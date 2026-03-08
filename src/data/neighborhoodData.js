/**
 * Neighborhood/area landing pages within Central Florida cities.
 * These target "AC repair [Neighborhood]" and "HVAC [Neighborhood]" searches.
 * Add new neighborhoods here when expanding coverage.
 */

const createNeighborhoodData = (name, slug, parentCity, parentCitySlug, options = {}) => ({
  name,
  slug,
  parentCity,
  parentCitySlug,
  metaTitle: options.metaTitle || `AC Repair ${name} FL | HVAC Services Near ${parentCity}`,
  metaDescription: options.metaDescription || `Professional AC repair and HVAC services in ${name}, FL. Serving ${parentCity} area. 24/7 emergency cooling repair. Licensed. Free estimates. (407) 973-1523.`,
  heroTitle: options.heroTitle || `AC Repair & HVAC Services in ${name}`,
  heroTagline: options.heroTagline || `Trusted Cooling & Heating for ${name} — Part of ${parentCity}`,
  aboutTitle: options.aboutTitle || `HVAC & AC Repair in ${name}, Florida`,
  aboutSubtitle: options.aboutSubtitle || `Serving ${name} and the Greater ${parentCity} Area`,
  aboutPara1: options.aboutPara1 || `Novation Heating and Cooling provides expert AC repair and HVAC services in ${name}. As part of the ${parentCity} area, ${name} residents rely on us for cooling repair, furnace service, and 24/7 emergency HVAC. We're licensed (CAC1823924), bonded, and insured.`,
  aboutPara2: options.aboutPara2 || `Florida's heat demands reliable AC. Whether you need same-day AC repair, a new installation, or preventive maintenance in ${name}, our certified technicians deliver. Free estimates and flexible financing available.`,
  serviceIntro: options.serviceIntro || `AC repair ${name}, cooling repair, furnace repair, and HVAC installation. Novation serves ${name} and surrounding ${parentCity} communities.`,
  seoContent: {
    h2: options.seoH2 || `Why ${name} Residents Choose Novation for AC Repair & HVAC`,
    paragraphs: options.seoParagraphs || [
      `Need AC repair ${name} or HVAC near me ${name}? Novation Heating and Cooling serves ${name} and the ${parentCity} area with 24/7 emergency cooling repair, furnace service, and HVAC installation. Same-day AC repair available.`,
      `Heating and cooling ${name} — our licensed technicians provide central air repair, heat pump installation, and maintenance plans. When your AC fails in the Florida heat, we respond fast. Free estimates and transparent pricing.`,
      `Emergency HVAC ${name}: Our 24-hour AC repair team serves ${name} and all of Central Florida. Trust the HVAC contractors ${name} families rely on for cooling repair and heating services.`,
    ],
    faqs: options.faqs || [
      { q: `Do you offer AC repair in ${name}?`, a: `Yes. We provide full AC repair, cooling repair, and HVAC services throughout ${name} and the ${parentCity} area.` },
      { q: 'Is 24/7 emergency HVAC available?', a: 'Yes. Our HVAC team offers 24-hour emergency cooling repair and furnace repair throughout Central Florida.' },
      { q: `What areas near ${name} do you serve?`, a: `We serve ${name}, ${parentCity}, and all of Central Florida including Orlando, Kissimmee, and Poinciana.` },
    ],
  },
});

// Orlando area neighborhoods
export const winterParkData = createNeighborhoodData('Winter Park', 'winter-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Winter Park FL | HVAC Services | Novation Heating & Cooling',
  metaDescription: 'AC repair and HVAC services in Winter Park, FL. 24/7 emergency cooling repair. Serving Orlando metro. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Winter Park with expert AC repair and HVAC services. Winter Park\'s historic homes and Florida heat demand reliable cooling. We provide cooling repair, furnace service, heat pump installation, and 24/7 emergency HVAC throughout Winter Park and the Orlando metro area.',
});

export const oviedoData = createNeighborhoodData('Oviedo', 'oviedo', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Oviedo FL | HVAC Services Near Orlando',
  metaDescription: 'Professional AC repair and HVAC in Oviedo, FL. 24/7 emergency cooling. Serving Orlando metro. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling provides AC repair and HVAC services in Oviedo. Serving Oviedo, Chuluota, and the greater Orlando area, our certified technicians handle cooling repair, furnace service, and emergency HVAC. Same-day service available.',
});

export const lakeNonaData = createNeighborhoodData('Lake Nona', 'lake-nona', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Lake Nona FL | HVAC Services | Novation Heating & Cooling',
  metaDescription: 'AC repair and HVAC services in Lake Nona, Orlando. 24/7 emergency cooling repair. Medical City area. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Lake Nona with professional AC repair and HVAC services. Lake Nona\'s growth and Florida climate mean reliable cooling is essential. We provide cooling repair, furnace service, and 24/7 emergency HVAC for Lake Nona residents.',
});

export const baldwinParkData = createNeighborhoodData('Baldwin Park', 'baldwin-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Baldwin Park Orlando FL | HVAC Services',
  metaDescription: 'AC repair and HVAC in Baldwin Park, Orlando. 24/7 emergency cooling. Licensed. Free estimates. (407) 973-1523.',
});

export const thorntonParkData = createNeighborhoodData('Thornton Park', 'thornton-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Thornton Park Orlando FL | HVAC Downtown',
  metaDescription: 'AC repair and HVAC services in Thornton Park, downtown Orlando. 24/7 emergency cooling. Licensed. Free estimates. (407) 973-1523.',
});

export const collegeParkData = createNeighborhoodData('College Park', 'college-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair College Park Orlando FL | HVAC Services',
  metaDescription: 'AC repair and HVAC in College Park, Orlando. 24/7 emergency cooling. Licensed. Free estimates. (407) 973-1523.',
});

// Kissimmee / Osceola area
export const celebrationData = createNeighborhoodData('Celebration', 'celebration', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair Celebration FL | HVAC Near Kissimmee',
  metaDescription: 'AC repair and HVAC services in Celebration, FL. 24/7 emergency cooling. Near Kissimmee & Disney. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Celebration with expert AC repair and HVAC services. Celebration\'s unique community and Florida heat require dependable cooling. We provide cooling repair, furnace service, and 24/7 emergency HVAC for Celebration residents.',
});

export const stCloudData = createNeighborhoodData('St. Cloud', 'st-cloud', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair St. Cloud FL | HVAC Services | Osceola County',
  metaDescription: 'AC repair and HVAC in St. Cloud, FL. 24/7 emergency cooling. Osceola County. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling provides AC repair and HVAC services in St. Cloud. Serving St. Cloud, Kissimmee, and Osceola County, our technicians handle cooling repair, furnace service, and emergency HVAC. Same-day service available.',
});

export const buenaventuraLakesData = createNeighborhoodData('Buenaventura Lakes', 'buenaventura-lakes', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair Buenaventura Lakes FL | HVAC BVL | Kissimmee',
  metaDescription: 'AC repair and HVAC in Buenaventura Lakes (BVL), Kissimmee. 24/7 emergency cooling. Osceola County. Licensed. Free estimates. (407) 973-1523.',
});

// Poinciana communities
export const village7Data = createNeighborhoodData('Village 7', 'village-7', 'Poinciana', 'poinciana', {
  metaTitle: 'AC Repair Village 7 Poinciana FL | HVAC 34759',
  metaDescription: 'AC repair and HVAC in Village 7, Poinciana FL 34759. 24/7 emergency cooling. Osceola & Polk. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Village 7 and all Poinciana communities with AC repair and HVAC services. Village 7 residents count on us for cooling repair, furnace service, and 24/7 emergency HVAC in the 34759 area.',
});

export const crescentLakesData = createNeighborhoodData('Crescent Lakes', 'crescent-lakes', 'Poinciana', 'poinciana', {
  metaTitle: 'AC Repair Crescent Lakes Poinciana FL | HVAC 34759',
  metaDescription: 'AC repair and HVAC in Crescent Lakes, Poinciana FL. 24/7 emergency cooling. Licensed. Free estimates. (407) 973-1523.',
});

// Orange County areas
export const winterGardenData = createNeighborhoodData('Winter Garden', 'winter-garden', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Winter Garden FL | HVAC Services | Orange County',
  metaDescription: 'AC repair and HVAC in Winter Garden, FL. 24/7 emergency cooling. West Orange County. Licensed. Free estimates. (407) 973-1523.',
});

export const ocoeeData = createNeighborhoodData('Ocoee', 'ocoee', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Ocoee FL | HVAC Services | West Orange County',
  metaDescription: 'AC repair and HVAC in Ocoee, FL. 24/7 emergency cooling. West Orange County. Licensed. Free estimates. (407) 973-1523.',
});

export const apopkaData = createNeighborhoodData('Apopka', 'apopka', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Apopka FL | HVAC Services | North Orange County',
  metaDescription: 'AC repair and HVAC in Apopka, FL. 24/7 emergency cooling. North Orange County. Licensed. Free estimates. (407) 973-1523.',
});

// Polk County
export const lakelandData = createNeighborhoodData('Lakeland', 'lakeland', 'Polk County', 'polk-county', {
  metaTitle: 'AC Repair Lakeland FL | HVAC Services | Polk County',
  metaDescription: 'AC repair and HVAC in Lakeland, FL. 24/7 emergency cooling. Polk County. Licensed. Free estimates. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling provides AC repair and HVAC services in Lakeland. Serving Lakeland, Winter Haven, and Polk County, our technicians handle cooling repair, furnace service, and emergency HVAC. Same-day service available.',
});

// Dr. Phillips area
export const bayHillData = createNeighborhoodData('Bay Hill', 'bay-hill', 'Dr. Phillips', 'dr-phillips', {
  metaTitle: 'AC Repair Bay Hill Orlando FL | HVAC Dr. Phillips Area',
  metaDescription: 'AC repair and HVAC in Bay Hill, Dr. Phillips area. 24/7 emergency cooling. Southwest Orlando. Licensed. Free estimates. (407) 973-1523.',
});

// Altamonte Springs area
export const longwoodData = createNeighborhoodData('Longwood', 'longwood', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'AC Repair Longwood FL | HVAC Near Altamonte Springs',
  metaDescription: 'AC repair and HVAC in Longwood, FL. 24/7 emergency cooling. Near Altamonte Springs. Licensed. Free estimates. (407) 973-1523.',
});

export const sanfordData = createNeighborhoodData('Sanford', 'sanford', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'AC Repair Sanford FL | HVAC Seminole County',
  metaDescription: 'AC repair and HVAC in Sanford, FL. 24/7 emergency cooling. Seminole County. Licensed. Free estimates. (407) 973-1523.',
});

// Export all for routing
export const allNeighborhoodData = {
  'winter-park': winterParkData,
  'oviedo': oviedoData,
  'lake-nona': lakeNonaData,
  'baldwin-park': baldwinParkData,
  'thornton-park': thorntonParkData,
  'college-park': collegeParkData,
  'celebration': celebrationData,
  'st-cloud': stCloudData,
  'buenaventura-lakes': buenaventuraLakesData,
  'village-7': village7Data,
  'crescent-lakes': crescentLakesData,
  'winter-garden': winterGardenData,
  'ocoee': ocoeeData,
  'apopka': apopkaData,
  'lakeland': lakelandData,
  'bay-hill': bayHillData,
  'longwood': longwoodData,
  'sanford': sanfordData,
};
