import React, { Component } from "react"

import ItemFilter from "../components/ItemFilter"

class MoviesPage extends Component {
  state = {}
  render() {
    return (
      <div className="content">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-4">
              <ItemFilter />
            </div>
            <div className="col-8">Movie list</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoviesPage
