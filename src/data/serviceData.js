// AC/Cooling vector SVG
const coolingSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="coolGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#3498db"/><stop offset="100%" style="stop-color:#2980b9"/></linearGradient></defs>
  <circle cx="100" cy="100" r="80" fill="url(#coolGrad)" opacity="0.2"/>
  <path d="M100 30 L120 90 L100 85 L80 90 Z" fill="#3498db"/>
  <path d="M100 170 L80 110 L100 115 L120 110 Z" fill="#2980b9"/>
  <circle cx="100" cy="100" r="25" fill="none" stroke="#2980b9" stroke-width="4"/>
  <path d="M70 100 L130 100 M100 70 L100 130" stroke="#2980b9" stroke-width="3"/>
</svg>`;

// Furnace / heat pump vector SVG - for "Furnace Repair & Heat Pump Installation" section
const furnaceVectorSvg = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="furnaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e67e22"/>
      <stop offset="100%" style="stop-color:#d35400"/>
    </linearGradient>
    <linearGradient id="heatWave" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" style="stop-color:#e67e22;stop-opacity:0.4"/>
      <stop offset="100%" style="stop-color:#e67e22;stop-opacity:0"/>
    </linearGradient>
  </defs>
  <!-- Furnace/duct unit body -->
  <rect x="80" y="60" width="120" height="90" rx="8" fill="url(#furnaceGrad)" stroke="#d35400" stroke-width="2"/>
  <rect x="90" y="75" width="40" height="25" rx="4" fill="#fff" opacity="0.3"/>
  <rect x="150" y="75" width="40" height="25" rx="4" fill="#fff" opacity="0.3"/>
  <!-- Heat waves rising -->
  <path d="M70 150 Q100 130 130 150 Q160 130 190 150 Q220 130 250 150" fill="none" stroke="url(#heatWave)" stroke-width="12" stroke-linecap="round"/>
  <path d="M60 165 Q100 145 140 165 Q180 145 220 165 Q260 145 300 165" fill="none" stroke="url(#heatWave)" stroke-width="10" stroke-linecap="round"/>
  <!-- Flame icon -->
  <path d="M100 120 L110 95 L120 120 L110 105 L100 120" fill="#fff" opacity="0.9"/>
  <path d="M160 120 L170 95 L180 120 L170 105 L160 120" fill="#fff" opacity="0.9"/>
  <!-- Duct lines -->
  <line x1="140" y1="50" x2="140" y2="60" stroke="#d35400" stroke-width="4"/>
  <rect x="120" y="35" width="40" height="25" rx="4" fill="#c0392b" opacity="0.8"/>
</svg>`;

// Heating maintenance vector SVG
const heatingSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#e67e22"/><stop offset="100%" style="stop-color:#d35400"/></linearGradient></defs>
  <circle cx="100" cy="100" r="80" fill="url(#heatGrad)" opacity="0.2"/>
  <path d="M100 40 L100 160 M85 70 L100 55 L115 70 M85 100 L100 85 L115 100 M85 130 L100 115 L115 130" stroke="#e67e22" stroke-width="6" fill="none" stroke-linecap="round"/>
  <circle cx="100" cy="100" r="15" fill="#e67e22"/>
</svg>`;

// IAQ vector SVG
const iaqSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="iaqGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#27ae60"/><stop offset="100%" style="stop-color:#2ecc71"/></linearGradient></defs>
  <circle cx="100" cy="100" r="80" fill="url(#iaqGrad)" opacity="0.2"/>
  <path d="M60 100 Q100 60 140 100 Q100 140 60 100" fill="none" stroke="#27ae60" stroke-width="4"/>
  <circle cx="100" cy="100" r="20" fill="#2ecc71" opacity="0.6"/>
  <path d="M90 100 L100 90 L110 100 L100 110 Z" fill="#27ae60"/>
</svg>`;

export const coolingData = {
  metaTitle: 'Central Florida AC Repair & Cooling | Maintenance | Novation',
  metaDescription:
    'AC repair, tune-ups, and cooling service across Central Florida, including Orlando, Kissimmee, Polk, and Osceola routes. 24/7 emergency. Licensed CAC1823924. (407) 973-1523.',
  heroTitle: 'Central Florida AC Repair & Cooling Services',
  heroTagline: 'Primary focus: diagnose and repair first. Request a replacement estimate when the system is at the end of its service life.',
  heroImage: '/images/cooling-ac.png',
  breadcrumbName: 'Cooling',
  relatedLinks: [
    { to: '/ac-installation-replacement', label: 'Residential AC installation and replacement' },
    { to: '/emergency-ac-repair', label: '24/7 emergency AC repair' },
    { to: '/book-appointment', label: 'Book an appointment' },
  ],
  sections: [
    {
      title: 'AC Repair and Cooling Service',
      paragraphs: [
        'When you need AC repair or cooling work anywhere we dispatch, from Orlando and Kissimmee to Poinciana, Winter Haven, and Lakeland, Novation delivers. Our technicians prioritize accurate diagnosis and repair. This page is about cooling service regionally, not a single-city landing.',
        'From ductless mini-split repair to central air service, we handle cooling systems homeowners already have. Same-day AC repair is available when the schedule allows. 24/7 emergency cooling service when you need it most. Licensed (CAC1823924), bonded, and insured. If you are comparing a new system, use the replacement estimate page.',
      ],
      image: '/images/cooling-ac.png',
      alt: 'Outdoor air conditioning equipment serviced by Novation HVAC',
    },
    {
      title: 'Preventive Cooling Maintenance',
      paragraphs: [
        'Regular AC maintenance extends system life and prevents costly repairs. Our cooling tune-ups include refrigerant checks, coil cleaning, filter replacement, and full system inspection. Schedule your AC maintenance today and stay cool all season.',
        'Florida summers demand reliable cooling. Do not wait for a breakdown. Proactive HVAC maintenance helps catch problems early and keeps your home comfortable. Ask about our maintenance plans.',
      ],
      svg: coolingSvg,
    },
  ],
  faqs: [
    { q: 'How much does AC repair cost?', a: 'AC repair costs vary by issue. We offer free estimates and transparent pricing. Most repairs are completed same-day.' },
    { q: 'Do you offer 24/7 emergency AC repair?', a: 'Yes. Our team provides 24-hour emergency cooling repair throughout Central Florida.' },
    { q: 'What areas do you serve?', a: 'We serve Orlando, Kissimmee, Poinciana, Winter Haven, Auburndale, Haines City, Dr. Phillips, Windermere, Altamonte Springs, and all of Central Florida.' },
    { q: 'Do you replace AC systems?', a: 'Yes. Use the AC installation and replacement page to request a free residential estimate, or call (407) 973-1523.' },
  ],
};

export const heatingData = {
  metaTitle: 'Central Florida Heating Repair & Furnace Service | Heat Pumps | Novation',
  metaDescription:
    'Heating-first: furnace and heat pump repair, safety checks, and new heating equipment across Central Florida. 24/7 emergency when available. Licensed CAC1823924. (407) 973-1523.',
  heroTitle: 'Heating Repair & Furnace Services, Central Florida',
  heroTagline: 'Repairs and tune-ups first. New heat pumps and furnaces when replacement is the right call.',
  breadcrumbName: 'Heating',
  relatedLinks: [
    { to: '/ac-installation-replacement', label: 'Residential AC and heat pump replacement estimate' },
    { to: '/cooling', label: 'Cooling and AC repair' },
  ],
  heroImage: 'https://images.unsplash.com/photo-1631545914468-f0f4ac229661?w=1920&q=80',
  sections: [
    {
      title: 'Furnace Repair & Heat Pump Installation',
      paragraphs: [
        'Novation provides furnace repair, heat pump service, and heating installations throughout Central Florida. When temperatures drop, we focus on safe, efficient operation—regional heating expertise, not one metro page.',
        'From gas furnace repair to electric heat pump installation, we service all heating systems. Same-day heating repair available. 24/7 emergency furnace service. Licensed (CAC1823924), bonded, and insured for your peace of mind.',
      ],
      svg: furnaceVectorSvg,
    },
    {
      title: 'Heating System Maintenance',
      paragraphs: [
        'Annual heating maintenance ensures your furnace or heat pump runs efficiently and safely. Our tune-ups include burner inspection, filter replacement, thermostat checks, and safety testing. Schedule before the cold season.',
        'Preventive heating maintenance reduces breakdowns and extends system life. Ask about our maintenance plans for year-round comfort and savings.',
      ],
      svg: heatingSvg,
    },
  ],
  faqs: [
    { q: 'Do you repair gas and electric furnaces?', a: 'Yes. We service gas furnaces, electric furnaces, heat pumps, and all heating system types.' },
    { q: 'Is emergency heating repair available?', a: 'Yes. We offer 24/7 emergency furnace and heating repair throughout Central Florida.' },
    { q: 'When should I schedule heating maintenance?', a: 'We recommend scheduling heating maintenance in the fall, before the cold season begins.' },
  ],
};

export const indoorAirQualityData = {
  metaTitle: 'Indoor Air Quality | Central Florida IAQ | Novation',
  metaDescription:
    'IAQ-focused services: filtration, humidity control, and air purification—separate from generic AC repair pages. Central Florida. Licensed CAC1823924. (407) 973-1523.',
  heroTitle: 'Indoor Air Quality Services',
  heroTagline: 'Filtration, purification, and humidity. Not a substitute for your city AC repair page.',
  breadcrumbName: 'Indoor Air Quality',
  relatedLinks: [
    { to: '/cooling', label: 'Cooling and AC repair' },
    { to: '/ac-installation-replacement', label: 'AC installation and replacement' },
  ],
  heroImage: '/images/air-quality-hvac.png',
  sections: [
    {
      title: 'Air Purification & Filtration',
      paragraphs: [
        'Breathe easier with dedicated IAQ work: whole-home filtration, UV options, and humidity control for homes and businesses across Central Florida. Pair these with your existing HVAC system—see city pages for AC repair and install priorities.',
        'Poor filtration and humidity imbalances affect comfort and health. Our IAQ solutions include UV air purifiers, whole-home filtration, duct sealing, and dehumidifiers. Licensed (CAC1823924) and trusted throughout Florida.',
      ],
      image: '/images/air-quality-hvac.png',
    },
    {
      title: 'Humidity Control & Ventilation',
      paragraphs: [
        'Florida humidity can cause mold, allergens, and discomfort. We install dehumidifiers, humidifiers, and ventilation systems to balance indoor humidity levels. Proper humidity control protects your HVAC system and improves air quality.',
        'From whole-home dehumidification to ERV/HRV ventilation, we tailor IAQ solutions to your needs. Free estimates and same-day service available.',
      ],
      svg: iaqSvg,
    },
  ],
  faqs: [
    { q: 'Do you install air purifiers?', a: 'Yes. We install UV air purifiers, HEPA filtration, and whole-home air purification systems.' },
    { q: 'What causes poor indoor air quality?', a: 'Common causes include inadequate filtration, high humidity, and poor ventilation. We can assess and recommend solutions.' },
    { q: 'Can you help with Florida humidity problems?', a: 'Yes. We install dehumidifiers, humidifiers, and ventilation systems to balance indoor humidity and protect your HVAC system.' },
  ],
};
