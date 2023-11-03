/* eslint-disable react/prop-types */
 // eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-goldenYellow text-white py-2 px-5 mt-4 rounded-lg transition duration-300 ease-in-out transform hover:shadow-md hover:bg-goldenYellow hover:text-white hover:ring-yellow-300">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
