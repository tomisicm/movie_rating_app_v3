import React from "react"
import { Link, NavLink } from "react-router-dom"

const MainNav = props => {
  const user = { name: "djura" }
  //const user = null

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
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User
              </button>
              <div className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
              </div>
            </div>
          )}
          {user && (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <div className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                </li>
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default MainNav
