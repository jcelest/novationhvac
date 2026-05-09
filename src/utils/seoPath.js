import { SITE_URL } from './seoConstants';

/** Strip trailing slashes for canonical URLs (matches Vercel trailingSlash: false). */
export function canonicalUrlFromPathname(pathname) {
  if (!pathname || pathname === '/') return `${SITE_URL}/`;
  const trimmed = pathname.replace(/\/+$/, '');
  return `${SITE_URL}${trimmed}`;
}
