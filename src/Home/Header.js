

import React, { useState } from "react";
import { Link } from "react-router-dom";
import code from "../../src/images/Code Dots_1.jpg";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
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
      {/* <nav className="container mx-auto py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center text-2xl text-white font-bold">
          <img alt="" src={code} width="60" height="60" className="rounded-lg mr-2" />
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNav}
        >
          {isNavOpen ? (
            // Close icon (X)
            <MenuIcon />
          ) : (
            // Menu icon
            <MenuIcon />
          )}
        </button>
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } lg:flex space-x-4 text-white lg:space-x-6`}
        >
          <li>
            <Link to="/contract">Contract</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
          <li>
            <Link to="/projets/:projectId">Projects</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}
      <nav className="container mx-auto py-4 flex items-center justify-between">
  <Link to="/" className="flex items-center text-2xl text-white font-bold">
    <img alt="" src={code} width="60" height="60" className="rounded-lg mr-2" />
  </Link>
  <button
    className="lg:hidden text-white focus:outline-none"
    onClick={toggleNav}
  >
    {isNavOpen ? (
      // Close icon (X)
      <MenuIcon />
    ) : (
      // Menu icon
      <MenuIcon />
    )}
  </button>
  <ul
    className={`${
      isNavOpen ? "block" : "hidden"
    } lg:flex space-x-4 text-white lg:space-x-6 lg:items-center`}
  >
    <li>
      <Link className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out" to="/contract">Contact</Link>
    </li>
    <li>
      <Link className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out" to="/Skills">Skills</Link>
    </li>
    <li>
      <Link className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out" to="/projets/:projectId">Projects</Link>
    </li>
    <li>
      <Link className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out" to="/blogs">Blogs</Link>
    </li>
    <li>
      <Link className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out" to="/about">About</Link>
    </li>
  </ul>
  <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
    Download Resume
  </button>
</nav>

    </header>
  );
};

export default Header;




// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../../images/Skill.png';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentTime, setCurrentTime] = useState('');
//   const [isSmallHeader, setIsSmallHeader] = useState(false);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const today = new Date();
//       const time =
//         today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
//       setCurrentTime(time);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsSmallHeader(true);
//       } else {
//         setIsSmallHeader(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header
//       className={`${
//         isSmallHeader ? 'h-20' : 'h-24'
//       } shadow-lg bg-slate-50 text-black sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out`}
//     >
//       <nav className="container mx-auto flex justify-between items-center h-full">
//         <div className="font-semibold">
//           <Link to="/">
//             <img src={logo} className="w-24" alt="logo" />
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         <div
//           className={`${
//             isOpen ? 'block' : 'hidden'
//           } md:hidden w-full bg-[#f8fafc] absolute top-20 left-0 z-50`}
//         >
//           <Link
//             to="/"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Services
//           </Link>
//           <Link
//             to="/portfolio"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Portfolio
//           </Link>
//           <Link
//             to="/package"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Package
//           </Link>
//           <Link
//             to="/contact"
//             className="block font-semibold mt-2 text-center hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <div className="text-center mt-2">
//             <p className="text-xs md:text-sm font-semibold">
//               <span className="block">Dhaka</span>
//               <span>{currentTime}</span>
//             </p>
//           </div>
//         </div>
 
//         <div
//           className={`md:flex md:space-x-5 hidden items-center`}
//         >
//           <Link
//             to="/"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Services
//           </Link>
//           <Link
//             to="/portfolio"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Portfolio
//           </Link>
//           <Link
//             to="/package"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Package
//           </Link>
//           <Link
//             to="/contact"
//             className="block font-semibold md:inline-block mt-4 md:mt-0 hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//           >
//             Contact
//           </Link>
//           <div>
//             <p className="text-xs md:text-sm font-semibold">
//               <span className="block">Dhaka</span>
//               <span>{currentTime}</span>
//             </p>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

