import { OG_IMAGE, SITE_NAME } from '../utils/seoConstants';

/**
 * Open Graph + Twitter tags aligned with canonical URL (fixes duplicate URL signals in GSC).
 */
export default function SeoOgTags({ url, title, description }) {
  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
}
