// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(false); // Close the menu when a nav link is pressed
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className="text-black font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
            onClick={handleChange}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
            onClick={handleChange}
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
            onClick={handleChange}
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
            onClick={handleChange}
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
            onClick={handleChange}
          >
            Contact
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={() => setMenu(!menu)}>
          <div className="p-2">
            <AiOutlineMenu size={24} style={{ color: "black" }} />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
          onClick={handleChange}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
          onClick={handleChange}
        >
          About
        </Link>
        <Link
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
          onClick={handleChange}
        >
          Courses
        </Link>
        <Link
          to="reviews"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
          onClick={handleChange}
        >
          Reviews
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="text-black transition-all cursor-pointer hover:shadow-md hover:shadow-yellow"
          onClick={handleChange}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
