 // eslint-disable-next-line no-unused-vars
import React from "react";
import r3 from "../assets/r3.jpg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-left">
        <h2 className=" text-3xl font-semibold leading-tight">
          ABOUT US
         
        </h2>
        <p className=" text-white mt-5 mb-4 text-start">
          Hands-on training to imbue in trainees industry specific skills that
          are in high demand globally. Avoiding a mismatch of skills and job
          market demands.
        </p>
        <h2 className=" text-2xl mt-2  font-semibold leading-tight">
          MISSION
         
        </h2>
        <p className=" text-white mt-3 text-start">
        Hands-on training to imbue in trainees industry specific skills that
          are in high demand globally. Avoiding a mismatch of skills and job
          market demands
        </p>
        <h2 className=" text-2xl mt-2  font-semibold leading-tight">
          VISION
          
        </h2>
        <p className=" text-white mt-3 text-start">
          To churn products with cutting-edge skills and knowledge in alignment
          with global industry demands.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Enroll Now" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4 mt-5">
        <img src={r3} alt="img" />
      </div>
    </div>
  );
};

export default About;
