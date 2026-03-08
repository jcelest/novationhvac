# Novation HVAC Intelligence Layer – Implementation Plan

**For Intent (AI Revenue Engineering)** – This plan tracks all analytics touchpoints for your unified dashboard.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         NOVATION HVAC WEBSITE (React + Vite)                      │
│  Hero │ Contact Form │ Book Appointment │ Schedule Service (Vapi) │ GA4 + Intent │
└─────────────────────────────────────────────────────────────────────────────────┘
         │                          │                          │
         ▼                          ▼                          ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────────────┐
│  /api/jobber-   │     │  /api/leads      │     │  Vapi Web Call               │
│  book           │     │  (Supabase)      │     │  (Voice qualification)      │
└────────┬────────┘     └──────────────────┘     └──────────────┬──────────────┘
         │                          │                            │
         ▼                          ▼                            ▼
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────────────────┐
│  Jobber API     │     │  Supabase        │     │  Jobber API (Request)       │
│  (Client +      │     │  (leads, events,  │     │  + Transcript               │
│   Request)      │     │   AI calls)      │     │                              │
└─────────────────┘     └──────────────────┘     └─────────────────────────────┘
         │                          │                            │
         └──────────────────────────┼────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         SENTIMENT REVIEW ENGINE (FastAPI)                         │
│  Jobber Webhook (JOB_COMPLETE or INVOICE_PAID) → SMS → AI Filter → Review Link   │
└─────────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Score 4–5      │     │  Score 1–3       │
│  → Google       │     │  → Owner Alert   │
│    Review Link  │     │  (Call ASAP)     │
└─────────────────┘     └──────────────────┘
```

---

## Phase 1: Lead Capture (Build First) ✅

**Goal:** Store every form submission, contact request, and lead source in Supabase.

### 1.1 Supabase Setup

1. Create project at [supabase.com](https://supabase.com)
2. Get `SUPABASE_URL` and `SUPABASE_ANON_KEY` from Project Settings → API
3. Run the SQL schema in Supabase SQL Editor (see `docs/supabase-schema.sql`)

### 1.2 Tables

| Table | Purpose |
|-------|---------|
| `leads` | Form submissions (contact, book-appointment, voice agent) |
| `analytics_events` | Custom events for Intent (form views, CTA clicks, etc.) |
| `ai_calls` | Vapi call logs (transcript, duration, outcome) |

### 1.3 API Flow

- **Contact form** → `POST /api/jobber-book` (or `/api/contact`) → **always** insert into `leads`
- **Book Appointment** → same flow
- **Voice Agent** → Vapi webhook → `POST /api/leads` with `source: 'voice_agent'`

### 1.4 Intent Analytics Events (Phase 1)

| Event | Trigger | GA4 Params |
|-------|---------|------------|
| `form_submit` | Contact form submit | `form_name`, `source`, `success` |
| `form_view` | Form in viewport | `form_name` |
| `cta_click` | Button click | `cta_name`, `location` |
| `lead_captured` | Lead stored in DB | `source`, `has_jobber` |

---

## Phase 2: Voice Agent (Vapi “Dispatcher” Bot)

**Goal:** Automate qualification via a “Schedule Service” call.

### 2.1 Frontend

- Add **“Schedule Service”** button to Hero (opens Vapi web call)
- Vapi embed: [Vapi Web SDK](https://docs.vapi.ai/docs/web-sdk)

### 2.2 Vapi Assistant Prompt

```
You are Novation HVAC's scheduling assistant.

1. Ask: "What seems to be the problem with your unit?"
2. Ask: "What is your zip code?" (We serve Apopka, Orlando, Kissimmee, Poinciana, Central FL.)
3. If zip is outside 327xx, 328xx, 347xx, 347xx, 338xx: politely explain we serve Central FL and offer to transfer to main office.
4. Ask for name, phone, and email.
5. Summarize: "You need [service] – I'll have our team reach out shortly."

After the call, the system will create a Request in Jobber with the transcript.
```

### 2.3 Backend

- **Vapi Server URL** (or webhook): On call end, call your API
- API: Check if client exists in Jobber (GraphQL `clients` query by phone/email)
- API: Create Request in Jobber with transcript as note
- API: Insert into `leads` with `source: 'voice_agent'`

### 2.4 Intent Analytics Events (Phase 2)

| Event | Trigger | GA4 Params |
|-------|---------|------------|
| `voice_call_start` | Vapi call start | `assistant_id` |
| `voice_call_end` | Vapi call end | `duration`, `outcome` |
| `voice_lead_qualified` | Lead created from call | `zip`, `service` |

---

## Phase 3: Sentiment-First Review Engine

**Goal:** Only send Google Review links to happy customers (4–5).

### 3.1 Jobber Webhook

- Jobber Developer Center → Webhooks
- Events: `JOB_COMPLETE` or `INVOICE_PAID`
- URL: `https://your-fastapi-backend.com/webhooks/jobber`

### 3.2 FastAPI Backend (Separate Service)

- **Stack:** FastAPI + Twilio (or similar) for SMS
- **Flow:**
  1. Webhook receives job completion
  2. Fetch client phone from Jobber
  3. Send SMS: “Hi [Name], this is Novation. How was your experience with [Technician] today? Reply 1–5.”

### 3.3 AI Filter

- **Option A:** Use Twilio webhook for inbound SMS
- **Option B:** Use OpenAI / Claude to classify sentiment from reply
- **Logic:**
  - Score 4–5 → Send Google Review link
  - Score 1–3 → Do **not** send link; alert owner: “Urgent: [Customer] had a bad experience. Call them now.”

### 3.4 Intent Analytics Events (Phase 3)

| Event | Trigger | GA4 Params |
|-------|---------|------------|
| `review_sentiment_request` | SMS sent | `job_id` |
| `review_sentiment_positive` | Score 4–5, link sent | `score` |
| `review_sentiment_negative` | Score 1–3, owner alerted | `score` |

---

## Phase 4: Admin Dashboard (Intent)

**Goal:** Single view for traffic, leads, conversion, revenue, AI calls.

### 4.1 Data Sources

| Metric | Source | How |
|--------|--------|-----|
| Traffic | GA4 | GA4 Reporting API or `@analytics/google-analytics` |
| Sessions | GA4 | Same |
| Leads | Supabase | `SELECT COUNT(*) FROM leads` |
| Conversion rate | Computed | `leads / sessions` |
| Revenue | Stripe or manual | Stripe API or Supabase table |
| AI calls | Supabase `ai_calls` | Count + Vapi API |

### 4.2 Admin Page

- **Route:** `/admin` (protected, e.g. env-based auth)
- **Widgets:** Sessions, page views, leads, conversion, revenue, AI call count

---

## Environment Variables

```env
# Existing
JOBBER_ACCESS_TOKEN=...

# Phase 1
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=eyJ...

# Phase 2 (Vapi)
VAPI_API_KEY=...
VAPI_PHONE_NUMBER_ID=...  # optional

# Phase 3 (Sentiment)
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=...
OPENAI_API_KEY=...  # or Anthropic for sentiment

# Phase 4 (Admin)
ADMIN_SECRET=...  # simple auth for /admin
```

---

## Implementation Order

1. **Lead Capture** – Supabase + API + form storage (this plan)
2. **Intent Analytics** – GA4 custom events + `analytics_events` table
3. **Voice Agent** – Vapi + Schedule Service button + Jobber integration
4. **Sentiment Review** – FastAPI + Jobber webhook + Twilio + AI filter
5. **Admin Dashboard** – Pull GA4 + Supabase for Intent

---

## Next Steps

- [ ] Run `docs/supabase-schema.sql` in Supabase
- [ ] Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to Vercel
- [ ] Deploy updated API routes
- [ ] Add `Schedule Service` button to Hero
- [ ] Create Vapi assistant and configure webhook
- [ ] Set up FastAPI + Jobber webhook for sentiment flow
