/* eslint-disable no-unused-vars */
// CareerPath.js

import React from "react";
import EnrollCard from "../layout/EnrollCard"
const CareerPath = () => {
  const careerPaths = [
    "Software Developer",
   
    
     
    "Web Developer",
    "Network Engineer",
     
    "IT Project Manager",
     
    "Graphic Designer",
  ];

  return (
    <div className="bg-blueblack-500 p-4 rounded-lg text-white mt-8 ml-4 mr-8 text-center">
      <h2 className="text-4xl font-semibold">Career Paths</h2>
      <ul className="mt-2">
        {careerPaths.map((path, index) => (
          <ul key={index} className="list-disc ml-4">
            {path}
          </ul>
        ))}
      </ul>
      <EnrollCard/>
    </div>
    
  );
};

export default CareerPath;
