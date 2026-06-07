import './HeroTrustBadges.css';

const BADGES = [
  {
    id: 'licensed',
    label: 'Licensed & Insured',
    sub: 'CAC1823924',
    variant: 'gold',
    Icon: LicensedIcon,
  },
  {
    id: 'same-day',
    label: 'Same-Day Service',
    sub: 'When Available',
    variant: 'bronze',
    Icon: SameDayIcon,
  },
  {
    id: 'emergency',
    label: '24/7 Emergency',
    sub: 'Always On Call',
    variant: 'gold',
    Icon: EmergencyIcon,
  },
  {
    id: 'rated',
    label: '5-Star Rated',
    sub: 'Google Reviews',
    variant: 'bronze',
    Icon: StarRatingIcon,
  },
];

export default function HeroTrustBadges() {
  return (
    <ul className="hero-trust-badges" aria-label="Why customers trust Novation HVAC">
      {BADGES.map(({ id, label, sub, variant, Icon }, index) => (
        <li
          key={id}
          className={`hero-trust-badge hero-trust-badge--${variant}`}
          style={{ '--badge-delay': `${index * 0.08}s` }}
        >
          <span className="hero-trust-badge-ring" aria-hidden="true" />
          <span className="hero-trust-badge-icon">
            <Icon />
          </span>
          <span className="hero-trust-badge-label">{label}</span>
          <span className="hero-trust-badge-sub">{sub}</span>
        </li>
      ))}
    </ul>
  );
}

function MedallionFrame({ idPrefix, children }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={`url(#${idPrefix}-outer)`} stroke={`url(#${idPrefix}-ring)`} strokeWidth="2" />
      <circle cx="24" cy="24" r="17.5" fill={`url(#${idPrefix}-inner)`} stroke="rgba(253, 230, 138, 0.4)" strokeWidth="1" />
      {children}
      <defs>
        <linearGradient id={`${idPrefix}-outer`} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde68a" />
          <stop offset="0.45" stopColor="#d4af37" />
          <stop offset="1" stopColor="#92670a" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-ring`} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7cc" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
        <radialGradient id={`${idPrefix}-inner`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 22) rotate(90) scale(18)">
          <stop stopColor="#1e3a5f" />
          <stop offset="1" stopColor="#0f172a" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function LicensedIcon() {
  return (
    <MedallionFrame idPrefix="heroBadgeLicensed">
      <path
        d="M24 11 16 14v8.5c0 5.5 3.8 9 8 11 4.2-2 8-5.5 8-11V14l-8-3Z"
        fill="url(#heroBadgeShieldGold)"
        stroke="#fff7cc"
        strokeWidth="1.25"
      />
      <path d="M20 22.5 23 25.5 29 19.5" stroke="#fff7cc" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="heroBadgeShieldGold" x1="16" y1="11" x2="32" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbbf24" />
          <stop offset="1" stopColor="#b45309" />
        </linearGradient>
      </defs>
    </MedallionFrame>
  );
}

function SameDayIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="url(#heroBadgeGoldDisc)" stroke="url(#heroBadgeGoldDiscRing)" strokeWidth="2" />
      <circle cx="24" cy="24" r="17.5" fill="url(#heroBadgeGoldDiscInner)" stroke="rgba(253, 230, 138, 0.35)" strokeWidth="1" />
      <path
        d="M27 14 18 26h7.5l-1.5 9 11.5-14H27l1-7Z"
        fill="url(#heroBadgeBoltGold)"
        stroke="#fff7cc"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="heroBadgeGoldDisc" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7cc" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#92670a" />
        </linearGradient>
        <linearGradient id="heroBadgeGoldDiscRing" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
        <radialGradient id="heroBadgeGoldDiscInner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 22) rotate(90) scale(18)">
          <stop stopColor="#1e3a5f" />
          <stop offset="1" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="heroBadgeBoltGold" x1="18" y1="14" x2="30" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7cc" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function EmergencyIcon() {
  return (
    <MedallionFrame idPrefix="heroBadgeEmergency">
      <circle cx="24" cy="24" r="9.5" stroke="rgba(253, 230, 138, 0.5)" strokeWidth="1.25" />
      <path d="M24 17v7.5l5 3.2" stroke="#fde68a" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 13.5a15 15 0 0 0-1.5 3.5M33 13.5a15 15 0 0 1 1.5 3.5" stroke="#fbbf24" strokeWidth="1.75" strokeLinecap="round" />
      <text x="24" y="36.5" textAnchor="middle" fill="#fde68a" fontSize="6.5" fontWeight="800" fontFamily="Outfit, sans-serif">
        24/7
      </text>
    </MedallionFrame>
  );
}

function StarRatingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="url(#heroBadgeStarDisc)" stroke="url(#heroBadgeStarDiscRing)" strokeWidth="2" />
      <circle cx="24" cy="24" r="17.5" fill="url(#heroBadgeStarDiscInner)" stroke="rgba(253, 230, 138, 0.3)" strokeWidth="1" />
      <path
        d="M24 14.5 26.2 21.2 33.2 21.5 27.8 25.8 29.5 32.5 24 28.8 18.5 32.5 20.2 25.8 14.8 21.5 21.8 21.2 24 14.5Z"
        fill="url(#heroBadgeStarGold)"
        stroke="#fff7cc"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <circle cx="33.5" cy="15" r="2.5" fill="#b45309" stroke="#fde68a" strokeWidth="0.9" />
      <defs>
        <linearGradient id="heroBadgeStarDisc" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7cc" />
          <stop offset="0.55" stopColor="#d4af37" />
          <stop offset="1" stopColor="#92670a" />
        </linearGradient>
        <linearGradient id="heroBadgeStarDiscRing" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
        <radialGradient id="heroBadgeStarDiscInner" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 22) rotate(90) scale(18)">
          <stop stopColor="#1e3a5f" />
          <stop offset="1" stopColor="#0f172a" />
        </radialGradient>
        <linearGradient id="heroBadgeStarGold" x1="14" y1="14" x2="34" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff7cc" />
          <stop offset="0.5" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
    </svg>
  );
}
