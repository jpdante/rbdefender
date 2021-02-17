import "./navbar.scss";
import logo from "./../../images/logo.png";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="brand-container">
          <div className="brand">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="" height={33} />
            </a>
          </div>
          <a className="client-area" href="/">
            Área do Cliente
          </a>
        </div>
        <ul className="button-bar">
          <li className="nav-link">
            <a href="/">Serviços</a>
            <hr/>
          </li>
          <li className="nav-link">
            <a href="/">Projetos</a>
            <hr/>
          </li>
          <li className="nav-link">
            <a href="/">Soluções</a>
            <hr/>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
