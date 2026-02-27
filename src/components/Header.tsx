export function Header() {
  return(
    <header className="header">
      
        <div className="header-inner">
          <h1 className="header-logo">
            <a className="header-logo-link" href="#">
              <img className="header-logo-img" src="/img/logo.svg" alt="Logo" />
            </a>
          </h1>
          <nav className="header-nav" aria-label="Header navigation">
            <ul className="header-nav-list">
              <li className="header-nav-item"><a className="header-nav-link">NEW</a></li>
              <li className="header-nav-item"><a className="header-nav-link">COLUMN</a></li>
              <li className="header-nav-item"><a className="header-nav-link">SERIES</a></li>
              <li className="header-nav-item"><a className="header-nav-link">Q&amp;A</a></li>
              <li className="header-nav-item"><a className="header-nav-link">CONTACT</a></li>
            </ul>
          </nav>
        </div>

    </header>
  );
}