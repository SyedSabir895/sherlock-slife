import { stats } from '../data/siteContent.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">Open Applications - Limited Spots</p>
        <h1>Create.<br />Connect.<br />Dominate.</h1>
        <p className="hero-copy">
          FanFest 2026 is calling on creators like you to be part of the biggest fan-powered event of the year.
          Share your world, grow your audience, and make history.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#apply">Apply as a Creator</a>
          <a className="button primary" href="#about">Learn More</a>
        </div>
      </div>
      <dl className="stats" aria-label="Event statistics">
        {stats.map(([value, label]) => (
          <div key={label}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
