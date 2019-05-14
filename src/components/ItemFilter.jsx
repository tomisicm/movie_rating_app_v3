import React, { Component } from "react"

import { Range } from "rc-slider"
import "rc-slider/assets/index.css"

import Select from "react-select"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
]

class MainItemFilter extends Component {
  state = {
    releaseYear: [2000, new Date().getFullYear()],
    selectedOption: null
  }
  onChange = e => {
    const state = { ...this.state }
    this.setState({ ...state, releaseYear: e })
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
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

          <span className="col mr-auto indigo-text mt-1">
            {this.state.releaseYear[0]} - {this.state.releaseYear[1]}
          </span>

          <Range
            min={1900}
            max={new Date().getFullYear()}
            id="ReleaseYear"
            defaultValue={[
              this.state.releaseYear[0],
              this.state.releaseYear[1]
            ]}
            allowCross={false}
            onChange={this.onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="film-name">Genres</label>

          <Select
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
            isMulti={true}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default MainItemFilter
