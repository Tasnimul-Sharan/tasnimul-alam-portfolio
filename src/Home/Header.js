import React, { useState } from "react";
import { Link } from "react-router-dom";
import code from "../../src/images/Code Dots_1.jpg";

const MenuIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
    />
  </svg>
);

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
      <nav className="container mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center text-2xl text-white font-bold">
          <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          <MenuIcon isOpen={isNavOpen} />
        </button>
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } lg:flex space-y-2 lg:space-y-0 lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out`}
        >
          {["Contact", "Skills", "Projects", "Blogs", "About"].map((item) => (
            <li key={item}>
              <Link
                className="block font-semibold p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
          aria-label="Download Resume"
        >
          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
            Download Resume
          </button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
