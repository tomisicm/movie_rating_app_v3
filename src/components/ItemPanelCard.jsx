import React, { Component } from "react"

class ItemCard extends Component {
  state = {
    src: "http://placehold.jp/180x120.png"
  }

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <img
            className="card-img-top img-fluid"
            src={this.state.src}
            alt="movieImg"
          />
        </div>
        <div style={{ marginLeft: "22px" }} className="item-rating m*-2 p*-2">
          <span className="card-text">movie nameeee must two lines</span>
          <div class="row">
            <div class="col-sm">Rating</div>
            <div class="col-sm">Comments</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemCard
