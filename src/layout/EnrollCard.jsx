 /* eslint-disable no-unused-vars */
import React from "react";
import Button from "../layout/Button";
import { Link } from "react-router-dom"; 

const EnrollCard = () => {
  return (
    <div className="min-h-[40vh] flex flex-col md:flex-row md:justify-between items-center md:mx-80 mx-2 mb-10">
      <div className=" text-center border border-gray-300 rounded-lg p-4 bg-whit item-center">
         
        <p className="text-black mt-2 text-center text-lg font-bold">
        Ready to launch your career as an Elite Software Developer!
        </p>
         
        <p className="text-black mt-5 text-center text-sm">
          Hands on training by expert instructors. An open door to many jobs opportunities.  
          
        </p>
        <p className="text-black mt-2 text-center text-sm">
        A perfect way to transform your future and an exciting career path.
        </p>
          
        
        <div className="text-center mt-2 pt-2">
        
        <Link to="/PaymentForm">
             
             <Button title="Enroll Now" />
           </Link>
        </div>
      </div>
    </div>
     
  );
};

export default EnrollCard;
