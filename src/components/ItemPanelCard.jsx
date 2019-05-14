import React, { Component } from "react"

class ItemCard extends Component {
  state = {
    src: "http://placehold.jp/180x120.png"
  }

  render() {
    return (
      <div className="card border-secondary">
        <div
          className="card-body"
          style={{
            backgroundImage: `url(${this.state.src})`,
            height: "110px"
          }}
        >
          {/* <img
            className="card-img-top img-fluid"
            src={this.state.src}
            alt="movieImg"
          /> */}
        </div>
        <div className="item-rating">
          <h6 className="card-title pl-2">movie nameeee must two lines</h6>

          <div className="dropdown-divider" />
          <div className="row card-text">
            <div className="col pb-2 ml-2">Rating: 2.3</div>
            <div className="col pb-2 ml-1">Comments: 234</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemCard
