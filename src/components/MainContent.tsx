export function MainContent() {
  return (
    <section className="articles">

      <h2 className="section-title">New Articles</h2>

      <article className="article-card">

        <h3 className="article-title">
          <a href="#" className="article-title-link">Article Title 1</a>
        </h3>

        <div className="article-meta">
          <a href="#" className="article-date">2026/03/01</a>
          <a href="#" className="article-category">Category</a>
        </div>

        <a href="#" className="article-thumb-link">
          <img className="article-thumb" src="/img/main1.jpg" alt="Article 1" />
        </a>

        <p className="article-text">
          Short description text. Short description text. Short description text.
        </p>

        <a href="#" className="article-more">READ MORE</a>

      </article>

      <article className="article-card">

        <h3 className="article-title">
          <a href="#" className="article-title-link">Article Title 2</a>
        </h3>

        <div className="article-meta">
          <a href="#" className="article-date">2026/03/01</a>
          <a href="#" className="article-category">Category</a>
        </div>

        <a href="#" className="article-thumb-link">
          <img className="article-thumb" src="/img/main2.jpg" alt="Article 2" />
        </a>

        <p className="article-text">
          Short description text. Short description text. Short description text.
        </p>

        <a href="#" className="article-more">READ MORE</a>

      </article>

      <article className="article-card">

        <h3 className="article-title">
          <a href="#" className="article-title-link">Article Title 3</a>
        </h3>

        <div className="article-meta">
          <a href="#" className="article-date">2026/03/01</a>
          <a href="#" className="article-category">Category</a>
        </div>

        <a href="#" className="article-thumb-link">
          <img className="article-thumb" src="/img/main3.jpg" alt="Article 3" />
        </a>

        <p className="article-text">
          Short description text. Short description text. Short description text.
        </p>

        <a href="#" className="article-more">READ MORE</a>

      </article>
    </section>
  );
}