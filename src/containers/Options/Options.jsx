import React from "react";
import "./Options.css";

import { OptionCards } from "../../components";
import { cardData } from "../../constants/data";

const Options = () => {
  return (
    <div className="options">
      {cardData.map((card, index) => (
        <OptionCards
          key={index}
          type={card.type}
          amount={card.amount}
          cost={card.cost}
        />
      ))}
    </div>
  );
};

export default Options;
