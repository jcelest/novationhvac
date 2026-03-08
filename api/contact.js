// Vercel serverless function - contact form fallback when Jobber is not configured
// Stores leads in Supabase for Intent analytics

import { storeLead } from '../lib/supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name,
    email,
    phone,
    zip,
    zipCode,
    address,
    service,
    message,
    preferredDate,
    preferredTime,
    source,
    pageUrl,
    utm_source,
    utm_medium,
    utm_campaign,
  } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  // Store lead in Supabase for Intent analytics
  await storeLead(
    {
      source: source || 'contact_form',
      name,
      email,
      phone,
      zip: zip || zipCode,
      address,
      service,
      message,
      preferredDate,
      preferredTime,
    },
    { pageUrl, utm_source, utm_medium, utm_campaign }
  );

  res.status(200).json({ success: true, message: 'Thank you! We will contact you soon.' });
}
