 /* eslint-disable no-unused-vars */
import React from "react";
 
import GermanCard from "../layout/GermanCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
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
        <GermanCard
          img={c1}
          title="A1"
          description="A1111111111111"
        />
        <GermanCard
          img={graphics}
          title="A2"
          description="A22222"
        />
        <GermanCard
          img={c2}
          title="B1"
          description="B1111111"
        />
        <GermanCard
          img={c3}
          title="B2"
          description="Phone servicing and repairs, carried out by skilled technicians with specialized tools and quality replacement parts, are vital for extending a phone's lifespan and minimizing electronic waste."
        
        />
      </div>
      <CareerPath/>
      
    </div>
  );
};

export default German;
