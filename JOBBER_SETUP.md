# Jobber API Setup for Appointment Booking

This project integrates with the [Jobber API](https://developer.getjobber.com/) to create clients and work requests when customers book appointments from the website.

## Prerequisites

1. A **Jobber account** (business account for your HVAC company)
2. A **Jobber Developer Center account** at [developer.getjobber.com](https://developer.getjobber.com/signup/)

## Setup Steps

### 1. Create an App in the Developer Center

1. Log in to [Jobber Developer Center](https://developer.getjobber.com/)
2. Go to **Apps** and click **NEW**
3. Fill in:
   - **App name**: e.g. "Novation HVAC Website"
   - **Developer name**: Your company name
   - **App description**: Brief description
   - **OAuth Callback URL**: Your site URL + callback path (e.g. `https://yoursite.com/jobber/callback`) — required for OAuth
   - **Scopes**: Select at least:
     - `clients:write` — to create clients
     - `requests:write` — to create work requests

### 2. Get an Access Token

**Option A: Test in GraphiQL (quick setup)**

1. In your app, click the three dots → **Test in GraphiQL**
2. Authorize with your Jobber account
3. In GraphiQL, open the **Headers** section
4. Copy the `Authorization` value (the Bearer token)
5. Use this token as `JOBBER_ACCESS_TOKEN`

**Option B: Custom Integration OAuth**

For production, implement the full OAuth 2.0 flow so your Jobber account connects once and you receive a long-lived token. See [Jobber App Authorization](https://developer.getjobber.com/docs/building_your_app/app_authorization/).

### 3. Configure Environment Variables

**Local development (Express server):**

Create a `.env` file in the project root:

```
JOBBER_ACCESS_TOKEN=your_token_here
```

**Vercel deployment:**

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add `JOBBER_ACCESS_TOKEN` with your token value
3. Redeploy

### 4. Verify the Integration

- If `JOBBER_ACCESS_TOKEN` is **not set**: The form falls back to the standard contact endpoint (no Jobber booking).
- If `JOBBER_ACCESS_TOKEN` **is set**: Submissions create a client and work request in your Jobber account.

## What Gets Created in Jobber

When a customer submits the form:

1. **Client** — Created with name, email, and phone
2. **Work Request** — Created with:
   - Service type
   - Zip code
   - Address (if provided)
   - Preferred date and time
   - Message

You can then convert requests to scheduled jobs in the Jobber app.

## Troubleshooting

- **"Booking is not configured"** — `JOBBER_ACCESS_TOKEN` is missing. Add it to your environment.
- **GraphQL errors** — The Jobber schema may have changed. Check the [GraphiQL docs](https://developer.getjobber.com/docs/using_jobbers_api/api_queries_and_mutations/) in your app for current mutation signatures.
- **Token expired** — OAuth tokens typically expire. Re-authorize in GraphiQL or implement token refresh for production.
