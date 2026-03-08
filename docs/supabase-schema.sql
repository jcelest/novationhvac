-- Novation HVAC - Supabase Schema
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

-- Leads: form submissions, contact requests, voice agent qualifications
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT NOT NULL,  -- 'contact_form' | 'book_appointment' | 'voice_agent'
  name TEXT,
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  zip TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  service TEXT,
  message TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  alternate_date DATE,
  metadata JSONB DEFAULT '{}',  -- extra fields (e.g. transcript, image_count)
  jobber_client_id TEXT,       -- if created in Jobber
  jobber_request_id TEXT,      -- if request created in Jobber
  page_url TEXT,               -- where they came from (for Intent)
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

-- Index for admin queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Analytics events: custom events for Intent (GA4 complement)
CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  event_name TEXT NOT NULL,     -- 'form_submit', 'cta_click', 'voice_call_start', etc.
  event_params JSONB DEFAULT '{}',
  page_url TEXT,
  session_id TEXT,
  user_agent TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT
);

CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_name ON analytics_events(event_name);

-- AI calls: Vapi/Retell call logs (for admin dashboard)
CREATE TABLE IF NOT EXISTS ai_calls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  call_id TEXT UNIQUE,          -- Vapi call ID
  duration_seconds INT,
  outcome TEXT,                 -- 'qualified', 'out_of_area', 'no_answer', etc.
  transcript TEXT,
  lead_id UUID REFERENCES leads(id),
  metadata JSONB DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_ai_calls_created_at ON ai_calls(created_at DESC);

-- Enable RLS (Row Level Security) - optional, for future admin auth
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE ai_calls ENABLE ROW LEVEL SECURITY;
