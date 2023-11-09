/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../layout/Button";
import HeadHeading from "../layout/HeadHeading";
import w1 from "../assets/w1.jpg";
import s2 from "../assets/s2.svg";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="min-h-[60vh] flex flex-col md:flex-row md:justify-between items-center md:mx-5 mx-5 mt-5">
        <div className="md:w-2/4 text-left rounded-lg p-4">
          

          
       
          <p className="text-white mt-5 text-start text-4xl ">
            Become an Elite <p>Software Engineer</p>
          </p>
          <p className="text-whitey mt-5 text-start text-lg ">
            Access remote job placement opportunities with global companies and
            enjoy a western standard income and endless opportunities for growth
            and advancement
          </p>
          <div className="mt-5"></div>
          <Link to="/Form">
            <Button title="Get Started" />
          </Link>
        </div>

        <div className="w-full md:w-2/4 mt-5">
          <img src={w1} alt="img" height="800" width="800" />
        </div>
      </div>

      
      </div>
  
  );
};

export default Home;
