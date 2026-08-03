import './IntentCredit.css';

export default function IntentCredit() {
  return (
    <div className="intent-credit-wrap">
      <a
        href="https://intentrev.net"
        target="_blank"
        rel="noopener noreferrer"
        className="intent-credit-badge"
        aria-label="Designed with Intent"
      >
        <img
          src="/images/intent-credit-logo.svg"
          alt=""
          className="intent-credit-logo"
          width={18}
          height={18}
          loading="lazy"
        />
        <span className="intent-credit-text">
          Designed with <strong>INTENT</strong>
        </span>
      </a>
    </div>
  );
}
