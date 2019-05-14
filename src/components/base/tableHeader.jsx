import React, { Component } from "react"

/* 
@columns: array of collumns
@column: {
  label:
  path: 
}
@sortColumn: {
  column
  path
}
riseSort: func
*/

class TableHeader extends Component {
  // TO DO: REFACTOR
  renderTableHeader = (column, index) => {
    if (column.sortable === false) {
      return (
        <th key={index} scope="col">
          {column.label}
        </th>
      )
    } else {
      return (
        <th
          key={index}
          onClick={() => this.raiseSort(column.path)}
          className="clickable"
          scope="col"
        >
          {column.label} {this.renderSortIcon(column)}
        </th>
      )
    }
  }

  renderSortIcon = column => {
    const { sortColumn } = this.props

    if (column.path !== sortColumn.path) return null

    if (sortColumn.order === "asc")
      return (
        <span>
          <i className="fa fa-long-arrow-down" />
        </span>
      )

    return (
      <span>
        <i className="fa fa-long-arrow-up" />
      </span>
    )
  }

  render() {
    const { columns } = this.props

    return (
      <thead>
        <tr>
          {columns.map((column, index) =>
            this.renderTableHeader(column, index)
          )}
        </tr>
      </thead>
    )
  }

  raiseSort = path => {
    const sortColumn = this.props.sortColumn

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc"
    else {
      sortColumn.path = path
      sortColumn.order = "asc"
    }
    this.props.onSort(sortColumn)
  }
}

export default TableHeader
