import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-inner">
        <div className="about-content">
          <h2>A Leading HVAC Company You Can Trust</h2>
          <h3>Providing Reliable Home Comfort Solutions</h3>
          <p>
            At Novation Heating and Cooling, we pride ourselves on our expertise 
            and customer-focused approach to home comfort. Our background-checked team is 
            fully licensed, bonded, and insured for your peace of mind. We stay on top of 
            the latest industry developments to provide comprehensive services tailored 
            to your unique needs.
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
