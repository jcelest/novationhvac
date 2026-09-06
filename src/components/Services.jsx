import { Link } from 'react-router-dom';
import { CoolingIcon, HeatingIcon, IAQIcon, MaintenanceIcon, ReplacementIcon, RepairPathIcon } from './ServiceIcons';
import { trackReplacementCtaClick } from '../utils/analytics';
import './Services.css';

const paths = [
  {
    title: 'Repair',
    description: 'AC repair and diagnostics when you want to keep the current system running.',
    to: '/cooling',
    Icon: RepairPathIcon,
  },
  {
    title: 'Replacement',
    description: 'Free residential AC replacement estimates and new system installation.',
    to: '/ac-installation-replacement',
    Icon: ReplacementIcon,
    track: true,
  },
  {
    title: 'Maintenance',
    description: 'Tune-ups and maintenance plans that help catch problems before peak season.',
    to: '/cooling',
    Icon: MaintenanceIcon,
  },
];

const services = [
  {
    title: 'Cooling',
    description: 'Installation, repair, and maintenance for all AC systems. Stay cool year-round.',
    Icon: CoolingIcon,
    to: '/cooling',
  },
  {
    title: 'Heating',
    description: 'Furnace and heat pump services. Reliable warmth when you need it most.',
    Icon: HeatingIcon,
    to: '/heating',
  },
  {
    title: 'Indoor Air Quality',
    description: 'Air purification, filtration, and humidity control for healthier indoor air.',
    Icon: IAQIcon,
    to: '/indoor-air-quality',
  },
  {
    title: 'Maintenance Plans',
    description: 'Preventive maintenance to extend the life of your HVAC system.',
    Icon: MaintenanceIcon,
    to: '/book-appointment',
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
            AC repair near you across Central Florida, same-day when our schedule allows, plus
            cooling installs, heating, and tune-ups. Novation keeps your home comfortable with one
            licensed team.
          </p>
          <Link to="/book-appointment" className="btn-book">Book Your Appointment</Link>
        </div>
        <div className="customer-paths" aria-label="Repair, replacement, and maintenance">
          {paths.map((path) => {
            const Icon = path.Icon;
            return (
              <Link
                key={path.title}
                to={path.to}
                className="customer-path-card"
                onClick={path.track ? () => trackReplacementCtaClick('homepage_paths') : undefined}
              >
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </Link>
            );
          })}
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.Icon;
            return (
              <Link key={service.title} to={service.to} className="service-card service-card-link">
                <div className="service-icon">
                  <Icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
