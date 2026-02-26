export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer navigation">
          <ul className="footer-list">
            <li className="footer-item"><a className="footer-link" href="#">Home</a></li>
            <li className="footer-item"><a className="footer-link" href="#">Category</a></li>
            <li className="footer-item"><a className="footer-link" href="#">About</a></li>
          </ul>
        </nav>
        <p className="footer-copy">
          &copy; 2026 CodeJump Practice
        </p>
      </div>
    </footer>
  );
}