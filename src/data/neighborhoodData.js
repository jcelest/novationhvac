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
  metaTitle: 'AC Repair Winter Park FL | Historic Homes & Park Avenue HVAC | Novation',
  metaDescription:
    'Winter Park AC repair & heating: historic homes, Park Avenue corridor & lakeside properties. 24/7 emergency HVAC. Orlando metro. Licensed CAC1823924. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Winter Park with expert AC repair and HVAC services. Winter Park\'s historic homes and Florida heat demand reliable cooling. We provide cooling repair, furnace service, heat pump installation, and 24/7 emergency HVAC throughout Winter Park and the Orlando metro area.',
});

export const oviedoData = createNeighborhoodData('Oviedo', 'oviedo', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Oviedo FL | Seminole County Line HVAC | Novation',
  metaDescription:
    'Oviedo AC repair & heating: Chuluota, Geneva & SR-417 corridor. 24/7 emergency cooling. Licensed. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling provides AC repair and HVAC services in Oviedo. Serving Oviedo, Chuluota, and the greater Orlando area, our certified technicians handle cooling repair, furnace service, and emergency HVAC. Same-day service available.',
});

export const lakeNonaData = createNeighborhoodData('Lake Nona', 'lake-nona', 'Orlando', 'orlando', {
  metaTitle: 'Lake Nona HVAC for Newer Homes | AC Service & High-Efficiency Installs | Novation',
  metaDescription:
    'Lake Nona & Medical City: high-efficiency equipment, new-home HVAC, and AC service—long-tail vs broad Orlando page. Licensed. (407) 973-1523.',
  heroTitle: 'Lake Nona HVAC — New Construction & Medical City Area',
  heroTagline: 'Install & upgrade expertise—not the same headline as Orlando metro',
  aboutPara1:
    'Lake Nona’s newer housing stock often means variable-speed systems and tight efficiency specs—we service and install equipment suited to Medical City and southeast Orlando growth, separate from a generic Orlando metro headline.',
});

export const baldwinParkData = createNeighborhoodData('Baldwin Park', 'baldwin-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Baldwin Park FL | Lake Baldwin & East Orlando HVAC | Novation',
  metaDescription:
    'Baldwin Park AC repair & heating near Lake Baldwin. Townhomes, single-family & 24/7 emergency HVAC. Licensed. (407) 973-1523.',
});

export const thorntonParkData = createNeighborhoodData('Thornton Park', 'thornton-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair Thornton Park FL | Downtown Orlando HVAC | Novation',
  metaDescription:
    'Thornton Park & Lake Eola–adjacent AC repair & heating. Downtown Orlando 24/7 emergency HVAC. Licensed. (407) 973-1523.',
});

export const collegeParkData = createNeighborhoodData('College Park', 'college-park', 'Orlando', 'orlando', {
  metaTitle: 'AC Repair College Park FL | Edgewater Drive & Ivanhoe Village HVAC | Novation',
  metaDescription:
    'College Park AC repair & heating along Edgewater Drive & Ivanhoe. Bungalows, cottages & 24/7 emergency HVAC. (407) 973-1523.',
});

// Kissimmee / Osceola area
export const celebrationData = createNeighborhoodData('Celebration', 'celebration', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair Celebration FL | Planned Community HVAC | Novation',
  metaDescription:
    'Celebration, FL AC repair & heating: town centers, condos & single-family. 24/7 emergency HVAC near Disney/Kissimmee. Licensed. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Celebration with expert AC repair and HVAC services. Celebration\'s unique community and Florida heat require dependable cooling. We provide cooling repair, furnace service, and 24/7 emergency HVAC for Celebration residents.',
});

export const stCloudData = createNeighborhoodData('St. Cloud', 'st-cloud', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair St. Cloud FL | East Lake Toho & Narcoossee HVAC | Novation',
  metaDescription:
    'St. Cloud AC repair & heating: East Lake Toho, Narcoossee Road & historic downtown. 24/7 emergency Osceola County HVAC. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling provides AC repair and HVAC services in St. Cloud. Serving St. Cloud, Kissimmee, and Osceola County, our technicians handle cooling repair, furnace service, and emergency HVAC. Same-day service available.',
});

export const buenaventuraLakesData = createNeighborhoodData('Buenaventura Lakes', 'buenaventura-lakes', 'Kissimmee', 'kissimmee', {
  metaTitle: 'AC Repair Buenaventura Lakes FL | BVL & Osceola Corridor HVAC | Novation',
  metaDescription:
    'Buenaventura Lakes (BVL) AC repair & heating off Thacker Road & Boggy Creek. 24/7 emergency HVAC. Licensed. (407) 973-1523.',
});

// Poinciana communities
export const village7Data = createNeighborhoodData('Village 7', 'village-7', 'Poinciana', 'poinciana', {
  metaTitle: 'Village 7 Poinciana AC Service | West 34759 Neighborhood | Novation',
  metaDescription:
    'Village 7 long-tail: AC repair & heating in west Poinciana—not a clone of the main Poinciana city title. 34759. CAC1823924. (407) 973-1523.',
  aboutPara1: 'Novation Heating and Cooling serves Village 7 and all Poinciana communities with AC repair and HVAC services. Village 7 residents count on us for cooling repair, furnace service, and 24/7 emergency HVAC in the 34759 area.',
});

export const crescentLakesData = createNeighborhoodData('Crescent Lakes', 'crescent-lakes', 'Poinciana', 'poinciana', {
  metaTitle: 'Crescent Lakes Poinciana AC Repair | East 34759 Lakeside | Novation',
  metaDescription:
    'Crescent Lakes hyperlocal: east-side 34759 lakes & pool homes—distinct from Village 7 and from the Poinciana hub page. Licensed. (407) 973-1523.',
});

// Orange County areas
export const winterGardenData = createNeighborhoodData('Winter Garden', 'winter-garden', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Winter Garden FL | Plant Street & West Orange HVAC | Novation',
  metaDescription:
    'Winter Garden AC repair & heating: Plant Street, downtown WG & SR-429 corridor. 24/7 emergency West Orange HVAC. (407) 973-1523.',
});

export const ocoeeData = createNeighborhoodData('Ocoee', 'ocoee', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Ocoee FL | West Colonial & Clarke Road HVAC | Novation',
  metaDescription:
    'Ocoee AC repair & heating: West Colonial Drive, Clarke Road & Forest Lake. 24/7 emergency West Orange HVAC. (407) 973-1523.',
});

export const apopkaData = createNeighborhoodData('Apopka', 'apopka', 'Orange County', 'orange-county', {
  metaTitle: 'AC Repair Apopka FL | North Orange & Maitland Border HVAC | Novation',
  metaDescription:
    'Apopka AC repair & heating: Rock Springs, Kelly Park area & SR-436 corridor. 24/7 emergency North Orange HVAC. (407) 973-1523.',
});

// Polk County
export const lakelandData = createNeighborhoodData('Lakeland', 'lakeland', 'Polk County', 'polk-county', {
  metaTitle: 'Lakeland HVAC Installation & AC Replacement | Repair | Novation',
  metaDescription:
    'Lakeland emphasis: new AC installation & full replacements—plus repair and tune-ups. Different primary intent than Winter Haven’s repair-led page. Poinciana dispatch. CAC1823924. (407) 973-1523.',
  heroTitle: 'Lakeland New AC Installation & Replacement + Repair',
  heroTagline: 'Swan City & Polk corridors—right-sizing and upgrades, not just quick fixes',
  aboutTitle: 'Lakeland HVAC Installation & Replacement',
  aboutSubtitle: 'Residential & light commercial across Lakeland',
  aboutPara1:
    'Novation Heating and Air Conditioning operates from Poinciana and schedules Lakeland jobs alongside other Polk County routes—so you are not an afterthought on a map pin. We work near downtown, South Lakeland, Gibsonia, and along major arteries where attic units and package systems both show up; services include AC repair, furnace and heat pump service, indoor air quality improvements, and full replacements when efficiency or reliability no longer pencil out.',
  aboutPara2:
    'Many Lakeland customers also ask us about Winter Haven or Auburndale referrals—we share one dispatch philosophy county-wide. To lock in a preseason tune-up, troubleshoot uneven rooms, or get a tech out for a no-cool house, call (407) 973-1523 or use our online booking form.',
  serviceIntro:
    'From capacitor replacements on older split systems to inverter-driven upgrades and duct assessments, we tailor recommendations to Lakeland homes—not a one-size quote sheet.',
  seoH2: 'Lakeland HVAC topics we hear every week',
  seoParagraphs: [
    'Historic bungalows near Lake Morton can have tight mechanical closets; newer builds off the Polk Parkway may run variable-speed air handlers—either way, we verify airflow and charge before we green-light major component swaps.',
    'Commercial strip plazas along US-98 sometimes need after-hours rooftop attention—we take limited small-business work when our commercial-capable techs are available; describe access and tonnage when you call.',
    'Indoor humidity swings when afternoon storms roll in—if your thermostat says 74 but it feels clammy, we can evaluate dehumidification strategies that work with your existing ducted setup.',
  ],
  faqs: [
    {
      q: 'Do you provide HVAC service in Lakeland?',
      a: 'Yes. We serve Lakeland and all of Polk County with AC repair, heating, maintenance, and installation.',
    },
    {
      q: 'Do you offer emergency AC repair in Lakeland?',
      a: 'Yes. Call (407) 973-1523 for 24/7 emergency cooling and heating support when available.',
    },
    {
      q: 'How does Novation relate to Winter Haven and Poinciana?',
      a: 'We dispatch across Central Florida from our Poinciana home base. Winter Haven, Lakeland, and Orlando are all part of our regular service area.',
    },
  ],
});

// Dr. Phillips area
export const bayHillData = createNeighborhoodData('Bay Hill', 'bay-hill', 'Dr. Phillips', 'dr-phillips', {
  metaTitle: 'AC Repair Bay Hill FL | Arnold Palmer Area HVAC | Novation',
  metaDescription:
    'Bay Hill & Dr. Phillips AC repair & heating near championship golf. Southwest Orlando 24/7 emergency HVAC. Licensed. (407) 973-1523.',
});

// Altamonte Springs area
export const longwoodData = createNeighborhoodData('Longwood', 'longwood', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'AC Repair Longwood FL | Wekiva Springs & I-4 Corridor HVAC | Novation',
  metaDescription:
    'Longwood AC repair & heating: Wekiva Springs, SR-434 & I-4 access. 24/7 emergency Seminole/north Orange HVAC. (407) 973-1523.',
});

export const sanfordData = createNeighborhoodData('Sanford', 'sanford', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'AC Repair Sanford FL | Lake Monroe & Historic Downtown HVAC | Novation',
  metaDescription:
    'Sanford AC repair & heating: lakefront, historic downtown & Seminole Towne Center. 24/7 emergency HVAC. (407) 973-1523.',
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
