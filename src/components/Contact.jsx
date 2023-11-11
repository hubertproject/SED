/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "../layout/Heading";
import twitter from "/socials/twitter.png";
import whatsapp from "/socials/whatsapp.png";
import linkedin from "/socials/linkedin.png";
import gmail from "/socials/gmail.png";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center mb-5">
      <Heading title1="Contact" title2="Us" />

      <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center mt-4 md:mx-5">
        <div className="md:w-2/4">
          <div className="ml-2">
             
            <p className="text-xl">Email: thesedsinstitute@gmail.com</p>
            <p className="text-xl">Phone: +233 5-456-7890</p>
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
        <div className="md:w-2/3 mt-4">
          <iframe
            title="Google Map"
            width="100%"
            height="350"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-12.3456789!3d23.4567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzQz. . ."
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;
