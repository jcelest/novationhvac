import { useEffect } from 'react';
import { getPhoneLinkLocation, trackPhoneClick } from '../utils/analytics';

/**
 * Tracks every tel: link click as a GA4 `phone_click` event.
 * Actual inbound calls need CallRail (or similar) — see analytics setup notes in project docs.
 */
export default function usePhoneClickTracking() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href^="tel:"]');
      if (!link) return;

      event.preventDefault();

      const phoneNumber = link.getAttribute('href')?.replace(/^tel:/i, '') || '';
      const telHref = link.href;
      let opened = false;

      const openDialer = () => {
        if (opened) return;
        opened = true;
        window.location.href = telHref;
      };

      trackPhoneClick(getPhoneLinkLocation(link), phoneNumber, openDialer);
      window.setTimeout(openDialer, 500);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);
}
