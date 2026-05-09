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
  metaTitle: options.metaTitle || `${name} AC Repair Near You | Same-Day AC Repair | Novation`,
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
  metaTitle: 'Winter Park AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Winter Park AC repair & heating: historic homes, Park Avenue corridor & lakeside properties. 24/7 emergency HVAC. Orlando metro. Licensed CAC1823924. (407) 973-1523.',
  heroTagline: 'Park Avenue · Rollins · chain-of-lakes Winter Park AC service',
  aboutPara1:
    'Winter Park FL AC repair is a different job from generic Orlando inventory: tight lots, mature oak shade, and pre-war bungalows that hide undersized returns and legacy duct paths. Novation services Park Avenue storefronts-adjacent homes, lakeside estates, and College-adjacent streets with licensed HVAC repair, heat pump expertise, and replacements that respect historic envelopes.',
  aboutPara2:
    'Older plaster walls and addition-on-addition floor plans create uneven cooling—we measure room-by-room deltas before selling oversized equipment. Emergencies: (407) 973-1523.',
  serviceIntro:
    'Rollins-area rentals and lakeside second homes spike our preseason calendar—book tune-ups before graduation and holiday weeks.',
  seoH2: 'Winter Park AC repair — historic home & Park Avenue keywords',
  seoParagraphs: [
    'Top searches pair “Winter Park AC repair,” “Park Avenue HVAC,” and “historic Winter Park air conditioning”—this block uses those phrases naturally instead of swapping city names in a template.',
    'Museum-caliber woodwork means we protect floors and walls during line-set work; we discuss minimal-invasive options when chase space is tight.',
    'Heat pumps near the lakes deal with humidity rebound after afternoon storms—thermostat schedules and blower delays sometimes beat cranking the stat down.',
  ],
  faqs: [
    {
      q: 'Do you repair AC in Winter Park FL near Park Avenue?',
      a: 'Yes. We serve Winter Park, Orlando metro, and surrounding lakes with repair, maintenance, and replacement.',
    },
    {
      q: 'Can you service older homes with small mechanical closets?',
      a: 'Yes. We evaluate airflow constraints and discuss modern high-static blowers or duct retrofits when appropriate.',
    },
    {
      q: 'Is emergency HVAC available in Winter Park?',
      a: 'Call (407) 973-1523 for 24/7 emergency cooling and heating when technicians are available.',
    },
  ],
});

export const oviedoData = createNeighborhoodData('Oviedo', 'oviedo', 'Orlando', 'orlando', {
  metaTitle: 'Oviedo AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Oviedo AC repair & heating: Chuluota, Geneva & SR-417 corridor. 24/7 emergency cooling. Licensed. (407) 973-1523.',
  heroTagline: 'SR-417, Seminole County line & east Orange growth corridors',
  aboutPara1:
    'Oviedo AC repair sits on the Seminole–Orange seam: Geneva-adjacent ranch homes, Chuluota chickens-or-not aside, and SR-417 commuter infill that stacks tighter cooling loads per summer afternoon. Novation routes technicians for capacitor failures, indoor blower debris from pollen surges, heat pumps that won’t defrost, and straight-cool systems on their last leg.',
  aboutPara2:
    'Tell us cross streets near 426, 434, or 417 so we plan drive time honestly—same-day when dispatch allows. Book or call (407) 973-1523.',
  serviceIntro:
    'Oviedo’s tree canopy is pretty—and tough on outdoor coils; we include coil rinse guidance on maintenance visits when safe.',
  seoH2: 'Oviedo HVAC: AC repair, SR-417 corridor, Seminole County line',
  seoParagraphs: [
    'Keywords: “Oviedo AC repair,” “Chuluota HVAC,” “Geneva FL air conditioning.” Each neighborhood cluster on the east side deserves distinct wording versus Winter Park bungalows.',
    'Newer subdivisions often run two-stage equipment—we verify staging via thermostat wiring before assuming refrigerant loss.',
    'Rentals and multi-gen homes: ask about filter schedules that survive shedding season without choking airflow.',
  ],
  faqs: [
    { q: 'Do you offer AC repair in Oviedo FL?', a: 'Yes. Full residential HVAC service throughout Oviedo, Chuluota, Geneva-area routes, and greater east Orlando.' },
    { q: 'Can you fix heat pumps in Oviedo?', a: 'Yes. Heat pump diagnostics, defrost issues, and replacements are part of our workflow.' },
    { q: 'Do you provide emergency HVAC near SR-417?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
  ],
});

export const lakeNonaData = createNeighborhoodData('Lake Nona', 'lake-nona', 'Orlando', 'orlando', {
  metaTitle: 'Lake Nona AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Lake Nona & Medical City: high-efficiency equipment, new-home HVAC, and AC service—long-tail vs broad Orlando page. Licensed. (407) 973-1523.',
  heroTitle: 'Lake Nona HVAC — New Construction & Medical City Area',
  heroTagline: 'Medical City & Narcoossee growth—variable-speed systems, tight specs',
  aboutPara1:
    'Lake Nona HVAC demands vocabulary Orlando-wide pages skip: communicating furnaces, inverter-driven compressors, MERV upgrades without killing static pressure, and builder-grade flare leaks that show up season two—not season ten. Novation services Medical City shifts, Narcoossee growth, and Laureate Park density with installs and repairs that match aggressive efficiency targets.',
  aboutPara2:
    'If your home still feels humid at 72°F, we evaluate latent load, blower profiles, and supplemental dehumidification—not just thermostat offsets. Estimates: (407) 973-1523.',
  serviceIntro:
    'Warranty-adjacent frustration? We document findings clearly if builder or manufacturer follow-up is part of the path forward.',
  seoH2: 'Lake Nona AC service — Medical City HVAC & high-SEER installs',
  seoParagraphs: [
    'Searchers type “Lake Nona HVAC,” “Medical City AC repair,” and “Narcoossee air conditioning install”—this section owns those modifiers instead of diluting them into Orlando metro boilerplate.',
    'Aggressive ventilation and tight envelopes can swing indoor dew point fast—we test in real occupied conditions, not just startup spec sheets.',
    'Upgrading to a smarter stat? We commission equipment after programming so shorts cycles do not erase your efficiency gains.',
  ],
  faqs: [
    { q: 'Do you install high-efficiency AC in Lake Nona?', a: 'Yes. We install and service advanced systems sized to Lake Nona homes, including upgrades from builder baselines.' },
    { q: 'Can you service variable-speed systems?', a: 'Yes. We diagnose communicating controls, blower modules, and refrigerant circuits on modern equipment.' },
    { q: 'Is Lake Nona emergency HVAC available?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

export const baldwinParkData = createNeighborhoodData('Baldwin Park', 'baldwin-park', 'Orlando', 'orlando', {
  metaTitle: 'Baldwin Park AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Baldwin Park AC repair & heating near Lake Baldwin. Townhomes, single-family & 24/7 emergency HVAC. Licensed. (407) 973-1523.',
  heroTagline: 'Lake Baldwin loop · New Urbanism townhomes · east Orlando comfort',
  aboutPara1:
    'Baldwin Park AC repair mixes narrow-lot townhomes, stacked balconies over garages, and single-family homes wrapped around Lake Baldwin loops—each footprint cools differently under August humidity. Novation handles rooftop-adjacent noise concerns, tight chase ways, and HOA-sensitive outdoor units with Central Florida licensed HVAC repair and replacement.',
  aboutPara2:
    'Dog-friendly miles of trail mean more doors opening—if your system fights every afternoon, we check envelope leaks and blower capability, not only charge. Call (407) 973-1523.',
  serviceIntro:
    'Reserve-aware neighborhoods appreciate technicians who communicate arrival windows—we text when dispatch shifts.',
  seoH2: 'Baldwin Park AC repair — Lake Baldwin & east Orlando HVAC',
  seoParagraphs: [
    'Keywords: “Baldwin Park AC repair,” “Lake Baldwin HVAC,” “east Orlando townhome air conditioning.” Phrases are baked in without sounding robotic.',
    'Two-story homes with undersized returns mimic low refrigerant symptoms—we verify return air paths before condemning compressors.',
    'Planning a kitchen remodel that shifts load? Ask about manual J refresh so new systems are not guessed off old square footage.',
  ],
  faqs: [
    { q: 'Do you service townhomes in Baldwin Park?', a: 'Yes. We repair and replace systems in Baldwin Park, Lake Baldwin-adjacent homes, and east Orlando.' },
    { q: 'Can you work with HOA outdoor unit rules?', a: 'We document placement options and discuss sound and setback constraints during estimates.' },
    { q: 'Emergency AC repair near Lake Baldwin?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

export const thorntonParkData = createNeighborhoodData('Thornton Park', 'thornton-park', 'Orlando', 'orlando', {
  metaTitle: 'Thornton Park AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Thornton Park & Lake Eola–adjacent AC repair & heating. Downtown Orlando 24/7 emergency HVAC. Licensed. (407) 973-1523.',
  heroTagline: 'Lake Eola–adjacent · downtown Orlando walkable neighborhoods',
  aboutPara1:
    'Thornton Park AC repair ties to walkable downtown Orlando life: older bungalows, modern infill, and rooftop patios where someone always notices a weak vent first during Wine & Art stroll nights. Novation troubleshoots tight crawlspace and attic packages, mini-split add-ons for sunrooms, and heat pumps that fight latent humidity blocks from Lake Eola proximity.',
  aboutPara2:
    'Parking and alley access can slow the wrong truck—tell us if your compressor sits behind a gate so we dispatch smart. Same-day when possible: (407) 973-1523.',
  serviceIntro:
    'Downtown noise ordinances matter; we keep evening work practical and communicate when lifts or roofline access is required.',
  seoH2: 'Thornton Park AC repair — Lake Eola & downtown Orlando HVAC',
  seoParagraphs: [
    'High-intent searches: “Thornton Park AC repair,” “Lake Eola HVAC,” “downtown Orlando air conditioning repair.” This page keeps those phrases local, not Orlando-metro generic.',
    'Historic pier-and-beam homes hide sagging duct boots—we inspect connections when rooms “never cooled right.”',
    'Add-on cooling for flex spaces? Ductless options sometimes beat stretching an overloaded existing system.',
  ],
  faqs: [
    { q: 'Do you repair AC near Lake Eola?', a: 'Yes. We serve Thornton Park, Lake Eola–adjacent homes, and greater downtown Orlando.' },
    { q: 'Can you install ductless AC downtown?', a: 'Yes, when site conditions allow. We evaluate electrical capacity and facade constraints during estimates.' },
    { q: 'Emergency HVAC in downtown Orlando?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
  ],
});

export const collegeParkData = createNeighborhoodData('College Park', 'college-park', 'Orlando', 'orlando', {
  metaTitle: 'College Park AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'College Park AC repair & heating along Edgewater Drive & Ivanhoe. Bungalows, cottages & 24/7 emergency HVAC. (407) 973-1523.',
  heroTagline: 'Edgewater Drive cottages · Ivanhoe Village · northwest Orlando HVAC',
  aboutPara1:
    'College Park AC repair is classic northwest Orlando: oak-lined Edgewater Drive, cottage-scale lots, and Ivanhoe Village energy that packs restaurants next to aging duct boards. Novation fixes low airflow from collapsed flex in crawlspaces, upgrades filters without strangling vintage returns, and handles heat pumps that groan through humid shoulder weeks.',
  aboutPara2:
    'Tell us if you are closer to Princeton Street coffee runs or the north quarter toward I-4—it helps with realistic ETA communication. (407) 973-1523.',
  serviceIntro:
    'We respect older woodwork and tight gate paths; shoe covers and tidy coil work are standard.',
  seoH2: 'College Park AC repair — Edgewater Drive & Ivanhoe HVAC',
  seoParagraphs: [
    'Target phrases: “College Park AC repair,” “Ivanhoe Village HVAC,” “Edgewater Drive air conditioning.” Unique copy keeps distance from Baldwin Park townhomes and downtown high-rises.',
    'Historic homes often benefit from blower watt reductions after duct sealing—comfort climbs before tonnage does.',
    'Night setbacks that fight humidity? We tweak fan and dehumidify strategies for real Florida nights.',
  ],
  faqs: [
    { q: 'Do you service College Park Orlando FL?', a: 'Yes. Repair, maintenance, and replacement throughout College Park, Ivanhoe Village, and Edgewater corridors.' },
    { q: 'Can you improve cooling in older bungalows?', a: 'Yes. We inspect ducts, insulation interaction, and equipment sizing before recommending changes.' },
    { q: 'Same-day AC repair in College Park?', a: 'Call early—same-day depends on technician availability. Emergencies: (407) 973-1523.' },
  ],
});

// Kissimmee / Osceola area
export const celebrationData = createNeighborhoodData('Celebration', 'celebration', 'Kissimmee', 'kissimmee', {
  metaTitle: 'Celebration AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Celebration, FL AC repair & heating: town centers, condos & single-family. 24/7 emergency HVAC near Disney/Kissimmee. Licensed. (407) 973-1523.',
  heroTagline: 'Disney-area planned community · town centers · investor-ready HVAC',
  aboutPara1:
    'Celebration FL AC repair blends neo-traditional curb appeal with snowbird calendars, short-term-ready condos, and single-family streets where humidity control is non-negotiable after theme-park traffic heat. Novation maintains investor properties and owner-occupied homes with cooling repair, heat pump service, and upgrades that respect HOA exterior standards.',
  aboutPara2:
    'Front porches and alley-loaded garages change how we stage equipment—mention rear-lane access when booking. Service: (407) 973-1523.',
  serviceIntro:
    'Filter neglect in rentals shows up as frozen coils—we educate on MERV choices that survive Celebration pollen weeks.',
  seoH2: 'Celebration AC repair — planned community & Disney corridor HVAC',
  seoParagraphs: [
    'Dominant modifiers: “Celebration FL AC repair,” “Disney-area HVAC,” “Kissimmee planned community air conditioning.” These lines differentiate from generic Kissimmee/US-192 copy.',
    'Multi-story townhomes often need airflow balancing—not bigger tons—when upstairs lags.',
    'Dual-fuel curiosity? We walk through Florida economics honestly before you pay for hardware you will not run often.',
  ],
  faqs: [
    { q: 'Do you repair AC in Celebration Florida?', a: 'Yes. Full HVAC service throughout Celebration, Kissimmee routes, and greater Osceola County.' },
    { q: 'Can you service short-term rental HVAC?', a: 'Yes. Mention turnover schedules so we coordinate quieter service windows when possible.' },
    { q: 'Emergency AC repair Celebration FL?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

export const stCloudData = createNeighborhoodData('St. Cloud', 'st-cloud', 'Kissimmee', 'kissimmee', {
  metaTitle: 'St. Cloud AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'St. Cloud AC repair & heating: East Lake Toho, Narcoossee Road & historic downtown. 24/7 emergency Osceola County HVAC. (407) 973-1523.',
  heroTagline: 'East Lake Toho · Narcoossee Road · Osceola’s lake city HVAC',
  aboutPara1:
    'St. Cloud AC repair lives at the intersection of East Lake Toho humidity, Narcoossee Road growth corridors, and historic downtown blocks where tree cover fights afternoon heat gain. Novation dispatches Poinciana-based crews for no-cool triage, heat pumps, straight cools, and replacement quotes when capacitors become a monthly ritual.',
  aboutPara2:
    'Mention whether you are closer to the lakefront, Holopaw-bound rural routes, or Harmony-adjacent growth—it changes which van we stage. (407) 973-1523.',
  serviceIntro:
    'Lake breeze nights still spike latent loads indoors—we dehumidify strategically instead of overcooling blindly.',
  seoH2: 'St. Cloud AC repair — Lake Toho & Narcoossee HVAC keywords',
  seoParagraphs: [
    'Primary phrases: “St. Cloud AC repair,” “Narcoossee HVAC,” “East Lake Toho air conditioning.” Unique language avoids cloning Kissimmee’s 192 story line-for-line.',
    'Older lake homes may still run legacy refrigerant strategies—we outline ethical repair vs replace when leak history matters.',
    'Agricultural-adjacent dust loads clog filters faster—we recommend inspection intervals tied to your road type.',
  ],
  faqs: [
    { q: 'Do you provide AC repair in St. Cloud FL?', a: 'Yes. Cooling, heating, maintenance, and replacement across St. Cloud and Osceola County.' },
    { q: 'Emergency HVAC near East Lake Toho?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
    { q: 'Do you serve Narcoossee Road subdivisions?', a: 'Yes. Narcoossee-adjacent routes are part of our regular dispatch coverage.' },
  ],
});

export const buenaventuraLakesData = createNeighborhoodData('Buenaventura Lakes', 'buenaventura-lakes', 'Kissimmee', 'kissimmee', {
  metaTitle: 'Buenaventura Lakes AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Buenaventura Lakes (BVL) AC repair & heating off Thacker Road & Boggy Creek. 24/7 emergency HVAC. Licensed. (407) 973-1523.',
  heroTagline: 'BVL · Boggy Creek corridor · Kissimmee south Osceola HVAC',
  aboutPara1:
    'Buenaventura Lakes AC repair—locals say BVL—tracks Thacker Avenue corridors, Boggy Creek tree lines, and dense single-family streets where one weak capacitor takes out a whole house on a Friday. Novation serves south Kissimmee/Osceola pockets with HVAC repair, heat pump work, and replacements grounded in real dispatch from Poinciana.',
  aboutPara2:
    'If you are comparing “near me” results, look for Florida license CAC1823924 on any quote—we email proof on request. (407) 973-1523.',
  serviceIntro:
    'Pool pumps and lanai doors change sensible load; we ask lifestyle questions so comfort advice sticks.',
  seoH2: 'Buenaventura Lakes AC repair — BVL & Boggy Creek HVAC',
  seoParagraphs: [
    'Keywords anchored: “Buenaventura Lakes AC repair,” “BVL HVAC,” “Kissimmee south air conditioning.” That triad separates this URL from Celebration planned-community prose.',
    'Humidity spikes after coastal air pushes inland—thermostat droops mask duct leakage; we test supplies before swapping majors.',
    'Investor homes: lock in preseason maintenance so turnovers do not inherit frozen coils.',
  ],
  faqs: [
    { q: 'Do you repair AC in Buenaventura Lakes?', a: 'Yes. Full HVAC repair, maintenance, and replacement for BVL and surrounding Osceola County neighborhoods.' },
    { q: 'Emergency AC repair BVL?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
    { q: 'Do you serve Boggy Creek area homes?', a: 'Yes. Boggy Creek–adjacent routes are included in our regular coverage.' },
  ],
});

// Poinciana communities
export const village7Data = createNeighborhoodData('Village 7', 'village-7', 'Poinciana', 'poinciana', {
  metaTitle: 'Village 7 AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Village 7 long-tail: AC repair & heating in west Poinciana—not a clone of the main Poinciana city title. 34759. CAC1823924. (407) 973-1523.',
  heroTagline: 'West 34759 · Poinciana village loops · shortest dispatch from Novation base',
  aboutPara1:
    'Village 7 AC repair is hyperlocal Poinciana: west 34759 loops, mature palms, and split systems that have seen a decade or more of Florida summers. Novation literally stages from the same town—so response times and parts familiarity beat out-of-market franchises that “service Florida” on ads alone.',
  aboutPara2:
    'Village connectors and cul-de-sac loops help us route fast—text gate codes or tricky driveway notes when you book. (407) 973-1523.',
  serviceIntro:
    'Concrete-tile roofs and attic units define many visits—we plan ladder angles and attic-exit strategy before we promise timelines.',
  seoH2: 'Village 7 AC repair — west Poinciana 34759 HVAC',
  seoParagraphs: [
    'Keywords: “Village 7 AC repair,” “Poinciana 34759 HVAC,” “west Poinciana air conditioning.” Distinct from Crescent Lakes’ east-side lake story and the main Poinciana hub page.',
    'Hard water scale and low condensate flow ruin summers—we float-switch and flush drains proactively on tune-ups.',
    'Neighbor referrals across the loop? We still document each home independently—equipment age varies block to block.',
  ],
  faqs: [
    { q: 'Do you service Village 7 Poinciana?', a: 'Yes. We provide HVAC repair, maintenance, and replacement throughout Village 7 and Poinciana communities.' },
    { q: 'Is Novation based near Village 7?', a: 'Yes. Poinciana is our operational base, which keeps west 34759 on short routes.' },
    { q: 'Emergency AC repair 34759?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

export const crescentLakesData = createNeighborhoodData('Crescent Lakes', 'crescent-lakes', 'Poinciana', 'poinciana', {
  metaTitle: 'Crescent Lakes AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Crescent Lakes hyperlocal: east-side 34759 lakes & pool homes—distinct from Village 7 and from the Poinciana hub page. Licensed. (407) 973-1523.',
  heroTagline: 'East Poinciana · lake & pool parcels · humidity-heavy HVAC needs',
  aboutPara1:
    'Crescent Lakes AC repair means east-side Poinciana parcels where pool decks add radiant load, lake breezes lie about indoor humidity, and guest-house mini-splits operate beside main-house heat pumps. Novation approaches each parcel as its own load story—not a carbon copy of Village 7 blocks miles west.',
  aboutPara2:
    'Screen enclosures and sliding-glass traffic change how latent load shows up—we tune fan and dehum strategies instead of blindly lowering setpoints. (407) 973-1523.',
  serviceIntro:
    'Storm weeks fill our drain-line tickets—ask about proactive algaecide tablets where appropriate.',
  seoH2: 'Crescent Lakes AC repair — east 34759 lakeside HVAC',
  seoParagraphs: [
    'Primary phrases: “Crescent Lakes AC repair,” “east Poinciana HVAC,” “34759 lakeside air conditioning.” Unique copy protects this URL from Village 7’s west-side positioning.',
    'Dual systems (main house + casita) need coordinated maintenance—we log filter sizes per air handler.',
    'Outdoor cabinets near lake mist see faster coil corrosion; we inspect heat transfer surfaces candidly.',
  ],
  faqs: [
    { q: 'Do you repair AC in Crescent Lakes Poinciana?', a: 'Yes. Cooling, heating, and maintenance across Crescent Lakes and greater Poinciana.' },
    { q: 'Pool home humidity problems?', a: 'We evaluate latent load, ventilation balances, and equipment staging before upsizing tons.' },
    { q: 'Emergency HVAC Crescent Lakes?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
  ],
});

// Orange County areas
export const winterGardenData = createNeighborhoodData('Winter Garden', 'winter-garden', 'Orange County', 'orange-county', {
  metaTitle: 'Winter Garden AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Winter Garden AC repair & heating: Plant Street, downtown WG & SR-429 corridor. 24/7 emergency West Orange HVAC. (407) 973-1523.',
  heroTagline: 'Plant Street downtown · West Orange growth · SR-429 commuter HVAC',
  aboutPara1:
    'Winter Garden AC repair lines up with farmers-market Saturdays on Plant Street, downtown WG events that pack sidewalks, and SR-429 commuter sprawl where new construction runs tight MERV filters on variable-speed gear. Novation services historic cottages and new townhome blocks alike with licensed repair, humidity-smart tune-ups, and replacements when long-term math beats patches.',
  aboutPara2:
    'West Orange afternoon storms hit outdoor disconnects and low-voltage bundles hard—if your stat went “blank” after lightning, mention it when you call. (407) 973-1523.',
  serviceIntro:
    'The Garden Theatre crowd deserves quiet outdoor units—sound data matters on zero-lot-line installs.',
  seoH2: 'Winter Garden AC repair — Plant Street & West Orange HVAC',
  seoParagraphs: [
    'Search clusters: “Winter Garden AC repair,” “Plant Street HVAC,” “West Orange County air conditioning.” Language stays separate from Orlando metro and Apopka north-Orange pages.',
    'Mixed old-and-new housing stock complicates “just match the neighbor’s tonnage”—we measure insulation and window reality.',
    'Small business suites near downtown? Limited commercial slots—describe rooftop access when inquiring.',
  ],
  faqs: [
    { q: 'Do you offer AC repair in Winter Garden FL?', a: 'Yes. HVAC repair, maintenance, and replacement throughout Winter Garden and West Orange County.' },
    { q: 'SR-429 area new construction HVAC?', a: 'Yes. We service and upgrade newer systems with a focus on commissioning and airflow verification.' },
    { q: 'Emergency AC near downtown Winter Garden?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

export const ocoeeData = createNeighborhoodData('Ocoee', 'ocoee', 'Orange County', 'orange-county', {
  metaTitle: 'Ocoee AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Ocoee AC repair & heating: West Colonial Drive, Clarke Road & Forest Lake. 24/7 emergency West Orange HVAC. (407) 973-1523.',
  heroTagline: 'West Colonial corridor · Clarke Road neighborhoods · Forest Lake area comfort',
  aboutPara1:
    'Ocoee AC repair tracks West Colonial commuter heat islands, Clarke Road retail hum, and Forest Lake-adjacent homes where afternoon attic temps roast supply ducts. Novation brings Central Florida licensed HVAC repair, honest replacement quotes, and preseason maintenance that catches weak capacitors before holiday weekends.',
  aboutPara2:
    'If your community has a named lake or trailhead near your home, drop it in the notes—we refine routing on busy afternoons. (407) 973-1523.',
  serviceIntro:
    'Garage-located air handlers are common here—we check condensate safety and fire-door clearances on every visit.',
  seoH2: 'Ocoee AC repair — West Colonial & Clarke Road HVAC',
  seoParagraphs: [
    'Keywords: “Ocoee AC repair,” “West Colonial HVAC,” “Forest Lake air conditioning.” Different anchors than Winter Garden’s Plant Street story.',
    'Two-story plans with single central return “work” until July—we test static pressure before upselling equipment.',
    'Allergy season plus road dust pushes MERV higher—too high without surface area starves blowers; we balance filtration with measured ESP.',
  ],
  faqs: [
    { q: 'Do you service Ocoee FL for AC repair?', a: 'Yes. Repair, maintenance, and replacement throughout Ocoee and West Orange County.' },
    { q: 'Emergency HVAC West Colonial corridor?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
    { q: 'Heat pump service in Ocoee?', a: 'Yes. Heat pump diagnostics and defrost troubleshooting are part of our regular work.' },
  ],
});

export const apopkaData = createNeighborhoodData('Apopka', 'apopka', 'Orange County', 'orange-county', {
  metaTitle: 'Apopka AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Apopka AC repair & heating: Rock Springs, Kelly Park area & SR-436 corridor. 24/7 emergency North Orange HVAC. (407) 973-1523.',
  heroTagline: 'North Orange · Kelly Park / Rock Springs nature belt · SR-436 HVAC',
  aboutPara1:
    'Apopka AC repair mixes north Orange suburban expansion, Kelly Park / Rock Springs outdoor traffic that tracks dust indoors, and Maitland-border neighborhoods where oak pollen defines filter calendars. Novation serves Apopka with HVAC repair, humidity-aware maintenance, and equipment upgrades when repair cost exceeds sensible life.',
  aboutPara2:
    'Rural-leaning lots on the north side may still pack tight equipment pads—tell us about side-yard clearance for coil cleaning. (407) 973-1523.',
  serviceIntro:
    'We bond with customers who hike—we get why you want clean IAQ when trail dust follows you home.',
  seoH2: 'Apopka AC repair — north Orange & SR-436 HVAC keywords',
  seoParagraphs: [
    'Intent phrases: “Apopka AC repair,” “Kelly Park area HVAC,” “Rock Springs air conditioning service.” This content avoids recycling Winter Garden and Ocoee paragraphs.',
    'Older split systems near 436 commercial edges battle electrical brownouts—we test voltage stability before condemning motors.',
    'Zoned layouts with retrofitted dampers need commissioning passes—noise and whistling usually mean airflow math was skipped.',
  ],
  faqs: [
    { q: 'Do you repair AC in Apopka Florida?', a: 'Yes. Cooling, heating, maintenance, and replacement across Apopka and north Orange County.' },
    { q: 'Emergency AC repair near SR-436?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
    { q: 'Do you serve Maitland-border streets from Apopka?', a: 'Yes. Describe your nearest major intersection when booking for fastest routing.' },
  ],
});

// Polk County
export const lakelandData = createNeighborhoodData('Lakeland', 'lakeland', 'Polk County', 'polk-county', {
  metaTitle: 'Lakeland AC Repair Near You | Same-Day AC Repair | Novation',
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
  metaTitle: 'Bay Hill AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Bay Hill & Dr. Phillips AC repair & heating near championship golf. Southwest Orlando 24/7 emergency HVAC. Licensed. (407) 973-1523.',
  heroTagline: 'Arnold Palmer legacy area · golf-adjacent estates · Dr. Phillips pocket HVAC',
  aboutPara1:
    'Bay Hill AC repair is tightly wound around golf-course setbacks, estate setbacks, and southwest Orlando expectations for quiet HVAC performance. Novation services the Arnold Palmer area pocket with premium equipment expertise—variable-capacity cooling, humidity targeting, and rapid no-cool triage when tournament traffic and Florida heat stack stress on your schedule.',
  aboutPara2:
    'Dr. Phillips city page covers the wider submarket; this URL speaks Bay Hill explicitly—call (407) 973-1523 with community gate details.',
  serviceIntro:
    'Landscape-grade sound blankets and proper pad isolation keep neighbors and HOA planners happier—we plan installs, not just swaps.',
  seoH2: 'Bay Hill AC repair — Arnold Palmer area & Dr. Phillips HVAC',
  seoParagraphs: [
    'Keywords: “Bay Hill AC repair,” “Arnold Palmer area HVAC,” “Dr. Phillips golf estate air conditioning.” Not interchangeable with broad Orlando metro copy.',
    'Secondary water heaters and pool heaters can rob panel capacity—electrical verification precedes inverter upgrades.',
    'Zoned cooling for wine rooms or gym spaces? We quantify loads instead of guessing BTU from room labels.',
  ],
  faqs: [
    { q: 'Do you repair AC in Bay Hill Orlando?', a: 'Yes. Residential HVAC repair, maintenance, and replacement for Bay Hill and surrounding Dr. Phillips estates.' },
    { q: 'Premium equipment diagnostics?', a: 'Yes. We service advanced variable-speed and communicating systems common in luxury homes.' },
    { q: 'Emergency HVAC Bay Hill FL?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
  ],
});

// Altamonte Springs area
export const longwoodData = createNeighborhoodData('Longwood', 'longwood', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'Longwood AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Longwood AC repair & heating: Wekiva Springs, SR-434 & I-4 access. 24/7 emergency Seminole/north Orange HVAC. (407) 973-1523.',
  heroTagline: 'Wekiva Springs recreation belt · SR-434 · Seminole County HVAC',
  aboutPara1:
    'Longwood AC repair connects to Wekiva Springs recreation traffic, SR-434/I-4 commuter pulses, and wooded lots where outdoor units fight leaf litter and pollen spikes harder than downtown concrete canyons. Novation dispatches Seminole/north Orange routes for heat pumps, straight cool systems, and humidity complaints that trace back to duct leakage—not thermostat fantasy.',
  aboutPara2:
    'Historic Longwood pockets vs new infill means wildly different efficiency expectations—we document both honestly. (407) 973-1523.',
  serviceIntro:
    'Trail runners and paddle crowds come home sticky—we respect that IAQ upgrades must survive real Central Florida doors opening daily.',
  seoH2: 'Longwood AC repair — Wekiva Springs & I-4 corridor HVAC',
  seoParagraphs: [
    'Phrase targets: “Longwood AC repair,” “Wekiva Springs HVAC,” “SR-434 air conditioning.” Separate copy from Altamonte’s Cranes Roost density story.',
    'Crawlspace and low-profile attic paths dominate older homes—knee space matters for coil pulls; we do not guess truck inventory.',
    'Blown-in insulation touching flex duct? We flag crush risk before you pay for unrelated “low refrigerant” fixes.',
  ],
  faqs: [
    { q: 'Do you service Longwood FL HVAC?', a: 'Yes. Repair, maintenance, and replacement throughout Longwood and north Seminole County routes.' },
    { q: 'Emergency HVAC near Wekiva Springs?', a: 'Call (407) 973-1523 for emergency cooling when technicians are available.' },
    { q: 'Heat pump repair Longwood?', a: 'Yes. Heat pump diagnostics are a core part of our Florida workflow.' },
  ],
});

export const sanfordData = createNeighborhoodData('Sanford', 'sanford', 'Altamonte Springs', 'altamonte-springs', {
  metaTitle: 'Sanford AC Repair Near You | Same-Day AC Repair | Novation',
  metaDescription:
    'Sanford AC repair & heating: lakefront, historic downtown & Seminole Towne Center. 24/7 emergency HVAC. (407) 973-1523.',
  heroTagline: 'Lake Monroe · historic riverwalk · Seminole Towne Center corridors',
  aboutPara1:
    'Sanford AC repair pairs lake breeze marketing with Florida reality: Lake Monroe humidity, historic brick storefronts with retrofit ducts, and Seminole Towne Center traffic corridors where heat islands stress rooftop package units on small retail pads. Novation brings licensed residential HVAC and select light commercial support when capacity allows.',
  aboutPara2:
    'Airport-adjacent noise concerns and tight alley access downtown—tell us the quirks up front so we quote time honestly. (407) 973-1523.',
  serviceIntro:
    'Riverwalk event weekends mean parking creativity; we coordinate so you are not guessing arrival inside a festival footprint.',
  seoH2: 'Sanford AC repair — Lake Monroe & downtown Seminole HVAC',
  seoParagraphs: [
    'Keyword stack: “Sanford AC repair,” “Lake Monroe HVAC,” “Seminole Towne Center air conditioning.” Distinct anchors from Longwood’s Wekiva story.',
    'Older two-story downtown conversions fight return air paths—we test upstairs static before selling new condensers.',
    'Retail tenants: describe tonnage, ladder access, and after-hours needs—commercial tickets are limited.',
  ],
  faqs: [
    { q: 'Do you repair AC in Sanford FL?', a: 'Yes. Residential HVAC throughout Sanford and greater Seminole County.' },
    { q: 'Lakefront home humidity help?', a: 'We evaluate ventilation, latent loads, and equipment staging for Monroe-adjacent parcels.' },
    { q: 'Emergency HVAC Sanford downtown?', a: 'Call (407) 973-1523 for emergency service when technicians are available.' },
  ],
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
