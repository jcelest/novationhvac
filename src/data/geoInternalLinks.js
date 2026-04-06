/**
 * Internal links between emphasis markets + home base (Poinciana).
 * Keys must match existing route slugs only — verified in App.jsx + neighborhoodData.
 */
export const GEO_INTERNAL_LINKS = {
  orlando: [
    { to: '/poinciana', label: 'Poinciana — company home base' },
    { to: '/winter-haven', label: 'Winter Haven' },
    { to: '/lakeland', label: 'Lakeland' },
  ],
  'winter-haven': [
    { to: '/poinciana', label: 'Poinciana — company home base' },
    { to: '/orlando', label: 'Orlando' },
    { to: '/lakeland', label: 'Lakeland' },
  ],
  poinciana: [
    { to: '/orlando', label: 'Orlando' },
    { to: '/winter-haven', label: 'Winter Haven' },
    { to: '/lakeland', label: 'Lakeland' },
  ],
  lakeland: [
    { to: '/poinciana', label: 'Poinciana — company home base' },
    { to: '/winter-haven', label: 'Winter Haven' },
    { to: '/orlando', label: 'Orlando' },
  ],
};
