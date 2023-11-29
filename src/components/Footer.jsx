/* eslint-disable no-unused-vars */
 import React, { useState, useEffect } from "react";
 

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
    <div className="md:px-5 px-3 ">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5 text-sm">
        <p>@ Copyright 2023 | The SEDS Institute</p>
      </div>

       
      

      {/* Up Arrow */}
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-maroon fixed bottom-5 right-5 transform ${
          scrolling ? "rotate-180 translate-y-2" : ""
        }`}
        onClick={scrollToTop}
      >
        {scrolling ? "↓" : "↑"}
      </button>
    </div>
  );
};

export default Footer;
