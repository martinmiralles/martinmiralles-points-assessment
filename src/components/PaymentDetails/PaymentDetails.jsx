import React from "react";
import "./PaymentDetails.css";

const PaymentDetails = () => {
  return (
    <div className="paymentDetails">
      <div className="paymentMessage">
        <p>
          We accept all major credit cards. Please ensure that you enter your
          details exactly as they appear on your credit card statement. All
          fields are required unless is indicated.
        </p>
      </div>

      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="Cardholder name">Cardholder name</label>
            <input type="text" required id="cardNumber" />
          </div>

          <div className="form-group">
            <label htmlFor="Cardholder number">Cardholder number</label>
            <input
              type="tel"
              inputMode="numeric"
              required
              id="cardNumber"
              pattern="\d*"
              maxLength={19}
            />
          </div>

          <div className="form-group w50">
            <label htmlFor="Expiration date">Expiration date</label>
            <input
              type="tel"
              inputMode="numeric"
              required
              id="expirationDate"
              pattern="\d*"
              maxLength="4"
              placeholder="MMYY"
            />
          </div>

          <div className="form-group w50">
            <label htmlFor="CVV">CVV</label>
            <input
              type="tel"
              inputMode="numeric"
              required
              id="expirationDate"
              pattern="\d*"
              maxLength="4"
            />
          </div>

          <h2>Billing Address</h2>

          <div className="form-group w75">
            <label htmlFor="Street Address">Street Address</label>
            <input type="text" required id="streetAddress" />
          </div>

          <div className="form-group w75">
            <label htmlFor="Apt, Suite, Unit Number (Optional)">
              Apt, Suite, Unit Number (Optional)
            </label>
            <input type="text" required id="aptSuiteUnit" />
          </div>

          <div className="form-group w75">
            <label htmlFor="City / Town">City / Town</label>
            <input type="text" required id="cityTown" />
          </div>

          <div className="form-group w75">
            <label htmlFor="Country">Country</label>
            <select name="country" required id="country">
              <option value="" defaultValue="selected">
                Select a country
              </option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="form-group w75">
            <label htmlFor="State / Province">State / Province</label>
            <select name="stateProvince" required id="stateProvince">
              <option value="" defaultValue="selected">
                Select a state or province
              </option>
              <option value="AB">Alberta</option>
              <option value="BC">British Columbia</option>
              <option value="MB">Manitoba</option>
              <option value="NB">New Brunswick</option>
              <option value="NL">Newfoundland and Labrador</option>
              <option value="NS">Nova Scotia</option>
              <option value="NT">Northwest Territories</option>
              <option value="NU">Nunavut</option>
              <option value="ON">Ontario</option>
              <option value="PE">Prince Edward Island</option>
              <option value="QC">Quebec</option>
              <option value="SK">Saskatchewan</option>
              <option value="YT">Yukon</option>
            </select>
          </div>

          <div className="form-group w75">
            <label htmlFor="Zip / Postal code">Zip / Postal code</label>
            <input type="text" required id="zipPostalCode" />
          </div>

          <div className="form-group w75">
            <label htmlFor="Phone number">Phone number</label>
            <input type="tel" required id="phoneNumber" />
          </div>

          <div className="form-group w75">
            <label htmlFor="Email receipt to">Email receipt to</label>
            <input type="email" required id="email" />
          </div>

          <div className="form-group-checkbox">
            <input
              type="checkbox"
              id="termsConditions"
              name="termsConditions"
              value="termsConditions"
            />
            <label htmlFor="termsConditions">
              I agree to the{" "}
              <a href="#">
                <span>terms and conditions</span>
              </a>
            </label>
          </div>

          <div className="form-group ">
            <button type="submit" className="btn">
              Buy Miles
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
