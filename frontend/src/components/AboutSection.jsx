import NumberedCard from './NumberedCard.jsx';
import { features } from '../data/siteContent.js';

export default function AboutSection() {
  return (
    <section className="section split" id="about">
      <div>
        <p className="eyebrow">What Is FanFest 2026</p>
        <h2>Where Creators<br />Meet Their Fans</h2>
        <p>
          Three days of panels, activations, live streams, brand collaborations, and unforgettable fan moments,
          all under one roof.
        </p>
      </div>
      <div className="feature-grid">
        {features.map(([title, description], index) => (
          <NumberedCard key={title} number={index + 1} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}
