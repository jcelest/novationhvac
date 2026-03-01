import './Services.css';

const services = [
  {
    title: 'Cooling',
    description: 'Installation, repair, and maintenance for all AC systems. Stay cool year-round.',
    icon: '❄️',
  },
  {
    title: 'Heating',
    description: 'Furnace and heat pump services. Reliable warmth when you need it most.',
    icon: '🔥',
  },
  {
    title: 'Indoor Air Quality',
    description: 'Air purification, humidity control, and duct cleaning for healthier air.',
    icon: '💨',
  },
  {
    title: 'Maintenance Plans',
    description: 'Preventive maintenance to extend the life of your HVAC system.',
    icon: '🔧',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Trusted Services</span>
          <h2>How Can We Help You Today?</h2>
          <p>
            From AC repair and replacement to heating installations and tune-ups, 
            Novation keeps your home comfortable — all from one trusted team.
          </p>
          <a href="#contact" className="btn-book">Book Your Appointment</a>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <article key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
