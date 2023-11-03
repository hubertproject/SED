 /* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import Subtitle from "../components/Subtitle";
import German from "../components/German";

const Courses = () => {
  return (
    <div>
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
            title="Coding"
            description="HTML, CSS, and JavaScript are foundational for web development. HTML structures content, CSS styles it, JavaScript adds interactivity. Tailwind CSS simplifies styling, and React creates dynamic interfaces, essential for modern web development."
          />
          <CoursesCard
            img={graphics}
            title="Graphic Design"
            description="Graphic design is pivotal for visually conveying ideas through images, text, and layout, with a significant impact on marketing, web, and print, as it focuses on composition, typography, and color to achieve effective communication."
          />
          <CoursesCard
            img={c2}
            title="Networking"
            description="Networking connects devices, from local to global scales, using protocols and hardware. It's vital for modern communication, security, IoT, and cloud computing, managed by professionals."
          />
          <CoursesCard
            img={c3}
            title="Phone repairs and servicing"
            description="Phone servicing and repairs, carried out by skilled technicians with specialized tools and quality replacement parts, are vital for extending a phone's lifespan and minimizing electronic waste."
          />
          <CoursesCard
            img={c5}
            title="Computer Hardware"
            description="Hardware are the physical components of electronic devices like computers and smartphones, including the CPU, memory, storage, and input/output devices, enabling their functionality."
          />
          <CoursesCard
            img={c4}
            title="German Language"
            description="Learning German with SEDS Institute offers access to opportunities in Germany, aligns with the job market, and provides international certification to combat youth unemployment in Ghana."
          />
        </div>
      </div>
      <German />
    </div>
  );
};

export default Courses;
