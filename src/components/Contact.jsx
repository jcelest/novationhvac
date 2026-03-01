import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', zip: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Ready to schedule service or have questions? We're here to help.</p>
          <div className="contact-details">
            <a href="tel:18001234567" className="contact-link">
              <strong>Call Us</strong>
              (800) 123-4567
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
            {status === 'sending' ? 'Sending...' : 'Submit Request'}
          </button>
          {status === 'success' && <p className="form-success">Thanks! We'll be in touch soon.</p>}
          {status === 'error' && <p className="form-error">Something went wrong. Please call us directly.</p>}
        </form>
      </div>
    </section>
  );
}
