import { useState } from 'react';
import './Contact.css';

export default function Contact({ initialZip = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: initialZip,
    address: '',
    service: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [usedJobber, setUsedJobber] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setUsedJobber(false);
    try {
      let res = await fetch('/api/jobber-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.status === 503 && !data.success) {
        res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const contactData = await res.json();
        if (res.ok) {
          setStatus('success');
          setUsedJobber(false);
          setFormData({ name: '', email: '', phone: '', zip: '', address: '', service: '', message: '', preferredDate: '', preferredTime: '' });
        } else {
          setStatus('error');
          setErrorMessage(contactData?.error || '');
        }
        return;
      }

      if (res.ok && data.success) {
        setStatus('success');
        setUsedJobber(true);
        setFormData({ name: '', email: '', phone: '', zip: '', address: '', service: '', message: '', preferredDate: '', preferredTime: '' });
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
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Ready to schedule service or have questions? We're here to help.</p>
          <div className="contact-details">
            <a href="tel:4079731523" className="contact-link">
              <strong>Call Us</strong>
              (407) 973-1523
            </a>
            <p className="contact-hours">24/7 Emergency Service Available</p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Request Service</h3>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              maxLength={5}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
          />
          <div className="form-row">
            <input
              type="date"
              name="preferredDate"
              placeholder="Preferred Date"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
            <input
              type="text"
              name="preferredTime"
              placeholder="Preferred Time (e.g. Morning, Afternoon)"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option value="">Select Service</option>
            <option value="ac">Cooling</option>
            <option value="heating">Heating</option>
            <option value="maintenance">Maintenance</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Submitting...' : 'Book Appointment'}
          </button>
          {status === 'success' && (
            <p className="form-success">
              {usedJobber
                ? "Thanks! Your request has been sent to our scheduling system. We'll be in touch soon to confirm your appointment."
                : "Thanks! We've received your request. We'll be in touch soon to confirm your appointment."}
            </p>
          )}
          {status === 'error' && <p className="form-error">{errorMessage || 'Something went wrong. Please call us at (407) 973-1523.'}</p>}
        </form>
      </div>
    </section>
  );
}
