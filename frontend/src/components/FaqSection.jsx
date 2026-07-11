import { faqs } from '../data/siteContent.js';

export default function FaqSection() {
  return (
    <section className="section faq">
      <p className="eyebrow">Frequently Asked Questions</p>
      <h2>Got Questions?</h2>
      <div className="faq-list">
        {faqs.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
