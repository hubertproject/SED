// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";

const InterFees = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      <div className="text-left"></div>
      <div className="bg-white p-4 rounded-lg relative">
        <h2 className="text-black font-bold text-xl">
          Tuition Fees
        </h2>
        <div className="text-black space-y-2">
          <h3 className="font-semibold">International</h3>
          <p>
            <strong>Software Engineering and other IT lessons</strong>
            <br />
            GHC 3,700, payable one-time
          </p>
          <h3 className="font-semibold">German Language Lessons</h3>
          <ul>
            <li>A1 - GHC 1,500 for 2 months</li>
            <li>A2 - GHC 1,700 for 2 months</li>
            <li>B1 - GHC 1,800 for 2 months</li>
            <li>B2 - GHC 1,900 for 2 months</li>
          </ul>
          <p>
            <strong>Learning materials (personal books)</strong>
            <br />
            GHC 500
          </p>
          <p>
            <strong>Duration:</strong>
            <br />
            A total of 8 months.
          </p>
        </div>
        <div className="absolute bottom-4 right-4 with-arrow">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <i className="text-blue-500 text-5xl cursor-pointer">&#8594;</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterFees;
