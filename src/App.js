import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css"

import MainNav from "./components/navigation/MainNav"

import Dashboard from "./views/Dashboard"
import MoviesPage from "./views/MoviesPage"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <MainNav />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/movies" component={MoviesPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
