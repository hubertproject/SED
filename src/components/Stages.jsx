/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Stages = () => {
  return (
    <div className="bg-blue text-white p-8 mt-4 md:mx-2 sm:mx-2">
      {" "}
      {/* Adjusted margin for small screens */}
      <div className="text-4xl font-bold mb-4 text-center text-maroon">
        Stages of the Programme
      </div>
      <h3 className="text-lg mb-8 text-flex md:mx-5">
        Our 3-tested programme is aimed at taking you from a complete beginner
        to a high-earning world-class software engineer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gold rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">01</div>
          <h4 className="text-xl font-bold mb-2">Preparatory Tuition</h4>
          <p className="text-sm">
            Our preparatory tuition is in two folds, the preparation in Tech
            subjects to open doors to the Microverse Training or opportunities
            in Germany. The choice is the trainee's. The other is the provision
            of German Language Lessons to meet the requirement for the Dual
            Vocational Training.
          </p>
        </div>

        <div className="bg-maroon rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">02</div>
          <h4 className="text-xl font-bold mb-2">Main Program</h4>
          <p className="text-sm">
          Enrol onto the Microverse Training program for free for 10 months or take advantage of the Dual Vocational Training offered also for free in Germany with training allowance.

          </p>
        </div>

        <div className="bg-red-600 rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">03</div>
          <h4 className="text-xl font-bold mb-2">
            Access Remote Job Opportunity
          </h4>{" "}
          
          <p className="text-sm">
          The job offer after a successful completion of any of the programmes a guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stages;
