/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PaystackPop from 'paystack';

function PaymentForm() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const handler = PaystackPop.setup({
      key: '<Replace with your Api Key>', // Replace with your public key
      email: email,
      amount: amount * 100,
      currency: 'GHS',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      onClose: function () {
        alert('Window closed.');
      },
      callback: function (response) {
        const message = 'Payment complete! Reference: ' + response.reference;
        alert(message);
      }
    });

    handler.openIframe();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Pay with Paystack</button>
    </form>
  );
}

export default PaymentForm;
