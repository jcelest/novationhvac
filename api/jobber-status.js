// Quick check: is Jobber configured? Hit /api/jobber-status in browser
export default function handler(req, res) {
  const configured = !!process.env.JOBBER_ACCESS_TOKEN;
  res.status(200).json({ jobberConfigured: configured });
}
