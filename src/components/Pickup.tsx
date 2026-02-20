export function Pickup() {
  return(
    <section className="pickup">
      <div className="container">
        <div className="pickup-grid">
          <article className="pickup-card">
            <a href="#" className="pickup-link">
              <img className="pickup-thumb" src="/img/pickup1.jpg" alt="Pickup 1"/>
              <h2 className="pickup-title">Pickup Title 1</h2>
            </a>
          </article>
          <article className="pickup-card">
            <a href="#" className="pickup-link">
              <img className="pickup-thumb" src="/img/pickup2.jpg" alt="Pickup 2"/>
              <h2 className="pickup-title">Pickup Title 2</h2>
            </a>
          </article>
          <article className="pickup-card">
            <a href="#" className="pickup-link">
              <img className="pickup-thumb" src="/img/pickup3.jpg" alt="Pickup 3"/>
              <h2 className="pickup-title">Pickup Title 3</h2>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}