/* eslint-disable no-irregular-whitespace */
// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-scroll";

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

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
};

export default About;
