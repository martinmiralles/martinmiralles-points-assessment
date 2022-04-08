import React, { useContext } from "react";
import { OptionsContext } from "../../OptionsContext";
import "./OrderSummary.css";

const OrderSummary = () => {
  const { value, setValue } = useContext(OptionsContext);

  return (
    <div className="orderSummary">
      <h2>Order summary</h2>
      <div className="totalMiles">
        <div>Total miles</div>
        <span>{value[0]}</span>
      </div>

      <div className="gstHst">
        <div>GST/HST</div>
        <span>$20.00</span>
      </div>

      <div className="totalCost">
        <div>Total cost</div>
        <span>${(value[1] + 20).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
