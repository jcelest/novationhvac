import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">NOVATION</span>
          <span className="footer-tagline">Heating · Cooling</span>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#specials">Specials</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <span className="footer-city-links">
            <a href="/orlando.html">Orlando</a>
            <a href="/kissimmee.html">Kissimmee</a>
            <a href="/poinciana.html">Poinciana</a>
            <a href="/osceola-county.html">Osceola County</a>
            <a href="/orange-county.html">Orange County</a>
            <a href="/polk-county.html">Polk County</a>
            <a href="/winter-haven.html">Winter Haven</a>
            <a href="/auburndale.html">Auburndale</a>
            <a href="/haines-city.html">Haines City</a>
            <a href="/dr-phillips.html">Dr. Phillips</a>
            <a href="/windermere.html">Windermere</a>
            <a href="/altamonte-springs.html">Altamonte Springs</a>
          </span>
        </div>
        <div className="footer-contact">
          <a href="tel:18001234567">(800) 123-4567</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Novation Heating and Cooling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
