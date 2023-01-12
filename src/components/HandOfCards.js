import React from "react";
import Card from "./Card";

const HandOfCards = ({ cards }) => (
  <div className="cards-container">
    {cards.map(({ symbol, face, }, index) => (
      <Card symbol={symbol} face={face} key={index} />
    ))}
  </div>
);

export default HandOfCards;