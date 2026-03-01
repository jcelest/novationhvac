import './Specials.css';

export default function Specials() {
  return (
    <section id="specials" className="specials specials-veterans">
      <div className="container">
        <h2>Military & Veteran Savings</h2>
        <article className="special-card special-card-veterans">
          <div className="veterans-badge">
            <span className="veterans-star">★</span>
            <span className="veterans-offer">10% OFF</span>
            <span className="veterans-star">★</span>
          </div>
          <h3>For Veterans & Active Military</h3>
          <p>Thank you for your service. Novation Heating and Cooling proudly offers 10% off HVAC services to veterans and active military. Valid on repairs, installations, and maintenance.</p>
          <a href="#contact">Claim Your Discount</a>
        </article>
      </div>
    </section>
  );
}
