import React, { useState, useContext } from "react";
import "./Options.css";
import { OptionContext } from "../../App";

import { OptionCards } from "../../components";
import { cardData } from "../../constants/data";

const Options = () => {
  const test = () => {
    console.log("test");
  };

  return (
    <div className="options">
      {cardData.map((card, index) => (
        <OptionCards
          onClick={test}
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
