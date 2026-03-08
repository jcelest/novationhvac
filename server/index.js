import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend in production
app.use(express.static(path.join(__dirname, '../dist')));

// Jobber appointment booking API (proxies to same logic as Vercel serverless)
app.post('/api/jobber-book', async (req, res) => {
  const handler = (await import('../api/jobber-book.js')).default;
  return handler(req, res);
});

// Contact form API (fallback when Jobber not configured)
app.post('/api/contact', async (req, res) => {
  const handler = (await import('../api/contact.js')).default;
  return handler(req, res);
});

// Leads API (voice agent, etc.)
app.post('/api/leads', async (req, res) => {
  const handler = (await import('../api/leads.js')).default;
  return handler(req, res);
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
