/* eslint-disable no-unused-vars */
 import React, { useState, useEffect } from "react";
import twitter from "/socials/twitter.png";
import github from "/socials/github.png";
import linkedin from "/socials/linkedin.png";
import gmail from "/socials/gmail.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | The SEDS Institute</p>
      </div>

       
      <div className="flex mb-5 justify-center space-x-4">
        <a href="https://github.com/hubertproject/" target="_blank" rel="noreferrer">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/hubert-selormey-9ba940227/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" />
        </a>
        <a href="https://mail.google.com/mail/" target="_blank" rel="noreferrer">
          <img src={gmail} alt="" />
        </a>
        <a href="https://twitter.com/HubertDhk" target="_blank" rel="noreferrer">
          <img src={twitter} alt="" />
        </a>
      </div>

      {/* Up Arrow */}
      <button
        className={`bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 fixed bottom-10 right-10 transform ${
          scrolling ? "rotate-180 translate-y-4" : ""
        }`}
        onClick={scrollToTop}
      >
        {scrolling ? "↓" : "↑"}
      </button>
    </div>
  );
};

export default Footer;
