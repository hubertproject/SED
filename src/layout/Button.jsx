 /* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-red-500 py-2 px-5 rounded-full mt-4 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-yellow-500 hover:text-white hover:ring-4 hover:ring-yellow-300">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
