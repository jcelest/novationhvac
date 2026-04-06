import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-content">
          <h2>A Leading HVAC Company You Can Trust</h2>
          <h3>AC Repair & New System Installation — One Team</h3>
          <ul className="about-pillars">
            <li><strong>AC repair & maintenance:</strong> Diagnostics, refrigerant and electrical issues, tune-ups, and honest repair-versus-replace guidance.</li>
            <li><strong>Installation & replacement:</strong> Right-sized equipment, high-efficiency options, and financing on qualifying systems—plus heating and indoor air quality.</li>
          </ul>
          <p>
            Based in Poinciana, we serve homeowners and businesses across Central Florida—including Orlando,
            Winter Haven, Lakeland, and nearby communities—with same-day and 24/7 emergency support when
            available. Our background-checked team is licensed (CAC1823924), bonded, and insured.
          </p>
          <p>
            We work hard to ensure your home stays comfortable, safe, and efficient. 
            If you need HVAC services, call our team today. We offer free estimates 
            to help you get started.
          </p>
          <a href="#contact" className="about-cta">
            <strong>We're Here When You Need Us</strong>
            <em>Same-Day Service & 24/7 Emergency Support</em>
            <span>Whether it's a routine tune-up or an urgent repair, our expert technicians are ready to help — any time, any day.</span>
            <span className="cta-link">Request Service Now →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
