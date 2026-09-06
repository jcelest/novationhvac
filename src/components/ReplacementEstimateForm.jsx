import { useRef, useState } from 'react';
import { trackFormSubmit, trackLeadCaptured, trackReplacementFormStart, trackReplacementFormSubmit } from '../utils/analytics';
import './Contact.css';

const SERVICE_OPTIONS = [
  { value: 'ac-replacement-estimate', label: 'AC replacement estimate' },
  { value: 'second-opinion', label: 'Second opinion' },
  { value: 'repair-vs-replacement', label: 'Repair versus replacement evaluation' },
  { value: 'heat-pump-installation', label: 'Heat pump installation' },
  { value: 'ductwork-concern', label: 'Ductwork concern' },
  { value: 'other-residential', label: 'Other residential HVAC service' },
];

const AGE_OPTIONS = [
  { value: 'unknown', label: 'Not sure' },
  { value: 'under-5', label: 'Under 5 years' },
  { value: '5-10', label: '5 to 10 years' },
  { value: '10-15', label: '10 to 15 years' },
  { value: '15-plus', label: '15 years or older' },
];

const CONTACT_OPTIONS = [
  { value: 'phone', label: 'Phone' },
  { value: 'email', label: 'Email' },
  { value: 'either', label: 'Either' },
];

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  zip: '',
  service: 'ac-replacement-estimate',
  systemAge: '',
  contactMethod: 'either',
  message: '',
};

export default function ReplacementEstimateForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [usedJobber, setUsedJobber] = useState(false);
  const startedRef = useRef(false);
  const submittedRef = useRef(false);

  const handleStart = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackReplacementFormStart();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'zip' ? value.replace(/\D/g, '').slice(0, 5) : value,
    }));
    setFieldErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (!formData.name.trim()) next.name = 'Enter your full name.';
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a valid phone number.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!formData.zip || formData.zip.length !== 5) next.zip = 'Enter a 5-digit ZIP code.';
    if (!formData.service) next.service = 'Select the service you need.';
    if (!formData.systemAge) next.systemAge = 'Select an approximate system age.';
    if (!formData.contactMethod) next.contactMethod = 'Select a preferred contact method.';
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending' || submittedRef.current) return;
    if (!validate()) {
      setStatus('error');
      setErrorMessage('Please correct the highlighted fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    setUsedJobber(false);

    const serviceLabel = SERVICE_OPTIONS.find((o) => o.value === formData.service)?.label || formData.service;
    const ageLabel = AGE_OPTIONS.find((o) => o.value === formData.systemAge)?.label || formData.systemAge;
    const contactLabel = CONTACT_OPTIONS.find((o) => o.value === formData.contactMethod)?.label || formData.contactMethod;
    const combinedMessage = [
      formData.message.trim(),
      `Approximate system age: ${ageLabel}`,
      `Preferred contact method: ${contactLabel}`,
    ]
      .filter(Boolean)
      .join('\n');

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      zip: formData.zip,
      service: serviceLabel,
      message: combinedMessage,
      source: 'replacement_estimate_form',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      utm_source: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_source') : null,
      utm_medium: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_medium') : null,
      utm_campaign: typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('utm_campaign') : null,
    };

    try {
      let res = await fetch('/api/jobber-book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (res.status === 503 && !data.success) {
        res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const contactData = await res.json();
        if (res.ok) {
          submittedRef.current = true;
          setStatus('success');
          setUsedJobber(false);
          trackFormSubmit('replacement_estimate_form', { success: true, source: 'replacement_estimate_form' });
          trackLeadCaptured('replacement_estimate_form', false);
          trackReplacementFormSubmit();
          setFormData(emptyForm);
        } else {
          setStatus('error');
          setErrorMessage(contactData?.error || '');
        }
        return;
      }

      if (res.ok && data.success) {
        submittedRef.current = true;
        setStatus('success');
        setUsedJobber(true);
        trackFormSubmit('replacement_estimate_form', { success: true, source: 'replacement_estimate_form' });
        trackLeadCaptured('replacement_estimate_form', true);
        trackReplacementFormSubmit();
        setFormData(emptyForm);
      } else {
        setStatus('error');
        setErrorMessage(data?.error || '');
        trackFormSubmit('replacement_estimate_form', { success: false });
      }
    } catch {
      setStatus('error');
      setErrorMessage('');
    }
  };

  return (
    <form className="contact-form replacement-form" onSubmit={handleSubmit} noValidate>
      <h3 id="estimate">Request a Free Replacement Estimate</h3>
      <p className="replacement-form-intro">
        Licensed CAC1823924. We will follow up by your preferred contact method.
      </p>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="replacement-name">Full name</label>
          <input
            id="replacement-name"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleStart}
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'replacement-name-error' : undefined}
          />
          {fieldErrors.name && (
            <p id="replacement-name-error" className="form-field-error" role="alert">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="replacement-phone">Phone</label>
          <input
            id="replacement-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleStart}
            required
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? 'replacement-phone-error' : undefined}
          />
          {fieldErrors.phone && (
            <p id="replacement-phone-error" className="form-field-error" role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="replacement-email">Email</label>
          <input
            id="replacement-email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleStart}
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'replacement-email-error' : undefined}
          />
          {fieldErrors.email && (
            <p id="replacement-email-error" className="form-field-error" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="replacement-zip">ZIP code</label>
          <input
            id="replacement-zip"
            type="text"
            name="zip"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            value={formData.zip}
            onChange={handleChange}
            onFocus={handleStart}
            required
            aria-invalid={Boolean(fieldErrors.zip)}
            aria-describedby={fieldErrors.zip ? 'replacement-zip-error' : undefined}
          />
          {fieldErrors.zip && (
            <p id="replacement-zip-error" className="form-field-error" role="alert">
              {fieldErrors.zip}
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="replacement-service">Service needed</label>
        <select
          id="replacement-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          onFocus={handleStart}
          required
          aria-invalid={Boolean(fieldErrors.service)}
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="replacement-age">Approximate system age</label>
          <select
            id="replacement-age"
            name="systemAge"
            value={formData.systemAge}
            onChange={handleChange}
            onFocus={handleStart}
            required
            aria-invalid={Boolean(fieldErrors.systemAge)}
            aria-describedby={fieldErrors.systemAge ? 'replacement-age-error' : undefined}
          >
            <option value="">Select approximate age</option>
            {AGE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldErrors.systemAge && (
            <p id="replacement-age-error" className="form-field-error" role="alert">
              {fieldErrors.systemAge}
            </p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="replacement-contact">Preferred contact method</label>
          <select
            id="replacement-contact"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            onFocus={handleStart}
            required
          >
            {CONTACT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="replacement-message">Message (optional)</label>
        <textarea
          id="replacement-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onFocus={handleStart}
        />
      </div>

      <button type="submit" className="btn-submit" disabled={status === 'sending' || submittedRef.current}>
        {status === 'sending' ? 'Submitting...' : 'Request a Free Replacement Estimate'}
      </button>

      {status === 'success' && (
        <p className="form-success" role="status">
          {usedJobber
            ? 'Thanks. Your estimate request was sent to our scheduling system. We will be in touch soon.'
            : 'Thanks. We received your estimate request and will be in touch soon.'}
        </p>
      )}
      {status === 'error' && (
        <p className="form-error" role="alert">
          {errorMessage || 'Something went wrong. Please call us at (407) 973-1523.'}
        </p>
      )}
    </form>
  );
}
