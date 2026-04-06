/**
 * Primary markets (inventory URLs). Used for hub, homepage, nav, and footer emphasis links.
 */
export const EMPHASIS_SERVICE_SLUGS = ['poinciana', 'orlando', 'winter-haven', 'lakeland'];

export const EMPHASIS_SERVICE_AREAS = [
  { to: '/poinciana', label: 'AC repair & HVAC in Poinciana, FL' },
  { to: '/orlando', label: 'AC repair & HVAC in Orlando, FL' },
  { to: '/winter-haven', label: 'AC repair & HVAC in Winter Haven, FL' },
  { to: '/lakeland', label: 'AC repair & HVAC in Lakeland, FL' },
];

export const SERVICE_AREAS_HUB = {
  path: '/service-areas',
  label: 'Areas we serve',
  /** Longer label for sentence context (hero, hub CTA) */
  labelLong: 'Browse all areas we serve',
};
