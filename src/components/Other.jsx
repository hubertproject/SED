 /* eslint-disable no-unused-vars */
 import React from "react";
 import Heading from "../layout/Heading";
 import CoursesCard from "../layout/CoursesCard";
 import c1 from "../assets/c1.jpg";
 import graphics from "../assets/graphics.jpeg";
 import c2 from "../assets/c2.jpg";
 import c3 from "../assets/c3.jpg";
 import office from "../assets/office.png";
 import c5 from "../assets/c5.jpg";
 import OtherSub from "../components/OtherSub";
 import German from "../components/German";
 
 const Other = () => {
   return (
     <div>
     <div className="items-center justify-center mb-5"></div>
        
       <div className="bg-custom-color">
         <div className="container mx-auto p-4">
           <OtherSub />
         </div>
       </div>
       <div className="flex flex-wrap gap-6 justify-center text-black">
         <div className="flex flex-wrap gap-6 justify-center text-black p-4">
         
           <CoursesCard
             img={c1}
             title="Systems Administration"
             description="Graphic design is pivotal for visually conveying ideas through images, text, and layout, with a significant impact on marketing, web, and print, as it focuses on composition, typography, and color to achieve effective communication."
           />
           <CoursesCard
             img={c5}
             title="Computer Hardware"
             description="Hardware are the physical components of electronic devices like computers and smartphones, including the CPU, memory, storage, and input/output devices, enabling their functionality."
           />
           <CoursesCard
             img={c2}
             title="Networking"
             description="Networking connects devices, from local to global scales, using protocols and hardware. It's vital for modern communication, security, IoT, and cloud computing, managed by professionals."
           />
           <CoursesCard
             img={c3}
             title=" Phone Repair &  Servicing"
             description="How to repair phones and know how the components work together"
           />
           <CoursesCard
             img={graphics}
             title="Graphic Design"
             description="Introduction to Word, Excel and PowerPoint"
           />
             <CoursesCard
             img={office}
             title="Microsoft Office"
             description="Microsoft Word, Excel and PowerPoint and it's importance"
           />
           
         </div>
       </div>
       <German />
     </div>
   );
 };
 
 export default Other;
 