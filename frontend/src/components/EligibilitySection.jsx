import { creatorTypes } from '../data/siteContent.js';

export default function EligibilitySection() {
  return (
    <section className="section eligibility">
      <div>
        <p className="eyebrow">Eligibility</p>
        <h2>Who Can Apply?</h2>
        <p>We welcome creators across every niche, platform, and audience size. If you create, this is for you.</p>
      </div>
      <div className="chips">
        {creatorTypes.map((type) => <span key={type}>{type}</span>)}
      </div>
    </section>
  );
}
