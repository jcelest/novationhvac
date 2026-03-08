# Sentiment-First Review Engine (Phase 3)

## Overview

When a job completes in Jobber, send an SMS asking for a 1–5 rating. Only send the Google Review link to customers who reply 4–5. Alert the owner for 1–3.

---

## Architecture

```
Jobber (JOB_COMPLETE) → Webhook → FastAPI → Twilio SMS
                                        ↓
Customer replies 1–5 → Twilio Webhook → AI classifies
                                        ↓
                    4–5: Send Google Review link
                    1–3: Alert owner, do NOT send link
```

---

## 1. FastAPI Backend (Separate Service)

Create a new project (e.g. `novation-sentiment`) or add to existing backend:

```bash
pip install fastapi uvicorn twilio openai httpx
```

**Structure:**
```
novation-sentiment/
  main.py
  requirements.txt
```

---

## 2. Jobber Webhook

1. Jobber Developer Center → Webhooks
2. Create webhook:
   - **Event:** `JOB_COMPLETE` or `INVOICE_PAID`
   - **URL:** `https://your-fastapi.com/webhooks/jobber`
3. On receive: fetch job details, client phone, technician name from Jobber API

---

## 3. Twilio SMS Flow

**Outbound (when job completes):**
```
Hi [Name], this is Novation. How was your experience with [Technician] today? Reply 1-5.
```

**Inbound (when customer replies):**
- Parse body for 1–5
- If 4–5: Send Google Review link
- If 1–3: Send to owner (SMS/email): "Urgent: [Customer] had a bad experience. Call them now."
- Store in Supabase `analytics_events` with `event_name: 'review_sentiment_positive'` or `'review_sentiment_negative'`

---

## 4. AI Filter (Optional)

If the reply isn't a clear 1–5, use OpenAI/Claude to classify:

```python
prompt = f"Customer replied: '{reply}'. Rate sentiment 1-5 (1=very unhappy, 5=very happy). Reply only with the number."
```

---

## 5. Environment Variables

```env
JOBBER_ACCESS_TOKEN=...
TWILIO_ACCOUNT_SID=...
TWILIO_AUTH_TOKEN=...
TWILIO_PHONE_NUMBER=+1...
OPENAI_API_KEY=...  # optional, for fuzzy replies
GOOGLE_REVIEW_URL=https://g.page/r/...  # Your Google review link
OWNER_PHONE=+1...   # For 1-3 alerts
```

---

## 6. Intent Analytics

Track in Supabase `analytics_events`:
- `review_sentiment_request` – SMS sent
- `review_sentiment_positive` – Score 4–5, link sent
- `review_sentiment_negative` – Score 1–3, owner alerted
