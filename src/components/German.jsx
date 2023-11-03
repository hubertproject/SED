 /* eslint-disable no-unused-vars */
import React from "react";
 
import CoursesCard from "../layout/CoursesCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";

 

const German = () => {
  return (
    <div className="flex flex-wrap justify-left gap-6 mt-6">
      <div className="text-left mt-4"> 
        <h2 className="text-left text-xl text-gray-600 ">b)German Language Lessons</h2>  
      </div>
       
      <div className="flex flex-wrap gap-6 justify-center text-black">
        <CoursesCard
          img={c1}
          title="A1"
          description="A1111111111111"
        />
        <CoursesCard
          img={graphics}
          title="A2"
          description="A22222"
        />
        <CoursesCard
          img={c2}
          title="B1"
          description="B1111111"
        />
        <CoursesCard
          img={c3}
          title="B2"
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
  );
};

export default German;
