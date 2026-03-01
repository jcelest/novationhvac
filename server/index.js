const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../dist')));

// Contact form API
app.post('/api/contact', (req, res) => {
  const { name, email, phone, zip, service, message } = req.body;
  
  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  // In production, you would:
  // - Save to database
  // - Send email via nodemailer
  // - Integrate with CRM
  console.log('Contact form submission:', { name, email, phone, zip, service, message });

  res.json({ success: true, message: 'Thank you! We will contact you soon.' });
});

// Fallback for SPA routing - serve index.html for all non-API routes so /orlando, /kissimmee, /poinciana work
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  const indexPath = path.join(__dirname, '../dist/index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
