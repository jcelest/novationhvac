import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="zip-lookup">
            <input
              type="text"
              placeholder="Enter Your 5-digit Zip"
              maxLength={5}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
            />
            <button className="btn-find-location">Find Location</button>
          </div>
          <div className="header-top-right">
            <button
              className="menu-toggle"
              aria-label="Main Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/" className="logo">
              <span className="logo-text">NOVATION</span>
              <span className="logo-subtitle">HEATING · COOLING</span>
            </Link>
            <a href="tel:18001234567" className="btn-call">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <div className="container nav-inner">
          <ul className="nav-links">
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Cooling</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Heating</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Indoor Air Quality</a></li>
            <li><a href="#specials" onClick={() => setMenuOpen(false)}>Specials</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            <li className="nav-cta"><a href="#contact" onClick={() => setMenuOpen(false)}>Call Us Today!</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
