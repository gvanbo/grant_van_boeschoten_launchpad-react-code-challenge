import { Link } from "react-router-dom";

const NavBar = ({ isActive }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          LaunchPad by Grant
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link"  aria-current="page" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/university" className="nav-link" >
                University
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/postal-lookup" className="nav-link" >
                Postal Lookup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
