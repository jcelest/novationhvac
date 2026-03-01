// Vercel serverless function - replaces Express /api/contact
// Add env vars later for email (e.g. SENDGRID_API_KEY, RESEND_API_KEY)

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, zip, service, message } = req.body || {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  // TODO: When you add env vars, integrate with:
  // - Nodemailer / Resend / SendGrid for email
  // - Database to store leads
  // - CRM webhook
  console.log('Contact form submission:', { name, email, phone, zip, service, message });

  res.status(200).json({ success: true, message: 'Thank you! We will contact you soon.' });
}
