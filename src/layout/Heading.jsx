 /* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Heading.jsx
import React from "react";

const Heading = ({ title1, title2 }) => {
  return (
    <div className="text-center text-off-white">
      <h1 className="text-4xl font-bold">
        {title1} {title2}
      </h1>
    </div>
  );
};

export default Heading;
