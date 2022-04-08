import React from "react";
import "./Payment.css";
import { PaymentDetails, OrderSummary } from "../../components";

const Payment = () => {
  return (
    <div className="payment">
      <h2>Payment details</h2>
      <div className="paymentColumns">
        <PaymentDetails />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Payment;
