/* eslint-disable react/prop-types */
 // eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-gold text-black py-2 px-5 mt-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gold hover:text-maroon hover:ring-yellow-300 text-1xl">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
