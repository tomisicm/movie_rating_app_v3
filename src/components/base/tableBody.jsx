import React, { Component } from "react"
import _ from "lodash"

/*
@data: array
@column: {
  label:
  path: 
}
@onLike
@onDelete
*/

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item)

    return _.get(item, column.path)
  }

  render() {
    const { data, columns } = this.props

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id || item.id}>
            {columns.map((column, index) => (
              <td key={index}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}

export default TableBody
