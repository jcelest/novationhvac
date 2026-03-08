# Vapi Voice Agent Setup (Phase 2)

## Overview

The "Schedule Service" button opens a Vapi web call that qualifies leads before creating a Request in Jobber.

---

## 1. Vapi Account

1. Sign up at [vapi.ai](https://vapi.ai)
2. Create an Assistant in the dashboard
3. Get your **API Key** from Settings → API Keys

---

## 2. Assistant Prompt (Copy-Paste)

```
You are Novation HVAC's scheduling assistant. You're friendly, professional, and efficient.

Your goals:
1. Ask: "What seems to be the problem with your unit?" (AC not cooling, heating issue, maintenance, etc.)
2. Ask: "What is your zip code?" 
   - We serve: Apopka, Orlando, Kissimmee, Poinciana, Winter Haven, and Central Florida (zip prefixes: 327, 328, 347, 338).
   - If zip is outside our area: "We currently serve Central Florida. I can have our main office call you to discuss options. May I get your name and phone?"
3. Ask for: first name, last name, phone, and email.
4. Summarize: "So you need [service] at [zip]. I'll have our team reach out shortly to confirm your appointment. Is there anything else?"

Keep it brief. If they're in our area, collect all info. If not, still get name/phone for follow-up.

End with: "Thanks for calling Novation. Have a great day."
```

---

## 3. Web SDK Integration

Add to your site (e.g. in `index.html` or a dedicated component):

```html
<script src="https://cdn.jsdelivr.net/npm/@vapi-ai/web@2"></script>
```

In `Hero.jsx`, replace the Schedule Service button with:

```jsx
import { useVapi } from '@vapi-ai/web';

// In component:
const { start, stop, isActive } = useVapi();

const handleScheduleService = () => {
  trackScheduleServiceClick();
  start('YOUR_ASSISTANT_ID');  // From Vapi dashboard
};

// Button:
<button onClick={handleScheduleService} disabled={isActive}>
  {isActive ? 'On Call...' : 'Schedule Service'}
</button>
```

Or use the **Vapi Web Component** for a floating widget:

```html
<vapi-button assistant-id="YOUR_ASSISTANT_ID" />
```

---

## 4. Server URL (Webhook)

When the call ends, Vapi can POST to your backend. Create `api/vapi-webhook.js`:

```js
import { storeLead } from '../lib/supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { message, call } = req.body || {};
  // Parse transcript, extract: service, zip, name, phone, email
  // Create Request in Jobber via GraphQL
  // Store lead with source: 'voice_agent'
  
  res.status(200).json({ received: true });
}
```

Set this URL in Vapi Dashboard → Assistant → Server URL.

---

## 5. Jobber Integration from Webhook

In your webhook handler:

1. **Check if client exists** – Jobber GraphQL `clients` query by phone/email
2. **Create client** if new – `clientCreate` mutation
3. **Create request** – `requestCreate` with `clientId`
4. **Add transcript as note** – `noteCreate` on the request
5. **Store in Supabase** – `storeLead({ source: 'voice_agent', ... })`

---

## 6. Environment Variables

```env
VAPI_API_KEY=...
VAPI_ASSISTANT_ID=...
```

Add to Vercel env vars.
