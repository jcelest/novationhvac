import { Link } from 'react-router-dom';
import { SERVICE_AREAS_HUB } from '../data/emphasisServiceAreas';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/">
            <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img
                src="/images/logo.png"
                alt="Novation Heating and Air Conditioning"
                className="footer-logo-img"
                width={100}
                height={58}
                loading="lazy"
              />
            </picture>
          </Link>
          <a href="tel:4079731523" className="footer-phone">(407) 973-1523</a>
        </div>
        <div className="footer-nav">
          <div className="footer-links-group">
            <span className="footer-label">Services</span>
            <Link to="/cooling">Cooling</Link>
            <Link to="/heating">Heating</Link>
            <Link to="/indoor-air-quality">Indoor Air Quality</Link>
            <Link to="/specials">Specials</Link>
            <Link to="/service-areas">Areas we serve</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-links-group footer-city-links">
            <span className="footer-label">Areas we serve</span>
            <Link to={SERVICE_AREAS_HUB.path} className="footer-areas-hub">
              {SERVICE_AREAS_HUB.labelLong}
            </Link>
            <span className="footer-label">More cities</span>
            <Link to="/kissimmee">Kissimmee</Link>
            <Link to="/osceola-county">Osceola County</Link>
            <Link to="/orange-county">Orange County</Link>
            <Link to="/polk-county">Polk County</Link>
            <Link to="/auburndale">Auburndale</Link>
            <Link to="/haines-city">Haines City</Link>
            <Link to="/dr-phillips">Dr. Phillips</Link>
            <Link to="/windermere">Windermere</Link>
            <Link to="/altamonte-springs">Altamonte Springs</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Novation Heating and Air Conditioning. License #CAC1823924</p>
        </div>
      </div>
    </footer>
  );
}
