// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-5xl font-semibold leading-tight">
          Knowledge with
          <span className="text-brightGreen"> eStudy</span>
        </h2>
        <p className=" text-white mt-5 text-start">
          The SEDS Institute is an emerging educational provider, focusing on
          software engineering training and German language lessons. We align
          our programs with the evolving job market, aiming to equip students
          with skills that match industry needs. In Ghana, a mismatch between
          university curricula and job market requirements contributes to youth
          unemployment. SEDS aims to bridge this gap. Our certifications are
          recognized in the USA and Germany, offering a pathway to employment
          and citizenship opportunities. In a country with high youth
          unemployment, we are dedicated to making a positive impact.
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Enroll Now" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
