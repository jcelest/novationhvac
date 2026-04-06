# Changelog — Novation HVAC (novationhvac.com)

## Emphasis markets (prioritized)

Strategic URLs and inventory alignment:

| URL | Notes |
|-----|--------|
| `/poinciana` | Home base / 34759; hub & nav “company home base” language |
| `/orlando` | Metro Orlando HVAC |
| `/winter-haven` | Polk / Chain of Lakes city landing |
| `/lakeland` | **Neighborhood route only** — no duplicate city template (`/lakeland` pattern per inventory) |

**Mechanisms:** `src/data/emphasisServiceAreas.js` (hub + hero + footer), `/service-areas` primary block, `scripts/routes.config.json` `primaryCitySlugs`: `orlando`, `kissimmee`, `poinciana`, `winter-haven` (sitemap priority 0.9). `/lakeland` remains neighborhood slug at 0.8 (note in config).

---

## Files touched (high level)

- **Global:** `src/App.jsx` (Helmet + site-wide JSON-LD), `index.html`, `src/data/organizationJsonLd.js`
- **Home:** `src/utils/seoConstants.js`, `src/components/Hero.jsx`, `Hero.css`, `About.jsx`, `About.css`
- **Nav / footer:** `Header.jsx`, `Header.css`, `Footer.jsx`, `Footer.css`
- **Landings:** `CityLanding.jsx`, `CityLanding.css`, `NeighborhoodLanding.jsx`, `src/components/CityHeroLcpImage.jsx` (LCP hero img)
- **Data:** `cityData.js`, `neighborhoodData.js`, `serviceData.js`, `serviceAreasData.js`, `emphasisServiceAreas.js`, `geoUpLinks.js`, `geoInternalLinks.jsx`, `GeoInternalLinks.css`, `schemaBreadcrumb.js`
- **Pages:** `ServiceAreasPage.jsx`, `ServiceAreasPage.css`, `EmergencyACPage.jsx`
- **Config / build:** `scripts/routes.config.json`, `public/sitemap.xml` (generated)
- **Docs:** `docs/GEO_ROUTING_FACTS.md`

---

## Page coverage (~40 sitemap URLs)

- **10 static** (incl. `/`) — homepage copy/SEO; service-areas, cooling/heating/iaq, emergency, etc.
- **12 city** — all use `CityLanding` + `cityData`
- **18 neighborhood** — all use `NeighborhoodLanding` + `neighborhoodData` (includes `/lakeland`)

Shared layout components (Header/Footer) and app-wide JSON-LD affect every route.

---

## SEO / product decisions (no 301/canonical merges by default)

- Keyword differentiation: titles/meta/H1/body by cluster (Orlando vs Orange County vs service routes vs emergency).
- Single `HVACContractor` JSON-LD; `areaServed` + `serviceArea` (no fake per-city storefronts).
- Internal links: emphasis cities + `/service-areas` hub; `geoUpLinks.js` for non-emphasis “up” links.

---

## Performance

- City/neighborhood hero: CSS background → responsive `<img>` + `fetchPriority` + `srcset` (`CityHeroLcpImage.jsx`).
- Homepage hero: added 1280w to `srcset`; `preconnect` to `images.unsplash.com` in `index.html`.

---

## Owner approval recommended

- Service radius (`GeoCircle` / `areaServed`), hours & “24/7” / same-day wording, free estimates, license **CAC1823924**, Poinciana address without street in JSON-LD, financing/veteran offers.

---

## Verification (post-deploy)

1. **View source:** `<title>` + `<meta name="description">` for `/`, `/orlando`, `/winter-haven`, `/lakeland`, `/poinciana`.
2. **Rich Results Test:** one coherent business JSON-LD.
3. **Optional:** Search Console URL Inspection for canonical `https://novationhvac.com/...`.
