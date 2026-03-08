// Vercel serverless - store leads from voice agent or other sources
// Used when Vapi webhook creates a qualified lead (Phase 2)

import { storeLead } from '../lib/supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { source = 'voice_agent', ...data } = req.body || {};

  if (!data.email && !data.phone) {
    return res.status(400).json({
      error: 'Email or phone is required',
      success: false,
    });
  }

  const result = await storeLead(
    { ...data, source },
    {
      pageUrl: req.body?.pageUrl,
      utm_source: req.body?.utm_source,
      utm_medium: req.body?.utm_medium,
      utm_campaign: req.body?.utm_campaign,
    }
  );

  if (result.error) {
    return res.status(500).json({
      error: result.error,
      success: false,
    });
  }

  return res.status(200).json({
    success: true,
    id: result.id,
    message: 'Lead captured.',
  });
}
