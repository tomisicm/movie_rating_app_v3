import React from "react"
import { Link, NavLink } from "react-router-dom"

const MainNav = props => {
  // const user = { name: "djura" }
  const user = null

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-collapse justify-content-between">
        <ul className="navbar-nav mr-auto">
          <NavLink className="navbar-brand" to="/dashboard">
            Dashboard
          </NavLink>
          <li className="nav-item">
            <Link className="nav-link" to="/movies">
              Movies
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {!user && (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">
                  Action
                </button>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </div>
            </div>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  {user.name}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default MainNav
