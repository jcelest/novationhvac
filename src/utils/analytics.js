/**
 * Intent Analytics - Novation HVAC
 * Unified GA4 custom events for your AI Revenue Engineering dashboard.
 * All events flow to GA4 (G-QPJCLK9DZJ) and can be pulled via GA4 Reporting API.
 */

/**
 * Send a custom event to GA4
 * @param {string} eventName - GA4 event name
 * @param {Object} params - Event parameters (sent to GA4)
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
}

/**
 * Form submission (contact, book appointment)
 */
export function trackFormSubmit(formName, { success, source } = {}) {
  trackEvent('form_submit', {
    form_name: formName,
    success: success ?? true,
    lead_source: source,
  });
}

/**
 * CTA button click (for conversion tracking)
 */
export function trackCTAClick(ctaName, location = '') {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: location,
  });
}

export function trackReplacementCtaClick(location = '') {
  trackEvent('replacement_cta_click', {
    cta_location: location,
  });
}

export function trackReplacementFormStart() {
  trackEvent('replacement_form_start', {
    form_name: 'replacement_estimate_form',
  });
}

export function trackReplacementFormSubmit() {
  trackEvent('replacement_form_submit', {
    form_name: 'replacement_estimate_form',
    success: true,
  });
}

/**
 * Form view (when form enters viewport - optional)
 */
export function trackFormView(formName) {
  trackEvent('form_view', {
    form_name: formName,
  });
}

/**
 * Lead captured (server-side stores in Supabase; this is client-side confirmation)
 */
export function trackLeadCaptured(source, hasJobber = false) {
  trackEvent('lead_captured', {
    lead_source: source,
    has_jobber: hasJobber,
  });
}

/**
 * Voice call started (Phase 2 - Vapi)
 */
export function trackVoiceCallStart(assistantId = '') {
  trackEvent('voice_call_start', {
    assistant_id: assistantId,
  });
}

/**
 * Voice call ended (Phase 2 - Vapi)
 */
export function trackVoiceCallEnd(durationSeconds, outcome = '') {
  trackEvent('voice_call_end', {
    duration_seconds: durationSeconds,
    outcome,
  });
}

/**
 * Schedule Service button click (Phase 2 - opens Vapi)
 */
export function trackScheduleServiceClick() {
  trackEvent('schedule_service_click', {
    cta_name: 'schedule_service',
    cta_location: 'hero',
  });
}

/**
 * Click-to-call on tel: links (website phone intent — not the same as a completed call).
 * @param {() => void} [onComplete] - run after GA4 accepts the hit (use before opening dialer)
 */
export function trackPhoneClick(location = '', phoneNumber = '', onComplete) {
  if (typeof window === 'undefined') return;

  const params = {
    link_location: location,
    phone_number: phoneNumber,
    page_path: window.location.pathname,
  };

  if (typeof onComplete === 'function') {
    params.event_callback = onComplete;
    params.event_timeout = 2000;
  }

  if (window.gtag) {
    window.gtag('event', 'phone_click', params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'phone_click', ...params });
  onComplete?.();
}

/** Map tel: link DOM to a readable placement label for GA4. */
export function getPhoneLinkLocation(link) {
  if (link?.dataset?.trackLocation) return link.dataset.trackLocation;
  if (link?.classList?.contains('btn-call')) return 'header';
  if (link?.classList?.contains('footer-phone')) return 'footer';
  if (link?.classList?.contains('contact-link')) return 'contact';
  if (link?.classList?.contains('btn-call-now')) return 'emergency_hero';
  if (link?.classList?.contains('btn-secondary') || link?.classList?.contains('btn-primary')) {
    return 'page_cta';
  }
  return typeof window !== 'undefined' ? window.location.pathname : 'unknown';
}
