import { timeline } from '../data/siteContent.js';

export default function TimelineSection() {
  return (
    <section className="section timeline" id="timeline">
      <p className="eyebrow">Key Dates</p>
      <h2>Application Timeline</h2>
      <div className="timeline-list">
        {timeline.map(([date, title, description], index) => (
          <article key={title}>
            <b>{index + 1}</b>
            <time>{date}</time>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
