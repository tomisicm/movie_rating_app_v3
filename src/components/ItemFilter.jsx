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
  onRangeChange = e => {
    const state = { ...this.state }
    this.setState({ ...state, releaseYear: e })
  }

  handleSelect = selectedOption => {
    this.setState({ selectedOption })
    console.log(`Option selected:`, selectedOption)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="film-name">Film title:</label>
          <input
            className="form-control"
            id="film-name"
            aria-describedby="emailHelp"
            placeholder="Enter film title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="film-release-year">Release Year:</label>

          <span className="col indigo-text mt-1">
            {this.state.releaseYear[0]} - {this.state.releaseYear[1]}
          </span>

          <Range
            min={1900}
            max={new Date().getFullYear()}
            id="film-release-year"
            defaultValue={[
              this.state.releaseYear[0],
              this.state.releaseYear[1]
            ]}
            allowCross={false}
            onChange={this.onRangeChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="film-genre">Genres</label>

          <Select
            id="film-genre"
            value={this.state.selectedOption}
            onChange={this.handleSelect}
            options={options}
            isMulti={true}
            placeholder="Select Genres"
          />
        </div>

        <div className="form-group mt-3">
          <button type="button" className="btn btn-light mr-2">
            Clear
          </button>
          <button type="button" className="btn btn-primary ml-2">
            Search
          </button>
        </div>
      </form>
    )
  }
}

export default MainItemFilter
