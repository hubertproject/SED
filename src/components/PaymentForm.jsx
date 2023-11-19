 /* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import PaystackPop from '@paystack/inline-js';

const PaymentForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');

  const payWithPaystack = (e) => {
    e.preventDefault();
    
    // Validate amount
    const parsedAmount = parseFloat(amount);
    if (parsedAmount < 150) {
      alert('Amount must be 150 or more.');
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_6ba2207be050fd0607140e2b7f8edb06c62fc998',
      amount: parsedAmount * 100,
      email,
      firstname,
      lastname,
      onSuccess: onPaymentSuccess,
    });
  };

  const onPaymentSuccess = () => {
    console.log('Payment success function called!');
    alert("Payment was successful");
    setEmail("");
    setAmount('');
    setFirstname("");
    setLastname("");
    
    // Assuming /ApplicationForm is the correct path
    navigate('/ApplicationForm');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    payWithPaystack(e);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-maroon">Payment Platform</h2>
      <form id="paymentForm" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2 text-left text-black">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email-address"
            className="border p-2 w-full"
            style={{ color: 'black' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-600 text-sm font-medium mb-2 text-left text-black">
            Amount
          </label>
          <input
            type="tel"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            className="border p-2 w-full"
            style={{ color: 'black' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="first-name" className="block text-gray-600 text-sm font-medium mb-2 text-left text-black">
            First Name
          </label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            id="first-name"
            className="border p-2 w-full text-left"
            style={{ color: 'black' }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="block text-gray-600 text-sm font-medium mb-2 text-left text-black">
            Last Name
          </label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            id="last-name"
            className="border p-2 w-full text-left"
            style={{ color: 'black' }}
          />
        </div>
        <div className="form-submit">
          <button type="submit" className="bg-gold text-black px-4 py-2 rounded hover:bg-green-700 focus:outline-none w-full">
            Proceed to Payment (150 GHS)
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
