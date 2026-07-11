import NumberedCard from './NumberedCard.jsx';
import { perks } from '../data/siteContent.js';

export default function PerksSection() {
  return (
    <section className="section perks" id="perks">
      <p className="eyebrow">Creator Perks</p>
      <h2>What You Get</h2>
      <p className="section-lead">Every creator who joins FanFest 2026 gets a full support package designed to help you shine.</p>
      <div className="perk-list">
        {perks.map(([title, description], index) => (
          <NumberedCard key={title} number={index + 1} title={title} description={description} />
        ))}
      </div>
    </section>
  );
}
