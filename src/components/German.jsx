/* eslint-disable no-unused-vars */
import React from "react";

import GermanCard from "../layout/GermanCard";
import b4 from "../assets/b4.jpg";
import a5 from "../assets/a5.png";

import a2 from "../assets/a2.png";
import a7 from "../assets/a7.jpg";
import GermanSubtitle from "../components/GermanSubtitle";
import CareerPath from "../components/CareerPath";

const German = () => {
  return (
    <div>
      <div className="bg-custom-color">
        <div className="container mx-auto p-4 ">
          <GermanSubtitle />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center text-black">
      <div className="flex flex-wrap gap-6 justify-center text-black p-4 ">

        <GermanCard img={a7} title="A1" description="A1 German for Beginners.Shows the acquisition of basic  language skills in consonance with the CEFR." />
        <GermanCard img={a5} title="A2" description="A2 German for learners.Shows the acquisition of elementary  language skills  in consonance with the CEFR.

" />
        <GermanCard img={b4} title="B1" description=" B1 represents the  first part of an intermediate  level of the  German language skills acquisition as  spelt out by the CEFR.

" />
        <GermanCard img={a2} title="B2" description=" B2 represents the final part of an intermediate  level of the  German language skills acquisition as outlined by the CEFR." />
      </div>
      <CareerPath />
    </div>
    </div>
  );
};

export default German;
