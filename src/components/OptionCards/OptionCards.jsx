import React from "react";
import "./OptionCards.css";

const OptionCards = ({ type, amount, cost }) => (
  <div className="card">
    <div>
      <span>{type}</span> {amount} miles
    </div>
    <div className="cost">${cost.toFixed(2)}</div>
  </div>
);

export default OptionCards;
