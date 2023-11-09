/* eslint-disable no-unused-vars */
import React from "react";

const Stages = () => {
  return (
    <div className="bg-blue text-white p-8 mt-4 md:mx-2 sm:mx-2"> {/* Adjusted margin for small screens */}
      <h2 className="text-4xl font-bold mb-4 text-center">Stages of the Programme</h2>
      <h3 className="text-lg mb-8 text-flex md:mx-5">Our 3-tested programme is aimed at taking you from a complete beginner to a high-earning world-class software engineer</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-600 rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">01</div>
          <h4 className="text-xl font-bold mb-2">Preparatory Tuition</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere. 
          </p>
        </div>

        <div className="bg-red-600 rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">02</div>
          <h4 className="text-xl font-bold mb-2">Main Program</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere.
          </p>
        </div>

        <div className="bg-red-600 rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">03</div>
          <h4 className="text-xl font-bold mb-2">Access Remote Job Opportunity</h4> {/* Corrected typo here: "Oppoutunity" to "Opportunity" */}
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            lorem eu justo auctor posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stages;
