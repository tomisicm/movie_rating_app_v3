import React, { Component } from "react"
import { Link } from "react-router-dom"

import Table from "./common/tables/table"

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      sortable: true,
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre", sortable: true },
    { path: "numberInStock", label: "Stock", sortable: false },
    { path: "dailyRentalRate", label: "Rental", sortable: false }
  ]

  render() {
    const { movies, onSort, sortColumn } = this.props
    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    )
  }
}

export default MoviesTable
