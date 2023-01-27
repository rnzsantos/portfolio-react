import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            Portfolio
          </a>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="projects">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </header>
  )
}
