/**
 * Safe string for <script type="application/ld+json"> — prevents "</" from closing the tag in HTML.
 */
export function jsonLdStringify(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
