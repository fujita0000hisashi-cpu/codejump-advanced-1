export function MainContent() {
  return (
    <section className="articles">
      <h2 className="section-title">New Articles</h2>
      <article className="article-card">
        <div className="article-thumb"></div>
        <div className="article-body">
          <h3 className="article-title">Article Title 1</h3>
          <p className="article-text">
            Short description text. Short description text. Short description text.
            </p>
        </div>
      </article>
      <article className="article-card">
        <div className="article-thumb"></div>
        <div className="article-body">
          <h3 className="article-title">Article Title 2</h3>
          <p className="article-text">
            Short description text. Short description text. Short description text.
            </p>
        </div>
      </article>
      <article className="article-card">
        <div className="article-thumb"></div>
        <div className="article-body">
          <h3 className="article-title">Article Title 3</h3>
          <p className="article-text">
            Short description text. Short description text. Short description text.
          </p>
        </div>
      </article>
    </section>
  );
}