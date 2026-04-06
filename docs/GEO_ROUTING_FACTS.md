# novationhvac.com — geography / routing (facts — do not contradict)

- **Lakeland:** Only `/lakeland` (neighborhood pattern). `/polk-county` covers Lakeland in prose. No `/lakeland` “city template” like `/orlando` or `/winter-haven` — structural asymmetry is intentional/known, not a bug.

- **Winter Haven:** Single `/winter-haven`; no Orlando-style micro-route chain.

- **Orlando:** City + county + neighborhood routes — full metro coverage.

- **Poinciana:** City + two community pages; homepage/service-areas list geography.

- **Service routes** (`/cooling`, `/heating`, …) are not city landings; city mentions only as supporting copy/lists.

## Sitemap

`scripts/routes.config.json` → `primaryCitySlugs` = **orlando, kissimmee, poinciana** only. Winter Haven / Lakeland are **not** in `primaryCitySlugs` — may update for business priority; **do not** treat as “missing routes.”

## Emphasis (Orlando / Winter Haven / Lakeland / Poinciana)

Prefer **metadata, internal links, copy depth, and primaryCitySlugs/sitemap priority** — **do not** invent new city URLs unless the user explicitly requests new routes.
