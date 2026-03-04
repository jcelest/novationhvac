import { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/Hero.css';
import './BookAppointmentPage.css';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
];

const PREFERRED_TIMES = [
  { value: 'any', label: 'Any time' },
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
];

const MAX_IMAGES = 10;

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    marketingEmails: true,
    phone: '',
    marketingSMS: false,
    streetAddress: '',
    unit: '',
    city: '',
    state: 'Florida',
    zipCode: '',
    description: '',
    assessmentDate: '',
    alternateDate: '',
    preferredTime: '',
  });
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [usedJobber, setUsedJobber] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const remaining = MAX_IMAGES - images.length;
    const toAdd = files.slice(0, remaining);
    if (toAdd.length > 0) {
      setImages((prev) => [...prev, ...toAdd].slice(0, MAX_IMAGES));
    }
    e.target.value = '';
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setUsedJobber(false);

    const addressParts = [
      formData.streetAddress,
      formData.unit,
      [formData.city, formData.state, formData.zipCode].filter(Boolean).join(', '),
    ].filter(Boolean);
    const fullAddress = addressParts.join(', ');

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      address: fullAddress,
      streetAddress: formData.streetAddress,
      unit: formData.unit,
      city: formData.city,
      state: formData.state,
      zip: formData.zipCode,
      message: formData.description,
      preferredDate: formData.assessmentDate,
      preferredTime: formData.preferredTime,
      alternateDate: formData.alternateDate,
      marketingEmails: formData.marketingEmails,
      marketingSMS: formData.marketingSMS,
      imageCount: images.length,
    };

    try {
      const res = await fetch('/api/jobber-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.status === 503 && !data.success) {
        const fallbackPayload = {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          zip: formData.zipCode,
          address: fullAddress,
          message: [
            formData.companyName && `Company: ${formData.companyName}`,
            formData.description,
            formData.assessmentDate && `Preferred date: ${formData.assessmentDate}`,
            formData.alternateDate && `Alternate date: ${formData.alternateDate}`,
            formData.preferredTime && `Preferred time: ${formData.preferredTime}`,
            images.length > 0 && `Images attached: ${images.length}`,
          ].filter(Boolean).join('\n'),
          preferredDate: formData.assessmentDate,
          preferredTime: formData.preferredTime,
        };
        const fallbackRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fallbackPayload),
        });
        const fallbackData = await fallbackRes.json();
        if (fallbackRes.ok) {
          setStatus('success');
          setUsedJobber(false);
          setFormData({
            firstName: '', lastName: '', companyName: '', email: '', marketingEmails: true,
            phone: '', marketingSMS: false, streetAddress: '', unit: '', city: '', state: 'Florida',
            zipCode: '', description: '', assessmentDate: '', alternateDate: '', preferredTime: '',
          });
          setImages([]);
        } else {
          setStatus('error');
          setErrorMessage(fallbackData?.error || '');
        }
        return;
      }

      if (res.ok && data.success) {
        setStatus('success');
        setUsedJobber(true);
        setFormData({
          firstName: '', lastName: '', companyName: '', email: '', marketingEmails: true,
          phone: '', marketingSMS: false, streetAddress: '', unit: '', city: '', state: 'Florida',
          zipCode: '', description: '', assessmentDate: '', alternateDate: '', preferredTime: '',
        });
        setImages([]);
      } else {
        setStatus('error');
        setErrorMessage(data?.error || '');
      }
    } catch {
      setStatus('error');
      setErrorMessage('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment | Novation Heating and Air Conditioning | HVAC Orlando FL</title>
        <meta name="description" content="Book an HVAC appointment with Novation Heating and Air Conditioning. AC repair, heating, cooling services. Orlando, Kissimmee, Central Florida. (407) 973-1523." />
      </Helmet>
      <Header />
      <main>
        <section className="hero hero-compact">
          <div className="hero-bg" style={{ background: `linear-gradient(135deg, rgba(26, 82, 118, 0.92) 0%, rgba(41, 128, 185, 0.88) 50%, rgba(52, 152, 219, 0.85) 100%), url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80) center/cover no-repeat` }}></div>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <h1 className="hero-title">Book an Appointment</h1>
            <p className="hero-tagline">Schedule your HVAC service assessment. We'll be in touch to confirm.</p>
            <div className="hero-buttons">
              <a href="/#contact" className="btn-secondary">Quick Request (Get In Touch)</a>
            </div>
          </div>
        </section>

        <section className="book-appointment-section">
          <div className="container book-appointment-inner">
            <form className="book-appointment-form" onSubmit={handleSubmit}>
              <h2>Service Request</h2>

              <div className="form-section">
                <h3>Contact Details</h3>
                <div className="form-row">
                  <input type="text" name="firstName" placeholder="First name *" value={formData.firstName} onChange={handleChange} required />
                  <input type="text" name="lastName" placeholder="Last name *" value={formData.lastName} onChange={handleChange} required />
                </div>
                <input type="text" name="companyName" placeholder="Company name" value={formData.companyName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
                <label className="checkbox-label">
                  <input type="checkbox" name="marketingEmails" checked={formData.marketingEmails} onChange={handleChange} />
                  I'd like to receive marketing emails from Novation Heating and Air Conditioning, LLC. Unsubscribe at any time.
                </label>
                <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required />
                <p className="form-legal form-legal-sms">
                  By providing your phone number, you agree to receive Visit Reminders and other transactional text messages (SMS) from Novation Heating and Air Conditioning, LLC. You can unsubscribe at anytime by replying STOP. Message and data rates may apply. Message frequency varies. Reply HELP for help or STOP to cancel.
                </p>
                <label className="checkbox-label">
                  <input type="checkbox" name="marketingSMS" checked={formData.marketingSMS} onChange={handleChange} />
                  I also agree to receive marketing SMS from Novation Heating and Air Conditioning, LLC. Reply STOP MKT to opt out of marketing SMS.
                </label>
              </div>

              <div className="form-section">
                <h3>Address</h3>
                <input type="text" name="streetAddress" placeholder="Street address *" value={formData.streetAddress} onChange={handleChange} required />
                <input type="text" name="unit" placeholder="Unit, apartment, suite, etc. (optional)" value={formData.unit} onChange={handleChange} />
                <div className="form-row three-col">
                  <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} required />
                  <select name="state" value={formData.state} onChange={handleChange}>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <input type="text" name="zipCode" placeholder="ZIP Code *" value={formData.zipCode} onChange={handleChange} maxLength={10} required />
                </div>
              </div>

              <div className="form-section">
                <h3>Service Details</h3>
                <textarea name="description" placeholder="Please provide as much information as you can *" value={formData.description} onChange={handleChange} rows={5} required />
              </div>

              <div className="form-section">
                <h3>Your Availability</h3>
                <label>
                  <span className="field-label">Which day would be best for an assessment of the work? *</span>
                  <input type="date" name="assessmentDate" value={formData.assessmentDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} required />
                </label>
                <label>
                  <span className="field-label">What is another day that works for you?</span>
                  <input type="date" name="alternateDate" value={formData.alternateDate} onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
                </label>
                <div className="preferred-times">
                  <span className="field-label">What are your preferred arrival times?</span>
                  <div className="time-options">
                    {PREFERRED_TIMES.map(({ value, label }) => (
                      <label key={value} className="radio-label">
                        <input type="radio" name="preferredTime" value={value} checked={formData.preferredTime === value} onChange={handleChange} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3>Upload Images</h3>
                <p className="upload-instruction">Share images of the work to be done.</p>
                <div
                  className="upload-zone"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }}
                  onDragLeave={(e) => e.currentTarget.classList.remove('drag-over')}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.remove('drag-over');
                    const files = Array.from(e.dataTransfer.files || []).filter((f) => f.type.startsWith('image/'));
                    const remaining = MAX_IMAGES - images.length;
                    setImages((prev) => [...prev, ...files.slice(0, remaining)].slice(0, MAX_IMAGES));
                  }}
                >
                  <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleImageChange} style={{ display: 'none' }} />
                  <span className="upload-icon">📷</span>
                  <span className="upload-text">{images.length}/{MAX_IMAGES} images</span>
                </div>
                {images.length > 0 && (
                  <div className="image-preview-list">
                    {images.map((file, i) => (
                      <div key={i} className="image-preview-item">
                        <span className="preview-name">{file.name}</span>
                        <button type="button" className="preview-remove" onClick={() => removeImage(i)} aria-label="Remove">×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="form-legal">
                By continuing you agree to our <a href="/#contact">Terms and Conditions</a>.
              </p>
              <p className="form-legal form-recaptcha">
                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
              </p>

              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Submitting...' : 'Submit'}
              </button>

              {status === 'success' && (
                <p className="form-success">
                  {usedJobber
                    ? "Thanks! Your request has been sent to our scheduling system. We'll be in touch soon to confirm your appointment."
                    : "Thanks! We've received your request. We'll be in touch soon to confirm your appointment."}
                </p>
              )}
              {status === 'error' && (
                <p className="form-error">{errorMessage || 'Something went wrong. Please call us at (407) 973-1523.'}</p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
