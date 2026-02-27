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
            <ul className="footer-about">
              <li className="footer-about-item"><a className="footer-link footer-link--arrow" href="#">プロフィール詳細</a></li>
              <li className="footer-about-item"><a className="footer-link footer-link--arrow" href="#">お仕事の依頼</a></li>
              <li className="footer-about-item"><a className="footer-link footer-link--arrow" href="#">お問い合わせ</a></li>
            </ul>
          </section>

          <section className="footer-block">
            <h2 className="fotter-title">MENU</h2>
            <ul className="footer-menu">
              <li className="footer-menu-item"><a className="footer-link" href="#">NEW</a></li>
              <li className="footer-menu-item"><a className="footer-link" href="#">CATEGORY</a></li>
              <li className="footer-menu-item"><a className="footer-link" href="#">COLUMN</a></li>
              <li className="footer-menu-item"><a className="footer-link" href="#">SERIES</a></li>
              <li className="footer-menu-item"><a className="footer-link" href="#">Q&A</a></li>
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