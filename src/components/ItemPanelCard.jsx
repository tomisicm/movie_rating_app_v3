import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faComment } from "@fortawesome/free-solid-svg-icons"

const ItemCard = () => {
  const src = "http://placehold.jp/180x120.png"
  return (
    <div className="card border-secondary">
      <div
        className="card-body"
        style={{
          backgroundImage: `url(${src})`,
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
          <div className="col pb-2 ml-2">
            <FontAwesomeIcon className="pl-1 ml-1" icon={faStar} />
            <span className="pl-1">Rating: 2.3</span>
          </div>
          <div className="col pb-2 ml-1">
            <FontAwesomeIcon className="pl-1 ml-1" icon={faComment} />
            <span className="pl-1">Comments: 2</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
