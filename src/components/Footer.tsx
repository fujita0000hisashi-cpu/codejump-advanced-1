export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <section className="footer-block">
            <h2 className="fotter-title">About</h2>
            <p className="footer-text">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </section>

          <section className="footer-block">
            <h2 className="fotter-title">MENU</h2>
            <ul className="footer-list">
              <li className="footer-item"><a className="footer-link" href="#">NEW</a></li>
              <li className="footer-item"><a className="footer-link" href="#">CATEGORY</a></li>
              <li className="footer-item"><a className="footer-link" href="#">CONTACT</a></li>
            </ul>
          </section>

          <section className="footer-block">
            <h2 className="fotter-title">X</h2>
            <p className="footer-text">
              テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </section>
        </div>
        
        <p className="footer-copy">
          &copy; 2026 CodeJump Practice
        </p>
      </div>
    </footer>
  );
}