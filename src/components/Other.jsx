 /* eslint-disable no-unused-vars */
 import React from "react";
 import Heading from "../layout/Heading";
 import CoursesCard from "../layout/CoursesCard";
 import sed2 from "../assets/sed2.jpg";
 import graphics from "../assets/graphics.jpeg";
 import c2 from "../assets/c2.jpg";
 import c3 from "../assets/c3.jpg";
 import off from "../assets/off.jpg";
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
             img={sed2}
             title="Systems Administration"
             description="System administration involves managing and maintaining IT infrastructure, ensuring security, providing user support, optimizing performance, and automating tasks for efficient system operation."
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
             description="Phone repair involves diagnosing and fixing hardware and software issues to ensure optimal functionality and longevity of mobile devices."
           />
           <CoursesCard
             img={graphics}
             title="Graphic Design"
             description="Graphic design communicates messages visually using typography, imagery, and layout. It spans print and digital mediums, creating visually impactful designs for branding and communication."
           />
             <CoursesCard
             img={off}
             title="Microsoft Office"
             description="Microsoft Office is a productivity suite with applications like Word, Excel, and PowerPoint, widely used for document creation and enhancing productivity."
           />
           
         </div>
       </div>
       <German />
     </div>
   );
 };
 
 export default Other;
 