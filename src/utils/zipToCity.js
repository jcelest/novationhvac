/**
 * Maps Central Florida zip codes to city landing page routes.
 * Used by the "Find Location" feature in the navbar.
 */
const ZIP_TO_ROUTE = {
  // Poinciana (specific - check before Kissimmee)
  34759: '/poinciana',

  // Kissimmee / Osceola
  34734: '/kissimmee',
  34739: '/kissimmee',
  34741: '/kissimmee',
  34742: '/kissimmee',
  34743: '/kissimmee',
  34744: '/kissimmee',
  34745: '/kissimmee',
  34746: '/kissimmee',
  34747: '/kissimmee',
  34758: '/kissimmee',
  34769: '/osceola-county',
  34772: '/osceola-county',
  34773: '/osceola-county',

  // Orlando / Orange County
  32801: '/orlando',
  32802: '/orlando',
  32803: '/orlando',
  32804: '/orlando',
  32805: '/orlando',
  32806: '/orlando',
  32807: '/orlando',
  32808: '/orlando',
  32809: '/orlando',
  32810: '/orlando',
  32811: '/orlando',
  32812: '/orlando',
  32814: '/orlando',
  32817: '/orlando',
  32818: '/orlando',
  32819: '/dr-phillips',
  32820: '/orlando',
  32821: '/orlando',
  32822: '/orlando',
  32824: '/orlando',
  32825: '/orlando',
  32826: '/orlando',
  32827: '/orlando',
  32828: '/orlando',
  32829: '/orlando',
  32830: '/orlando',
  32831: '/orlando',
  32832: '/dr-phillips',
  32833: '/orlando',
  32834: '/orlando',
  32835: '/orlando',
  32836: '/dr-phillips',
  32837: '/orlando',
  32839: '/orlando',

  // Windermere
  34786: '/windermere',

  // Altamonte Springs / Seminole
  32701: '/altamonte-springs',
  32714: '/altamonte-springs',
  32715: '/altamonte-springs',
  32708: '/orange-county',
  32712: '/orange-county',
  32716: '/orange-county',
  32730: '/orange-county',
  32746: '/orange-county',
  32750: '/orange-county',
  32751: '/orange-county',
  32757: '/orange-county',
  32765: '/orange-county',
  32766: '/orange-county',
  32771: '/orange-county',
  32772: '/orange-county',
  32773: '/orange-county',
  32776: '/orange-county',
  32779: '/orange-county',
  32789: '/orange-county',
  32790: '/orange-county',
  32792: '/orange-county',
  32793: '/orange-county',
  32794: '/orange-county',
  32795: '/orange-county',
  32796: '/orange-county',
  32798: '/orange-county',
  32799: '/orange-county',

  // Polk County - Winter Haven
  33880: '/winter-haven',
  33881: '/winter-haven',
  33884: '/winter-haven',

  // Polk County - Auburndale
  33823: '/auburndale',

  // Polk County - Haines City
  33844: '/haines-city',
  33845: '/haines-city',

  // Polk County - other
  33801: '/polk-county',
  33802: '/polk-county',
  33803: '/polk-county',
  33804: '/polk-county',
  33805: '/polk-county',
  33806: '/polk-county',
  33807: '/polk-county',
  33809: '/polk-county',
  33810: '/polk-county',
  33811: '/polk-county',
  33812: '/polk-county',
  33813: '/polk-county',
  33815: '/polk-county',
  33820: '/polk-county',
  33825: '/polk-county',
  33826: '/polk-county',
  33827: '/polk-county',
  33830: '/polk-county',
  33834: '/polk-county',
  33835: '/polk-county',
  33836: '/polk-county',
  33837: '/polk-county',
  33838: '/polk-county',
  33839: '/polk-county',
  33840: '/polk-county',
  33841: '/polk-county',
  33843: '/polk-county',
  33846: '/polk-county',
  33847: '/polk-county',
  33848: '/polk-county',
  33849: '/polk-county',
  33850: '/polk-county',
  33851: '/polk-county',
  33852: '/polk-county',
  33853: '/polk-county',
  33854: '/polk-county',
  33855: '/polk-county',
  33856: '/polk-county',
  33857: '/polk-county',
  33858: '/polk-county',
  33859: '/polk-county',
  33860: '/polk-county',
  33863: '/polk-county',
  33865: '/polk-county',
  33867: '/polk-county',
  33868: '/polk-county',
  33870: '/polk-county',
  33872: '/polk-county',
  33873: '/polk-county',
  33875: '/polk-county',
  33876: '/polk-county',
  33877: '/polk-county',
  33878: '/polk-county',
  33879: '/polk-county',
  33880: '/winter-haven',
  33881: '/winter-haven',
  33882: '/polk-county',
  33883: '/polk-county',
  33884: '/winter-haven',
  33885: '/polk-county',
  33888: '/polk-county',
  33890: '/polk-county',
  33896: '/polk-county',
  33897: '/polk-county',
  33898: '/polk-county',
};

/**
 * Get the city landing page route for a given zip code.
 * @param {string} zip - 5-digit zip code
 * @returns {string|null} Route path (e.g. '/orlando') or null if not in service area
 */
export function getRouteForZip(zip) {
  if (!zip || zip.length !== 5) return null;
  const route = ZIP_TO_ROUTE[zip];
  if (route) return route;
  // Fallback: check if zip is in Orange (328xx) or Osceola (347xx) or Polk (338xx) ranges
  const n = parseInt(zip, 10);
  if (n >= 32801 && n <= 32899) return '/orlando';
  if (n >= 34700 && n <= 34799) return '/osceola-county';
  if (n >= 33800 && n <= 33899) return '/polk-county';
  if (n >= 32700 && n <= 32799) return '/orange-county';
  return null;
}
