import React, { Component } from "react"

class MainItemFilter extends Component {
  state = {}
  onChange = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="film-name">Film name:</label>
          <input
            className="form-control"
            id="film-name"
            aria-describedby="emailHelp"
            placeholder="Enter film name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="film-name">Release Year:</label>
          <div className="container">
            {/* <input
              type="range"
              className="custom-range"
              id="ReleaseYear"
              onChange={this.onChange}
              min="1900"
              max={new Date().getFullYear()}
            /> */}

            <span className="col indigo-text mt-1">1950</span>
            <span className="col mr-auto indigo-text mt-1">2019</span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MainItemFilter
