/* eslint-disable no-unused-vars */
// CareerPath.js
import Stages from "../components/Stages";
import React from "react";
import EnrollCard from "../layout/EnrollCard";

const CareerPath = () => {
  const careerPaths = [
    "Web Developer",
    "Software Developer",
    "Network Engineer",
    "IT Project Manager",
    "Graphic Designer",

    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ];

  // eslint-disable-next-line no-unused-vars
  const pathsPerRowSmallScreen = 2;
  const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
      <div className="bg-blueblack-500 p-4 rounded-lg text-white mb-10 mr-4 text-center md:mx-5">
        <div className="text-4xl font-semibold text-off-white mb-5">
          Career Paths
        </div>
        <div className={isSmallScreen ? "flex flex-wrap mt-4" : "flex mt-4"}>
          {careerPaths.map((path, index) => (
            <div key={index} className={isSmallScreen ? "w-1/2 mb-4" : "ml-4"}>
              <ol className="list-disc text-center">{path}</ol>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <Stages />
        </div>
        <EnrollCard />
      </div>
    </>
  );
};

export default CareerPath;
