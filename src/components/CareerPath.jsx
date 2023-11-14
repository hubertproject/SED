/* eslint-disable no-unused-vars */
 // CareerPath.js
import Stages from "../components/Stages";
import React from "react";
import EnrollCard from "../layout/EnrollCard";

const CareerPath = () => {
  const careerPaths = [
    "Software Developer",
    "Web Developer",
    "Network Engineer",
    "IT Project Manager",
    "Graphic Designer",
    "Phone Repairer"
  ];

  const pathsInRows = [];
  const pathsPerRow = 3;

  for (let i = 0; i < careerPaths.length; i += pathsPerRow) {
    pathsInRows.push(careerPaths.slice(i, i + pathsPerRow));
  }

  return (
    <>
      <div className="bg-blueblack-500 p-4 rounded-lg text-white mt-4 mr-4 text-center md:mx-5">
        <div className="text-4xl font-semibold text-off-white">Career Paths</div>
        <p className="mt-2">
          {pathsInRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex mt-4">
              {row.map((path, index) => (
                <ol key={index} className="list-disc ml-4 text-center ml-4">
                  {path}
                </ol>
              ))}
            </div>
          ))}
        </p>
        <div className="mb-4">
          <Stages />
        </div>
        <EnrollCard />
      </div>
    </>
  );
};

export default CareerPath;
