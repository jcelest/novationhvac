// Vercel serverless function - Jobber API integration for booking appointments
// Requires: JOBBER_ACCESS_TOKEN env var (from Jobber Developer Center OAuth)

const JOBBER_API = 'https://api.getjobber.com/api/graphql';
const API_VERSION = '2023-11-15';

function splitName(fullName) {
  const parts = (fullName || '').trim().split(/\s+/);
  if (parts.length === 0) return { firstName: 'Customer', lastName: '' };
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

async function jobberGraphQL(token, query, variables = {}) {
  const res = await fetch(JOBBER_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'X-JOBBER-GRAPHQL-VERSION': API_VERSION,
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || 'Jobber API error');
  return json.data;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.JOBBER_ACCESS_TOKEN;
  if (!token) {
    console.error('JOBBER_ACCESS_TOKEN is not configured');
    return res.status(503).json({
      error: 'Booking is not configured. Please contact support.',
      success: false,
    });
  }

  const {
    name,
    firstName,
    lastName,
    companyName,
    email,
    phone,
    zip,
    zipCode,
    address,
    streetAddress,
    unit,
    city,
    state,
    service,
    message,
    preferredDate,
    preferredTime,
    alternateDate,
    imageCount,
  } = req.body || {};

  const hasName = name || (firstName && lastName) || firstName || lastName;
  if (!hasName || !email || !phone) {
    return res.status(400).json({
      error: 'Name, email, and phone are required',
      success: false,
    });
  }

  let first, last;
  if (firstName !== undefined || lastName !== undefined) {
    first = (firstName || '').trim() || 'Customer';
    last = (lastName || '').trim();
  } else {
    const split = splitName(name);
    first = split.firstName;
    last = split.lastName;
  }

  const fullAddress = address || [streetAddress, unit, [city, state, zip || zipCode].filter(Boolean).join(', ')].filter(Boolean).join(', ');
  const description = [
    companyName && `Company: ${companyName}`,
    service && `Service: ${service}`,
    (zip || zipCode) && `Zip: ${zip || zipCode}`,
    fullAddress && `Address: ${fullAddress}`,
    preferredDate && `Preferred date: ${preferredDate}`,
    alternateDate && `Alternate date: ${alternateDate}`,
    preferredTime && `Preferred time: ${preferredTime}`,
    imageCount > 0 && `Images attached: ${imageCount}`,
    message,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    // 1. Create or get client
    const clientMutation = `
      mutation ClientCreate($input: ClientCreateInput!) {
        clientCreate(input: $input) {
          client { id }
          userErrors { message path }
        }
      }
    `;
    const cleanPhone = phone ? phone.replace(/\D/g, '') : '';
    const clientInput = {
      firstName: first,
      lastName: last,
      emails: [{ description: 'MAIN', primary: true, address: email }],
    };
    if (cleanPhone) {
      clientInput.phones = [{ number: cleanPhone, primary: true }];
    }
    const clientResult = await jobberGraphQL(token, clientMutation, {
      input: clientInput,
    });

    const clientErrors = clientResult?.clientCreate?.userErrors || [];
    if (clientErrors.length > 0) {
      const msg = clientErrors.map((e) => e.message).join('; ');
      return res.status(400).json({ error: msg, success: false });
    }

    const clientId = clientResult?.clientCreate?.client?.id;
    if (!clientId) {
      return res.status(500).json({
        error: 'Could not create client in Jobber',
        success: false,
      });
    }

    // 2. Create work request
    const requestMutation = `
      mutation RequestCreate($input: RequestCreateInput!) {
        requestCreate(input: $input) {
          request { id }
          userErrors { message path }
        }
      }
    `;
    const requestResult = await jobberGraphQL(token, requestMutation, {
      input: {
        clientId,
      },
    });

    const requestErrors = requestResult?.requestCreate?.userErrors || [];
    if (requestErrors.length > 0) {
      const msg = requestErrors.map((e) => e.message).join('; ');
      return res.status(400).json({ error: msg, success: false });
    }

    const requestId = requestResult?.requestCreate?.request?.id;
    if (requestId && description) {
      try {
        const noteMutation = `
          mutation NoteCreate($input: NoteCreateInput!) {
            noteCreate(input: $input) {
              note { id }
              userErrors { message path }
            }
          }
        `;
        await jobberGraphQL(token, noteMutation, {
          input: {
            noteableId: requestId,
            body: description,
          },
        });
      } catch (noteErr) {
        console.warn('Could not add note to request:', noteErr.message);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Your appointment request has been received. We will contact you shortly to confirm.',
    });
  } catch (err) {
    console.error('Jobber booking error:', err);
    return res.status(500).json({
      error: err.message || 'Unable to submit booking. Please call us at (407) 973-1523.',
      success: false,
    });
  }
}
