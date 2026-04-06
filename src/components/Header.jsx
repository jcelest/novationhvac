import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRouteForZip } from '../utils/zipToCity';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const navigate = useNavigate();

  const handleFindLocation = () => {
    const route = getRouteForZip(zipCode);
    if (route) {
      navigate(route);
      setMenuOpen(false);
    } else if (zipCode.length === 5) {
      navigate('/contact', { state: { zip: zipCode } });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="container header-top-inner">
          <div className="zip-lookup">
            <input
              type="text"
              placeholder="Enter Your 5-Digit Zip"
              maxLength={5}
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
              onKeyDown={(e) => e.key === 'Enter' && handleFindLocation()}
            />
            <button type="button" className="btn-find-location" onClick={handleFindLocation}>
              Find Location
            </button>
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
              <picture>
                <source srcSet="/images/logo.webp" type="image/webp" />
                <img
                  src="/images/logo.png"
                  alt="Novation Heating and Air Conditioning"
                  className="logo-img"
                  width={100}
                  height={58}
                  fetchPriority="high"
                />
              </picture>
            </Link>
            <a href="tel:4079731523" className="btn-call">
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
            <li><Link to="/cooling" onClick={() => setMenuOpen(false)}>Cooling</Link></li>
            <li><Link to="/heating" onClick={() => setMenuOpen(false)}>Heating</Link></li>
            <li><Link to="/indoor-air-quality" onClick={() => setMenuOpen(false)}>Indoor Air Quality</Link></li>
            <li><Link to="/specials" onClick={() => setMenuOpen(false)}>Specials</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            <li className="nav-cta"><Link to="/contact" onClick={() => setMenuOpen(false)}>Call Us Today!</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
