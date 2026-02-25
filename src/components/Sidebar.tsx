export function Sidebar() {
  return (
    <div className="sidebar-inner">

      <section className="side-block">
        <img className="side-thumb" src="/img/author.jpg" alt="作者" />
        <p className="side-author">Name Name</p>
        <p className="side-text">
          Short description text. Short description text. Short description text.
        </p>
      </section>

      <section className="side-block">
        <h2 className="side-title">Ranking</h2>
        <ol className="ranking-list">
          <li className="ranking-item">
            <a className="side-link" href="#">
              <img className="ranking-thumb" src="/img/ranking1.jpg" alt="ranking 1" />
              <p className="ranking-text">Ranking item 1</p>
            </a>
          </li>
          <li className="ranking-item">
            <a className="side-link" href="#">
              <img className="ranking-thumb" src="/img/ranking2.jpg" alt="ranking 2" />
              <p className="ranking-text">Ranking item 2</p>
            </a>
          </li>
          <li className="ranking-item">
            <a className="side-link" href="#">
              <img className="ranking-thumb" src="/img/ranking3.jpg" alt="ranking 3" />
              <p className="ranking-text">Ranking item 3</p>
            </a>
          </li>
        </ol>
      </section>

      <section className="side-block">
        <h2 className="side-title">Archive</h2>
        <ul className="archive-list">
          <li className="archive-item"><a className="side-link" href="#">2026/3</a></li>
          <li className="archive-item"><a className="side-link" href="#">2026/2</a></li>
          <li className="archive-item"><a className="side-link" href="#">2026/1</a></li>
        </ul>
      </section>

    </div>
  );
}