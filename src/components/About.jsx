/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/about.svg";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
        <p className="text-lightText">
          The SEDS Institute is a forward-thinking provider of opportunities in
          software engineering and the German language. Our mission is to align
          training with industry needs, ensuring our students are job-ready. We
          bridge the gap between education and employment, addressing youth
          unemployment. Our certifications are recognized in the USA and
          Germany, and we are dedicated to combatting high youth unemployment in
          Ghana.
        </p>

        <div className="space-y-2">
          <h2 className="font-bold text-xl">Mission:</h2>
          <p className="text-lightText">
            Hands-on training to imbue in trainees industry specific skills that
            are in high demand globally. Avoiding a mismatch of skills and
            job market demands.
          </p>
          <h2 className="font-bold text-xl">Vision:</h2>
          <p className="text-lightText">
            To churn products with cutting-edge skills and knowledge in
            alignment with global industry demands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
