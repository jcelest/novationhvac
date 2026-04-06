import { SITE_URL } from './seoConstants';

/**
 * BreadcrumbList JSON-LD for city / area pages (existing URLs only).
 * @param {{ name: string, path: string }[]} items — path like '/' or '/orlando'
 */
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  };
}
