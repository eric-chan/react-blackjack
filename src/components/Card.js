import React from "react";

const Card = card => (
  <div className={`card ${card.color}`}>
    <h3> {card.face} </h3>
    <h3> {card.symbol} </h3>
    <h4> {card.index}</h4>
  </div>
);

export default Card;