/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../layout/Heading";
import twitter from "/socials/twitter.png";
import whatsapp from "/socials/whatsapp.png";
import linkedin from "/socials/linkedin.png";
import gmail from "/socials/gmail.png";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Heading title1="Contact" title2="Us" />

      <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mt-4 md:mx-5">
        <div className="md:w-2/4">
          <div className="ml-2">
             
            <p className="text-xl mb-1">Email: sedsinstitute@gmail.com</p>
            <p className="text-xl mb-1">Phone: +233 5-456-7890</p>
            <p className="text-xl">Address: Hope Village Hotel. Ho, Ghana</p>
          </div>
          
      {/* Social Media Icons with Links */}
      <div className="flex flex-wrap justify-left space-x-4 mt-4 ml-2">
        <a href="/" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={gmail} alt="Gmail" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
       
        <a href="/" target="_blank" rel="noreferrer">
          <img src={twitter} alt="Twitter" />
        </a>
      </div>
        </div>
        <div className="md:w-3/3 mt-4 object-cover object-contain object-center md:p-0 p-6">
         
          <iframe
            title="Google Map"
            width="450"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.420332667431!2d0.43293297315784185!3d6.594566093399175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10273bd40371462d%3A0xa7b585137a1e0e60!2sHope%20Village%20Hotel!5e0!3m2!1sen!2sgh!4v1699451584284!5m2!1sen!2sgh"
            className='p-6 md:p-0'
            style={{ border: 2}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

      </div>
      </div>

    </div>
  );
};

export default Contact;
