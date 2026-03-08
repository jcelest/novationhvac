/**
 * Supabase client for Novation HVAC
 * Used by API routes (Vercel serverless) to store leads and events
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

let client = null;

function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return null;
  }
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return client;
}

/**
 * Store a lead from any source (contact form, book appointment, voice agent)
 * @param {Object} data - Lead data
 * @param {string} data.source - 'contact_form' | 'book_appointment' | 'voice_agent'
 * @param {Object} [options] - page_url, utm params
 * @returns {Promise<{id?: string, error?: string}>}
 */
async function storeLead(data, options = {}) {
  const supabase = getClient();
  if (!supabase) {
    return { error: 'Supabase not configured' };
  }

  const {
    source,
    name,
    firstName,
    lastName,
    email,
    phone,
    zip,
    zipCode,
    address,
    streetAddress,
    city,
    state,
    service,
    message,
    preferredDate,
    preferredTime,
    alternateDate,
    metadata = {},
    jobberClientId,
    jobberRequestId,
  } = data;

  const first = firstName || (name && name.split(/\s+/)[0]) || 'Customer';
  const last = lastName || (name && name.split(/\s+/).slice(1).join(' ')) || '';

  const row = {
    source,
    first_name: first,
    last_name: last,
    name: name || [first, last].filter(Boolean).join(' ').trim(),
    email: email || '',
    phone: phone || '',
    zip: zip || zipCode || null,
    address: address || streetAddress || null,
    city: city || null,
    state: state || null,
    service: service || null,
    message: message || null,
    preferred_date: preferredDate || null,
    preferred_time: preferredTime || null,
    alternate_date: alternateDate || null,
    metadata: typeof metadata === 'object' ? metadata : {},
    jobber_client_id: jobberClientId || null,
    jobber_request_id: jobberRequestId || null,
    page_url: options.pageUrl || options.page_url || null,
    utm_source: options.utmSource || options.utm_source || null,
    utm_medium: options.utmMedium || options.utm_medium || null,
    utm_campaign: options.utmCampaign || options.utm_campaign || null,
  };

  const { data: inserted, error } = await supabase.from('leads').insert(row).select('id').single();

  if (error) {
    console.error('Supabase lead insert error:', error);
    return { error: error.message };
  }
  return { id: inserted?.id };
}

/**
 * Store an analytics event for Intent
 * @param {string} eventName - e.g. 'form_submit', 'cta_click', 'voice_call_start'
 * @param {Object} eventParams - Additional params
 * @param {Object} [options] - page_url, session_id, utm params
 */
async function storeAnalyticsEvent(eventName, eventParams = {}, options = {}) {
  const supabase = getClient();
  if (!supabase) return;

  await supabase.from('analytics_events').insert({
    event_name: eventName,
    event_params: eventParams,
    page_url: options.pageUrl || options.page_url || null,
    session_id: options.sessionId || options.session_id || null,
    utm_source: options.utmSource || options.utm_source || null,
    utm_medium: options.utmMedium || options.utm_medium || null,
    utm_campaign: options.utmCampaign || options.utm_campaign || null,
  });
}

/**
 * Store AI call record (called from Vapi webhook or backend)
 */
async function storeAICall(data) {
  const supabase = getClient();
  if (!supabase) return { error: 'Supabase not configured' };

  const { data: inserted, error } = await supabase
    .from('ai_calls')
    .insert({
      call_id: data.callId,
      duration_seconds: data.durationSeconds,
      outcome: data.outcome,
      transcript: data.transcript,
      lead_id: data.leadId || null,
      metadata: data.metadata || {},
    })
    .select('id')
    .single();

  if (error) return { error: error.message };
  return { id: inserted?.id };
}

export { getClient, storeLead, storeAnalyticsEvent, storeAICall };
