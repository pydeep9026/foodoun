import React, { useState } from "react";
import Header from "./header";

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessful(true);
    }, 3000);
  };

  return (
    <>
        <Header />
        <div className="paymentpage">
  <div className="paymentpage-content">
    <h1>Payment Page</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          placeholder="Enter 16 digit Card Number"
          required
          pattern="[0-9]{16}"
          onChange={handleCardNumberChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardName">Card Name:</label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          placeholder="Enter  Card Name"
          required
          onChange={handleCardNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          placeholder="MM/YY"
          required
          pattern="^(0[1-9]|1[0-2])\/[0-9]{2}$"
          onChange={handleExpiryDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          placeholder="Enter 3 digit CVV"
          required
          onChange={handleCvvChange}
          pattern="[0-9]{3}"
        />
      </div>
      <button type="submit" className="btn-pay">{isLoading ? "Loading..." : "Pay Now"}</button>
    </form>
    {isSuccessful && <p>Payment successful!</p>}
  </div>
</div>
    </>
  );
}

export default PaymentPage;
