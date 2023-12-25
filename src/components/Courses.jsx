/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";

 

import c5 from "../assets/c5.jpg";
import Subtitle from "../components/Subtitle";
import Other from "../components/Other";

import FadeLoader from "react-spinners/FadeLoader";

const Courses = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []); 

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <FadeLoader color={"#D0021B"} loading={loading} size={50} />
        </div>
      ) : (
    <div>
      <div className="items-center justify-center mb-20"></div>
      <Heading title1="Our" title2="Programs" />
      <div className="bg-custom-color">
        <div className="container mx-auto p-4">
          <Subtitle />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center text-black ">
        <div className="flex flex-wrap gap-6 justify-center text-black p-4">
          <CoursesCard
            img={c1}
            title="HTML + CSS + Javascript"
           
            description="HTML organizes content, CSS styles it, and JavaScript adds interactivity, forming the foundational toolkit for modern software development."
          />
          <CoursesCard
            img={graphics}
            title="Node.js + React + Bootstrap"
            description="Node.js for backend, React for dynamic UIs, and Bootstrap for streamlined design create a powerful stack for modern softwares."
          />
          <CoursesCard
            img={c5}
            title="MySQL + Firebase"
            description=" MySQL stores structured data, Firebase handles real-time aspects. Together, they form a powerful duo for flexible software development."
          />
        </div>
      </div>
      <Other />
      </div>
      )}
    </div>
  );
};

export default Courses;
