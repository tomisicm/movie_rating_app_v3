import React, { Component } from "react"

import ItemPanelCard from "../components/ItemPanelCard"

class Dashboard extends Component {
  state = {}
  render() {
    return (
      <div className="content">
        <div className="container mx-auto">
          <h1 className="my-4">The most recent movies</h1>
          <div className="movie-panel">
            <div className="row">
              <div className="col mb-1">
                <ItemPanelCard />
              </div>
              <div className="col mb-1">
                <ItemPanelCard />
              </div>
              <div className="col mb-1">
                <ItemPanelCard />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <ItemPanelCard />
              </div>
              <div className="col-sm">
                <ItemPanelCard />
              </div>
              <div className="col-sm">
                <ItemPanelCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
