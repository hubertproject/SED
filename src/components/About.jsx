 // eslint-disable-next-line no-unused-vars
import React from "react";
import r2 from "../assets/r2.jpg";
import { Link } from "react-scroll";
import Heading from "../layout/Heading";

const About = () => {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-5 mx-5 mt-5">
      <div className="w-full md:w-2/3 mb-10">
        <img
          src={r2}
          alt="img"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="w-full md:w-3/4 text-center space-y-2 mb-10">
        
        <Heading title1="WHAT WE" title2="DO" />

        <p className="text-lightText text-left">
          The SEDS Institute is an equal and emerging industry-relevant
          opportunity provider. We do so by providing training in software
          engineering and the provision of language lessons specifically in
          German so students can access a myriad of opportunities in
          education, work, and citizenship in Deutschland (Germany) and
          elsewhere. Our offers, curricula, and training are aligned with
          evolving needs of the job market and emerging industries. In short,
          we train for the job market, matching skills with demand, thereby
          avoiding a mismatch of skills and what the job market is advertising
          and needs. In Ghana, the industries and the Institute of learning
          and training are traveling in opposite directions. Curricula
          (program content) of the universities produce one thing, and the job
          market is looking for another. A major reason for youth
          unemployment. This abyss can, however, be escaped if you make the
          right decision now.
        </p>
 

            <h2 className="text-2xl mt-2 font-semibold leading-tight text-left">VISION</h2>
            <p className="text-white mt-2 text-start">
              To churn products with cutting-edge skills and knowledge in alignment
              with global industry demands.
            </p>
            <h2 className="text-2xl mt-2 font-semibold leading-tight text-left">MISSION</h2>
            <p className="text-white mt-5 text-start mb-4">
              Hands-on training to imbue in trainees industry-specific skills that
              are in high demand globally. Avoiding a mismatch of skills and
              job market demands.
            </p>

            <Link to="contact" spy={true} smooth={true} duration={500}>
               
            </Link>
          </div>

         
        </div>
      
     
  );
};

export default About;
