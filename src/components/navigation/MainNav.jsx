import React from "react"
import { Link, NavLink } from "react-router-dom"

const MainNav = props => {
  const user = { name: "djura" }
  // const user = null

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/dashboard">
        Dashboard
      </NavLink>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/movies">
            Movies
          </Link>
        </li>
      </ul>

      <div>
        <ul class="nav justify-content-end">
          {!user && (
            <React.Fragment>
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
            </React.Fragment>
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
