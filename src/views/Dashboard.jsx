import React, { Component } from "react"

class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div className="content m*-4 mx-2">
        <div className="container mx-auto">
          <h1 className="my-4">The most recent movies</h1>
          <div className="movie-panel">
            <div class="row">
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
            </div>
            <div class="row">
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
              <div class="col-sm">One of three columns</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
