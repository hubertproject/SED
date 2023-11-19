 /* eslint-disable no-unused-vars */
import React from "react";
import Button from "../layout/Button";
import { Link } from "react-router-dom"; 

const EnrollCard = () => {
  return (
    <div className="min-h-[40vh] flex flex-col md:flex-row md:justify-between items-center md:mx-64 mx-2 mb-10">
      <div className=" text-center border border-gray-300 rounded-lg p-4 bg-whit item-center">
         
        <p className="text-black mt-2 text-center text-lg font-bold">
        Ready to launch your career as an Elite Software Developer!
        </p>
         
        <p className="text-black mt-5 text-center text-sm">
          With experts instructors, hands on training, and remote job placement,  
          
        </p>
        <p className="text-black mt-2 text-center text-sm">
         opportunities, our program is the perfect way to transform your future.
        </p>
          
        <p className="text-black mt-2 text-center text-sm">
           Take the first step towards an exciting career in software engineering and german language lessons. Enrol Now
          
        </p>
        <div className="text-center mt-2 pt-2">
        
        <Link to="/PaymentForm">
             
             <Button title="Enrol Now" />
           </Link>
        </div>
      </div>
    </div>
     
  );
};

export default EnrollCard;
