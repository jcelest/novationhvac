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
