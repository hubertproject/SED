/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Stages = () => {
  return (
    <div className="bg-blue text-white md-auto p-2 pr-2">
      {" "}
      {/* Adjusted margin for small screens */}
      <div className="text-4xl font-bold mt-5 text-center text-off-white">
        Stages of the Programme
      </div>
      <h3 className="text-lg mb-8 text-flex md:mx-5 mt-5">
        Our 3-tested programme is aimed at taking you from a complete beginner
        to a high-earning world-class software engineer
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-maroona rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">01</div>
          <h4 className="text-xl font-bold mb-2">Preparatory Tuition</h4>
          <p className="text-sm">
            Our preparatory tuition is in two folds, the preparation in Tech
            subjects to open doors to the <a href="https://www.microverse.org/" className="text-blue-500" >Microverse</a> Training or opportunities
            in <a href="https://www.make-it-in-germany.com/en/" className="text-blue-500">Germany</a>. The choice is the trainee's. The other is the provision
            of German Language Lessons to meet the requirement for the 
            <a href="https://www.make-it-in-germany.com/en/study-training/training-in-germany" className="text-blue-500" > Dual Vocational training</a>
          </p>
        </div>

        <div className="bg-blown  rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">02</div>
          <h4 className="text-xl font-bold mb-2">Main Program</h4>
          <p className="text-sm">
          Enroll onto the <a href="https://www.microverse.org/" className="text-blue-500">Microverse</a> Training program for free for 10 months or take advantage of the Dual Vocational Training offered also for free in Germany with training allowance.

          </p>
        </div>

        <div className="bg-maroonn rounded-lg p-4 md:mx-5">
          <div className="text-4xl font-bold mb-4">03</div>
          <h4 className="text-xl font-bold mb-2">
            Access Remote Job Opportunity
          </h4>{" "}
          
          <p className="text-sm">
          The job offer after a successful completion of any of the programmes is a  <a href="https://youtu.be/E3SY8BkRZug/" className="text-blue-500">guarantee.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stages;
