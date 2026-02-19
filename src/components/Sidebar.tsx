export function Sidebar() {
  return (
    <div className="sidebar-inner">
      <section className="side-block">
        <h2 className="side-title">Profile</h2>
        <div className="side-thumb"></div>
        <p className="side-text">
          Short description text. Short description text. Short description text.
        </p>
      </section>
      <section className="side-block">
        <h2 className="side-title">Ranking</h2>
        <ol className="side-list">
          <li className="side-item">Ranking item 1</li>
          <li className="side-item">Ranking item 2</li>
          <li className="side-item">Ranking item 3</li>
        </ol>
      </section>
      <section className="side-block">
        <h2 className="side-title">Archive</h2>
        <ul className="side-list">
          <li className="side-item">2026</li>
          <li className="side-item">2025</li>
          <li className="side-item">2024</li>
        </ul>
      </section>
    </div>
  );
}