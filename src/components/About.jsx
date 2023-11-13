/* eslint-disable no-unused-vars */
import React from "react";
import b6 from "../assets/b6.jpg";
import { Link } from "react-scroll";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-5 mx-5 mt-5">
      <div className="w-full md:w-2/3 mb-10 mt-5">
        <img src={b6} alt="img" style={{ maxWidth: "100%", height: "auto" }} />
      </div>

      <div className="w-full md:w-3/4 text-center space-y-2 mb-10 text-left"> {/* Updated text alignment */}
        <Heading title1="What We" title2="Do" />

        <div className="text-left"> {/* Added a container for better spacing */}
          <h2 className="text-2xl mt-2 font-semibold leading-tight">
            Vision
          </h2>
          <p className="text-white">
            To churn products with cutting-edge skills and knowledge in alignment
            with global industry demands.
          </p>

          <h2 className="text-2xl mt-6 font-semibold leading-tight"> {/* Added more spacing between Vision and Mission */}
            Mission
          </h2>
          <p className="text-white">
            Hands-on training to imbue in trainees industry-specific skills that
            are in high demand globally. Avoiding a mismatch of skills and job
            market demands.
          </p>
        </div>

        <p className="text-lightText mt-5 text-left">
        <div className="text-left space-y-2 mb-10"> 
        <h1 className="text-left font-bold text-2xl mt-2">About Us</h1>
          The SEDS Institute is an equal and emerging industry-relevant
          opportunity provider. We do so by providing training in software
          engineering and the provision of language lessons specifically in
          German so students can access a myriad of opportunities in education,
          work, and citizenship in Deutschland (Germany) and elsewhere. Our
          offers, curricula, and training are aligned with evolving needs of the
          job market and emerging industries. In short, we train for the job
          market, matching skills with demand, thereby avoiding a mismatch of
          skills and what the job market is advertising and needs. In Ghana, the
          industries and the Institute of learning and training are traveling in
          opposite directions. Curricula (program content) of the universities
          produce one thing, and the job market is looking for another. A major
          reason for youth unemployment. This abyss can, however, be escaped if
          you make the right decision now.
          </div>
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}></Link>
      </div>
      
    </div>
  );
};

export default About;
