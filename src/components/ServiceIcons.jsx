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

export const ReplacementIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <rect x="12" y="18" width="18" height="28" rx="3" stroke="#2980b9" strokeWidth="2" />
    <rect x="34" y="14" width="18" height="32" rx="3" stroke="#e67e22" strokeWidth="2" />
    <path d="M21 32h6M43 28v8" stroke="#3498db" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RepairPathIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <circle cx="32" cy="32" r="20" stroke="#2980b9" strokeWidth="2" />
    <path d="M32 20v14l8 5" stroke="#3498db" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CompareIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <rect x="10" y="16" width="18" height="32" rx="3" stroke="#2980b9" strokeWidth="2" />
    <rect x="36" y="16" width="18" height="32" rx="3" stroke="#e67e22" strokeWidth="2" />
    <path d="M16 26h6M16 34h6M42 26h6M42 34h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ClipboardIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <rect x="16" y="14" width="32" height="40" rx="4" stroke="#2980b9" strokeWidth="2" />
    <path d="M24 14h16v8H24z" fill="#3498db" />
    <path d="M24 32h16M24 40h12" stroke="#1a5276" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const StepsIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <path d="M14 44h12v8H14zM26 32h12v20H26zM38 20h12v32H38z" fill="#3498db" opacity="0.25" stroke="#2980b9" strokeWidth="2" />
  </svg>
);

export const WarningSignIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <path d="M32 10 54 50H10L32 10z" stroke="#e67e22" strokeWidth="2" strokeLinejoin="round" />
    <path d="M32 26v12" stroke="#d35400" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="44" r="2" fill="#d35400" />
  </svg>
);

export const RebateIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={iconStyle} aria-hidden="true">
    <circle cx="32" cy="32" r="18" stroke="#27ae60" strokeWidth="2" />
    <path d="M26 32h12M32 24v16" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
