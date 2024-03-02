import React from "react"

import leaves from './images/english-ivy.png'
import herbs from './images/herbs.png'
import fruits from './images/fruits.png'
import blooms from './images/flower.png'

const Card = ({ card }) => {

  const [rank, suit] = card.split(" ")
  let imgPath = null
  if (suit === "leaves") {
    imgPath = leaves
  } else if (suit === "herbs") {
    imgPath = herbs
  } else if (suit === "fruits") {
    imgPath = fruits
  } else if (suit === "blooms") {
    imgPath = blooms
  }

  return (
    <div className="cardStyles">
      <div className="inner-card-cont">
        <div style={{ textAlign: "center" }}>{card}</div>
        <img src={imgPath} className="card-icon" alt={`${rank} ${suit}`} />
      </div>
    </div>
  )
}

export default Card
