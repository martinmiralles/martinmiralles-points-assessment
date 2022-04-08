import React, { useContext } from "react";
import { OptionsContext } from "../../OptionsContext";
import "./OptionCards.css";

const OptionCards = ({ type, amount, cost }) => {
  const { value, setValue } = useContext(OptionsContext);

  const getInfo = () => {
    setValue([amount, cost]);
    // console.log(value);
  };

  return (
    <div className="card" onClick={getInfo}>
      <div>
        <span>{type}</span> {amount}
      </div>
      <div className="cost">${cost.toFixed(2)}</div>
    </div>
  );
};

export default OptionCards;
