/* eslint-disable no-unused-vars */
import React from "react";

import GermanCard from "../layout/GermanCard";
import a3 from "../assets/a3.png";
import a5 from "../assets/a5.png";

import a2 from "../assets/a2.png";
import a7 from "../assets/a7.png";
import GermanSubtitle from "../components/GermanSubtitle";
import CareerPath from "../components/CareerPath";

const German = () => {
  return (
    <div>
      <div className="bg-custom-color">
        <div className="container mx-auto p-4">
          <GermanSubtitle />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center text-black">
        <GermanCard img={a2} title="A1" description="A1111111111111" />
        <GermanCard img={a3} title="A2" description="A22222" />
        <GermanCard img={a5} title="B1" description="B1111111" />
        <GermanCard
          img={a7}
          title="B2"
          description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        />
      </div>
      <CareerPath />
    </div>
  );
};

export default German;
