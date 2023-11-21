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
        <div className="container mx-auto p-4">
          <GermanSubtitle />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 justify-center text-black">
        <GermanCard img={a7} title="A1" description="" />
        <GermanCard img={a5} title="A2" description="" />
        <GermanCard img={b4} title="B1" description="" />
        <GermanCard img={a2} title="B2" description="" />
      </div>
      <CareerPath />
    </div>
  );
};

export default German;
