import './Specials.css';

const specials = [
  { offer: '$49', title: 'Heating or AC Tune-Up', terms: 'Valid year-round. Schedule your maintenance today.' },
  { offer: '$100 OFF', title: 'New AC System Installation', terms: 'Terms apply. Ask for details.' },
  { offer: '0% APR', title: 'Flexible Financing Available', terms: 'Qualified customers. Apply today.' },
];

export default function Specials() {
  return (
    <section id="specials" className="specials">
      <div className="container">
        <h2>Don't Miss Out on These Savings!</h2>
        <div className="specials-grid">
          {specials.map((special, i) => (
            <article key={i} className="special-card">
              <div className="special-offer">{special.offer}</div>
              <h3>{special.title}</h3>
              <p>{special.terms}</p>
              <a href="#contact">Get This Deal</a>
            </article>
          ))}
        </div>
        <a href="#contact" className="specials-all">View All Specials</a>
      </div>
    </section>
  );
}
