// eslint-disable-next-line no-unused-vars
import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import c1 from "../assets/c1.jpg";
import graphics from "../assets/graphics.jpeg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import TuitionFees from "../components/TuitionFees";

const SoftwareEngineeringSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      {/* SOFTWARE ENGINEERING */}
      <div className="w-full text-black text-left space-y-4 mt-2 space-x-4 mb-2">
        <h2 className="font-bold text-xl">SOFTWARE ENGINEERING</h2>
        {/* German path */}
        <div className="space-y-2">
          <h3 className="font-semibold">1) German path or option</h3>
          <p>
            (i) 6 months local preparatory (TVET/WASSCE + B2)
            <br />
            (ii) Go to Germany to continue training under the Ausbildung or Dual
            (company) vocational training program. The learn and earn program
            for 3 years. Earn a salary while learning or under training. Get
            employed after training or your education and begin preparation
            towards citizenship.
            <a href="https://www.make-it-in-Germany.com">
              www.make-it-in-Germany.com
            </a>
          </p>
        </div>

        {/* The Microverse path */}
        <div className="space-y-2">
          <h3 className="font-semibold">2) The Microverse path</h3>
          <p>
            a) Local
            <br />
            (i) Preparatory training for 6 months, giving way to enrollment onto
            the Microverse training program.
            <br />
            b) Foreign
            <br />
            (i) Microverse training. Duration: 10 months online - USA/Global
            leading to the award of a Full-Stack Developer Global Certificate.
            <a href="https://www.microverse.org" style={{ color: "blue" }}>
              www.microverse.org
            </a>
            <br />
            Job offer: Remote coding job or work online or relocate to the West.
          </p>
        </div>

        {/* The TVET path */}
        <div className="space-y-2">
          <h3 className="font-semibold">3) The TVET path</h3>
          <p>
            a. 6 months training resulting in TVET Certificate. A choice to stay
            in Ghana and serve the local market. You can work remotely online.
            Remember, the TVET certificate equally places you well under the
            Ausbildung program mentioned in (1) above in Germany.
          </p>
        </div>

        {/* Additional Information */}
        <div className="space-y-2">
          <h3 className="font-semibold">Languages to Learn:</h3>
          <p>
            HTML5, CSS3, JavaScript, Reactjs, Nodejs, Tailwind CSS, Algorithms
          </p>
          <h3 className="font-semibold">Other Tech Areas:</h3>
          <p>
            Networking, Hardware, Systems installations (OS), Graphic design, MS
            Office Suite, Smartphone repair and servicing
          </p>
          <h3 className="font-semibold">Career Paths:</h3>
          <p>
            a. Front-end engineer, Web developer, Mobile App developer, Cloud
            engineer
            <br />
            b. Front-end engineer, Database engineer
            <br />
            c. Network engineer
            <br />
            d. Computer Hardware engineer
            <br />
            e. Graphic designer
            <br />
            f. Smartphone technician
          </p>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-6">
      <Heading title1="Our" title2="Courses" />
      <div className="flex flex-wrap gap-6 justify-center text-black">
        <CoursesCard
          img={c1}
          title="Coding"
          description="HTML, CSS, and JavaScript are foundational for web development. HTML structures content, CSS styles it, JavaScript adds interactivity. Tailwind CSS simplifies styling, and React creates dynamic interfaces, essential for modern web development."
        />
        <CoursesCard
          img={graphics}
          title="Graphic Design"
          description=" Graphic design is pivotal for visually conveying ideas through images, text, and layout, with a significant impact on marketing, web, and print, as it focuses on composition, typography, and color to achieve effective communication."
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
      <SoftwareEngineeringSection />
      <TuitionFees />
      <TuitionFees />
    </div>
  );
};

export default Courses;
