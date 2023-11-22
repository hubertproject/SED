 /* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";
 
import c3 from "../assets/c3.jpg";
 
import c5 from "../assets/c5.jpg";
import Subtitle from "../components/Subtitle";
import Other from "../components/Other";

const Courses = () => {
  return (
    <div>
    <div className="items-center justify-center mb-5"></div>
      <Heading title1="Our" title2="Programs" />
      <div className="bg-custom-color">
        <div className="container mx-auto p-4">
          <Subtitle />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 justify-center text-black">
        <div className="flex flex-wrap gap-6 justify-center text-black p-4">
          <CoursesCard
            img={c1}
            title="HTML + CSS + Javascript"
            description="HTML, CSS, and JavaScript are foundational for web development. HTML structures content, CSS styles it, JavaScript adds interactivity. Tailwind CSS simplifies styling, and React creates dynamic interfaces, essential for modern web development."
          />
          <CoursesCard
            img={graphics}
            title="Node.js + React + Boostrap"
            description="Graphic design is pivotal for visually conveying ideas through images, text, and layout, with a significant impact on marketing, web, and print, as it focuses on composition, typography, and color to achieve effective communication."
          />
          <CoursesCard
            img={c5}
            title="MySQL + Firebase"
            description="Hardware are the physical components of electronic devices like computers and smartphones, including the CPU, memory, storage, and input/output devices, enabling their functionality."
          />
          
          
        </div>
      </div>
      <Other />
    </div>
  );
};

export default Courses;
