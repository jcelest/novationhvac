/**
 * City & neighborhood landings previously used a CSS background image (late discovery, no srcset).
 * Real <img> improves LCP: early fetch, responsive widths, fetchPriority.
 */
const CITY_HERO_UNSPLASH =
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e';

export default function CityHeroLcpImage() {
  const base = CITY_HERO_UNSPLASH;
  return (
    <img
      src={`${base}?w=800&q=75`}
      srcSet={`${base}?w=800&q=75 800w, ${base}?w=1280&q=78 1280w, ${base}?w=1920&q=80 1920w`}
      sizes="100vw"
      alt=""
      fetchPriority="high"
      decoding="async"
      className="city-hero-lcp-img"
    />
  );
}
