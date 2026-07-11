export default function NumberedCard({ number, title, description }) {
  return (
    <article>
      <span>{String(number).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
