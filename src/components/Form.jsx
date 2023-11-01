 /* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Use a regular expression to validate phone number
    const phonePattern = /^\d{10}$/; // This pattern assumes a 10-digit phone number
    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPhoneNumberValid(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    console.log(formData);
    // You can perform further actions, like sending data to an API, here.
  };

  return (
    <div className="w-full max-w-md mx-auto text-left">
      <form
        className="bg-blue text-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your Phone Number"
            onChange={handleChange}
            value={formData.phone}
            required
            inputMode="numeric"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="location"
            id="location"
            placeholder="Your Location"
            onChange={handleChange}
            value={formData.location}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="course"
          >
            Select a Course
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
            name="course"
            id="course"
            onChange={handleChange}
            value={formData.course}
            required
          >
            <option value="">Select a course</option>
            <option value="Coding">Coding</option>
            <option value="Networking">Networking</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Hardware">Hardware</option>
            <option value="Phone Repair and Service">
              Phone Repair and Service
            </option>
            <option value="German Language">German Language</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
  <button
    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
    type="submit"
  >
    Submit
  </button>
        </div>
      </form>
    </div>
    
  );
};

export default Form;
