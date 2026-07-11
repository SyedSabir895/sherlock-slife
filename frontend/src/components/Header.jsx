export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="FanFest 2026 home">Fan Fest 2026</a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#perks">Perks</a>
        <a href="#timeline">Timeline</a>
        <a className="nav-cta" href="#apply">Apply Now</a>
      </nav>
    </header>
  );
}
