/** Clean vector icons for service cards - Cooling, Heating, IAQ, Maintenance */

const iconStyle = { width: '100%', height: '100%' };

export const CoolingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle}>
    <path d="M32 6v14M32 44v14M6 32h14M44 32h14M14 14l10 10M40 40l10 10M14 50l10-10M40 24l10-10" stroke="#2980b9" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="12" stroke="#3498db" strokeWidth="2" fill="none"/>
    <path d="M26 32h12M32 26v12" stroke="#2980b9" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const HeatingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle}>
    <path d="M32 8c-6 6-10 14-10 24s4 18 10 24 10-14 10-24-4-18-10-24z" fill="#e67e22" stroke="#d35400" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M32 18c-2 2-4 8-4 14s2 12 4 14 4-8 4-14-2-12-4-14z" fill="#fff" opacity="0.9"/>
  </svg>
);

export const IAQIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle}>
    <circle cx="32" cy="32" r="18" stroke="#27ae60" strokeWidth="2" fill="none"/>
    <path d="M32 18c-8 0-14 6-14 14s6 14 14 14 14-6 14-14-6-14-14-14z" stroke="#2ecc71" strokeWidth="1.5" fill="none"/>
    <circle cx="32" cy="32" r="6" fill="#27ae60" opacity="0.7"/>
  </svg>
);

export const MaintenanceIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle}>
    <path d="M22 42L14 50l8-8 4 4 16-16-4-4 8-8-8 8-16 16-4-4z" stroke="#2980b9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M46 18l6-6 4 4-6 6" stroke="#3498db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
