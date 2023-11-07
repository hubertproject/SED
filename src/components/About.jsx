// eslint-disable-next-line no-unused-vars
import React from "react";
import s3 from "../assets/s1.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-2">
      <div className=" md:w-2/4 text-left">
        {/* <h2 className=" text-3xl font-semibold leading-tight">ABOUT US</h2> */}
        {/* <p className=" text-white mt-5 mb-4 text-start">
          About Us The SEDS Institute is an equal opportunity provider offering
          software engineering and German language training. Our focus is on
          aligning our programs with the evolving job market, preventing
          skills-job market mismatches, and addressing youth unemployment in
          Ghana with internationally recognized certifications from the USA and
          the Goethe Institute. Join us to bridge the education-industry gap and
          secure your future.
        </p> */}
        <h2 className=" text-2xl mt-2  font-semibold leading-tight">VISSION</h2>
        <p className=" text-white mt-5 text-start">
          To churn products with cutting-edge skills and knowledge in alignment
          with global industry demands.
        </p>
        <h2 className=" text-2xl mt-5  font-semibold leading-tight">VISION</h2>
        <p className=" text-white mt-5 text-start">
          Hands-on training to imbue in trainees industry specific skills that
          are in high demand globally. Avoiding a mismatch of skills and
          job market demands.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Enroll Now" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4 mt-4">
        <img src={s3} alt="img" />
      </div>
    </div>
  );
};

export default About;
