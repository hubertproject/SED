/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../layout/Button";
import s4 from "../assets/s4.svg";
import s2 from "../assets/s2.svg";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
        <div className="md:w-2/4 text-left">
          <h2 className="text-4xl font-semibold leading-tight">
             The SEDS
            <span className="text-brightGreen"> Institute</span>
          </h2>
          <p className="text-three mt-5 text-start">
            The SEDS Institute provides industry-relevant training in software
            engineering and German language to create job opportunities in
            Germany and beyond, aligning with evolving market needs. Our
            certifications come from the USA and the Goethe Institute, helping
            reduce youth unemployment in Ghana.
          </p>
          <Link to="/Form">
            <Button title="Enroll Now" />
          </Link>
        </div>
        
        <div className="w-full md:w-2/4 mt-5">
          <img src={s4} alt="img" />
        </div>
      </div>

      <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
        <div className="w-full md:w-2/4">
          <img src={s2} alt="img" />
        </div>

        <div className="w-full md:w-3/4 text-center space-y-2 mb-10">
          <Heading title1="WHAT WE" title2="DO" />
          <p className="text-lightText text-left">
            The SEDS Institute is an equal and emerging industry-relevant
            opportunity provider. We do so by providing training in software
            engineering and the provision of language lessons specifically in
            German so students can access a myriad of opportunities in education,
            work, and citizenship in Deutschland (Germany) and elsewhere. Our
            offers, curricula, and training are aligned with evolving needs of
            the job market and emerging industries. In short, we train for the
            job market, matching skills with demand, thereby avoiding a mismatch
            of skills and what the job market is advertising and needs. In
            Ghana, the industries and the Institute of learning and training are
            traveling in opposite directions. Curricula (program content) of the
            universities produce one thing, and the job market is looking for
            another. A major reason for youth unemployment. This abyss can
            however, be escaped if you make the right decision now.
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
