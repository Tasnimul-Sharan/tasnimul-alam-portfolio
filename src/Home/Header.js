// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import code from "../../src/images/Code Dots_1.jpg";

// const MenuIcon = ({ isOpen }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//     />
//   </svg>
// );

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex items-center justify-between">
//         <Link to="/" className="flex items-center text-2xl text-white font-bold">
//           <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
//         </Link>
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleNav}
//           aria-label="Toggle navigation menu"
//         >
//           <MenuIcon isOpen={isNavOpen} />
//         </button>
//         <ul
//           className={`${
//             isNavOpen ? "block" : "hidden"
//           } lg:flex space-y-2 lg:space-y-0 lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out`}
//         >
//           {["Projects", "Contact", "Skills", "Blogs", "About"].map((item) => (
//             <li key={item}>
//               <Link
//                 className="block font-semibold p-2 md:mt-0 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
//                 to={`/${item.toLowerCase()}`}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <a
//           href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-4"
//           aria-label="Download Resume"
//         >
//           <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//             Download Resume
//           </button>
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import code from "../../src/images/Code Dots_1.jpg";

// const MenuIcon = ({ isOpen }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={`h-6 w-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//     />
//   </svg>
// );

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <header className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex items-center justify-between px-4 lg:px-0">
//         <Link to="/" className="flex items-center text-2xl text-white font-bold">
//           <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
//         </Link>
//         <button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={toggleNav}
//           aria-label="Toggle navigation menu"
//         >
//           <MenuIcon isOpen={isNavOpen} />
//         </button>
//         <ul
//           className={`${
//             isNavOpen ? "block" : "hidden"
//           } lg:flex space-y-2 lg:space-y-0 lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out`}
//         >
//           {["Projects", "Contact", "Skills", "Blogs", "About"].map((item) => (
//             <li key={item}>
//               <Link
//                 className="block font-semibold p-2 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
//                 to={`/${item.toLowerCase()}`}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <a
//           href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-4"
//           aria-label="Download Resume"
//         >
//           <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//             Download Resume
//           </button>
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // React Icons ব্যবহার করা হচ্ছে
import code from "../../src/images/Code Dots_1.jpg";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <section className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
      <nav className="container mx-auto py-2 flex items-center justify-between px-4 lg:px-0">
        <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
          <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
        </Link>
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
          >
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul
          className={`${
            isNavOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out lg:flex-row flex-col lg:space-y-0 mt-4 lg:mt-0 lg:ml-4`}
        >
          {["Projects", "Contact", "Skills", "Blogs", "About"].map((item) => (
            <li key={item} className="text-center lg:text-left">
              <Link
                className="block font-semibold p-2 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsNavOpen(false)} // লিঙ্কে ক্লিক করলে মেনু বন্ধ হবে
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-4 lg:mt-0 lg:hidden"> {/* মোবাইল ডিভাইসে রাউটগুলির নিচে বাটনটি দৃশ্যমান থাকবে */}
            <a
              href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
              aria-label="Download Resume"
            >
              <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
                Download Resume
              </button>
            </a>
          </li>
        </ul>
        <a
          href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block ml-4" // ডেক্সটপ ডিভাইসে বাটনটি দৃশ্যমান থাকবে
          aria-label="Download Resume"
        >
          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
            Download Resume
          </button>
        </a>
      </nav>
    </section>
  );
};

export default Header;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // React Icons ব্যবহার করা হচ্ছে
// import code from "../../src/images/Code Dots_1.jpg";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <section className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex justify-between px-4 lg:px-0">
//         <Link to="/" className="flex justify-center items-center text-2xl text-white font-bold">
//           <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
//         </Link>
//         <div className="lg:hidden flex justify-between">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleNav}
//             aria-label="Toggle navigation menu"
//           >
//             {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? "block" : "hidden"
//           } lg:flex lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out lg:flex-row flex-col lg:space-y-0 mt-4 lg:mt-0 lg:ml-4`}
//         >
//           {["Projects", "Contact", "Skills", "Blogs", "About"].map((item) => (
//             <li key={item} className="text-center lg:text-left">
//               <Link
//                 className="block font-semibold p-4 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
//                 to={`/${item.toLowerCase()}`}
//                 onClick={() => setIsNavOpen(false)} 
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//           <li className="mt-4 lg:mt-0 lg:hidden">
//             <a
//               href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-center"
//               aria-label="Download Resume"
//             >
//               <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//                 Download Resume
//               </button>
//             </a>
//           </li>
//         </ul>
//         <a
//           href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden lg:block ml-4 pt-2" 
//           aria-label="Download Resume"
//         >
//           <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//             Download Resume
//           </button>
//         </a>
//       </nav>
//     </section>
//   );
// };

// export default Header;



// import { Link } from 'react-router-dom';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaBars, FaCamera, FaChevronDown, FaCube, FaTimes, FaVideo } from 'react-icons/fa';
// import logo from '../../images/Logo/Skill.png';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSmallHeader, setIsSmallHeader] = useState(false);
//   const [servicesState, setServicesState] = useState({});
//   const [currentTime, setCurrentTime] = useState('');
//   const servicesRef = useRef(null);

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

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setServicesState({});
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setServicesState({});
//   };

//   const toggleServices = (service) => {
//     setServicesState((prevServicesState) => ({
//       ...prevServicesState,
//       [service]: !prevServicesState[service],
//     }));
//   };

//   const services = [
//     {
//       name: 'Image',
//       icon: <FaCamera />,
//       submenus: [
//         { name: 'Al Services', path: '/allservices' },
//         { name: 'Masking', path: '/image-masking-services' },
//         { name: 'Retouching', path: '/photo-retouching' },
//         { name: 'Clipping', path: '/clipping-Paths' },
//         { name: 'Color', path: '/colorMatch' },
//         { name: 'Invisible', path: '/invisible' },
//         { name: 'Flatlay', path: '/flatlay' },
//         { name: 'Jewellery', path: '/jewelleryRetouching' },
//         { name: 'Model', path: '/modelRetouching' },
//         { name: 'shadows', path: '/shadows' },
//         { name: 'Color Adjust', path: '/colorAdjust' },
//         { name: 'Manipulation', path: '/manipulation' },
//         { name: 'Restoration', path: '/restoration' },
//         { name: '360', path: '/threesixty' },
//       ],
//     },
//     {
//       name: 'VFX',
//       icon: <FaVideo />,
//       url: 'http://mvrk.tv/vfx/',
//     },
//     {
//       name: '3D',
//       icon: <FaCube />,
//       url: 'https://auleek.com/',
//     },
//   ];

//   return (
//     <header className={`${isSmallHeader ? 'h-20' : 'h-24'} container mx-auto shadow-lg bg-slate-50 text-black sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out`}>
//       <nav className="mx-4 flex justify-between items-center h-full">
//         <div className="font-semibold m-0 mb-0">
//           <Link onClick={() => window.location.href = '/'}>
//             <img
//               src={logo}
//               className={`${isSmallHeader ? 'w-16 transition-all duration-500' : 'w-24 transition-all duration-500'} mb-0`}
//               alt="logo"
//             />
//           </Link>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
//           </button>
//         </div>
//         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-5 w-full bg-[#f8fafc] absolute top-20 left-0 z-50`}>
//           <div className="mb-1">
//             <Link
//               to="/"
//               className="font-semibold inline-block p-2 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Home
//             </Link>
//           </div>
//           <div className='mb-1'>
//             <Link
//               to="/about"
//               className="font-semibold inline-block p-2 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               About
//             </Link>
//           </div>
//           <div className='mb-1'>
//             <Link
//               to="/package"
//               className="font-semibold inline-block p-2 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Packages
//             </Link>
//           </div>
//           <div className="flex justify-center">
//             <div
//               onClick={() => toggleServices('Services')}
//               className="flex items-center font-semibold md:inline-block p-2 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Services <FaChevronDown className="ml-1" />
//             </div>
//             <div
//               ref={servicesRef}
//               className={`${servicesState['Services'] ? 'block' : 'hidden'} absolute top-40 left-1/2 transform -translate-x-1/2 bg-[#f8fafc] p-10`}
//               style={{ textDecoration: 'none' }}
//             >
//               {services.map((service, index) => (
//                 <div key={index} className="mb-2">
//                   {service.url ? (
//                     <a
//                       href={service.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center font-semibold hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//                       style={{ textDecoration: 'none' }}
//                     >
//                       {service.icon && <span className="mr-2">{service.icon}</span>}
//                       {service.name}
//                     </a>
//                   ) : (
//                     <Link to={service.submenus ? service.path : '#'}>
//                       <button
//                         onMouseEnter={() => toggleServices(service.name)}
//                         onClick={() => toggleServices(service.name)}
//                         className="flex items-center font-semibold hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//                         style={{ textDecoration: 'none' }}
//                       >
//                         {service.icon && <span className="mr-2">{service.icon}</span>}
//                         {service.name}
//                       </button>
//                     </Link>
//                   )}
//                   {service.submenus && servicesState[service.name] && (
//                     <div ref={servicesRef} className={`${servicesState['Services'] ? 'block' : 'hidden'}  absolute top-0 left-full bg-[#f8fafc] p-6`} style={{ textDecoration: 'none' }}>
//                       {service.submenus.map((submenu, subIndex) => (
//                         <Link
//                           key={subIndex}
//                           to={submenu.path}
//                           className="block font-semibold hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//                           style={{ textDecoration: 'none' }}
//                         >
//                           {submenu.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mb-1">
//             <Link
//               to="/contact"
//               className="font-semibold inline-block p-2  rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Contact
//             </Link>
//           </div>
//           <div className="mb-1">
//             <Link
//               to="/workflow"
//               className="font-semibold inline-block p-2  rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Workflow
//             </Link>
//           </div>
//           <div className="mb-1">
//             <Link
//               to="/package"
//               className="font-semibold inline-block p-2  rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               Packages
//             </Link>
//           </div>
//           <div className="mb-1">
//             <Link
//               to="/whyus"
//               className="font-semibold inline-block p-2  rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               WhyUs
//             </Link>
//           </div>
//         </div>
//         <div className={`md:flex md:space-x-5 hidden items-center`}>
//           <Link to="/" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>Home</Link>
//           <div className="relative">
//             <button
//               onMouseEnter={() => toggleServices('Services')}
//               className="flex items-center font-semibold p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out"
//               style={{ textDecoration: 'none' }}
//             >
//               <span>Services </span>
//               <FaChevronDown className="ml-1" />
//             </button>
//             <div ref={servicesRef} className={`${servicesState['Services'] ? 'block' : 'hidden'} absolute top-full left-0 bg-[#f8fafc] p-4`} style={{ textDecoration: 'none' }}>
//               {services.map((service, index) => (
//                 <div key={index} className="mb-2">
//                   {service.url ? (
//                     <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center font-semibold hover:text-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}> 
//                       {service.icon && <span className="mr-2">{service.icon}</span>}
//                       {service.name}
//                     </a>
//                   ) : (
//                     <Link to={service.submenus ? service.path : '#'} style={{ textDecoration: 'none' }}>
//                       <button
//                         onMouseEnter={() => toggleServices(service.name)}
//                         onClick={() => toggleServices(service.name)}
//                         className="flex items-center font-semibold hover:text-fuchsia-800 transition-all duration-300 ease-in-out"
//                         style={{ textDecoration: 'none' }}
//                       >
//                         {service.icon && <span className="mr-2">{service.icon}</span>}
//                         {service.name}
//                       </button>
//                     </Link>
//                   )}
//                   {service.submenus && servicesState[service.name] && (
//                     <div ref={servicesRef} className={`${servicesState['Services'] ? 'block' : 'hidden'}  absolute -top-0.5 left-full bg-[#f8fafc] p-4`} style={{ textDecoration: 'none' }}>
//                       {service.submenus.map((submenu, subIndex) => (
//                         <Link key={subIndex} to={submenu.path} className="block px-4 py-1 text-justify font-semibold hover:bg-fuchsia-800 hover:text-white transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>
//                           {submenu.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <Link to="/package" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>Packages</Link>
//           <Link to="/workflow" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>Workflow</Link>
//           <Link to="/whyus" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>WhyUs ?</Link>
//           <Link to="/about" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>About</Link>
//           <Link to="/contact" className="block font-semibold md:inline-block p-2 mt-4 md:mt-0 rounded-lg hover:text-white hover:bg-fuchsia-800 transition-all duration-300 ease-in-out" style={{ textDecoration: 'none' }}>Contact</Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// Header.js

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import necessary icons
// import logo from "../../src/images/Code Dots_1.jpg"; // Import your logo image

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <section className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex justify-between px-4 lg:px-0">
//         <Link to="/" className="flex justify-center items-center text-2xl text-white font-bold">
//           <img alt="Logo" src={logo} width="60" height="60" className="rounded-lg mr-2" />
//         </Link>
//         <div className="lg:hidden flex justify-between">
//           <button
//             className="text-white focus:outline-none"
//             onClick={toggleNav}
//             aria-label="Toggle navigation menu"
//           >
//             {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//         <ul
//           className={`${
//             isNavOpen ? "block" : "hidden"
//           } lg:flex lg:space-x-6 text-white lg:items-center transition-all duration-300 ease-in-out lg:flex-row flex-col lg:space-y-0 mt-4 lg:mt-0 lg:ml-4`}
//         >
//           {["Projects", "Contact", "Skills", "Blogs", "About"].map((item) => (
//             <li key={item} className="text-center lg:text-left">
//               <Link
//                 className="block font-semibold p-4 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
//                 to={`/${item.toLowerCase()}`}
//                 onClick={() => setIsNavOpen(false)} 
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//           <li className="mt-4 lg:mt-0 lg:hidden">
//             <a
//               href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-center"
//               aria-label="Download Resume"
//             >
//               <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//                 Download Resume
//               </button>
//             </a>
//           </li>
//         </ul>
//         <a
//           href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hidden lg:block ml-4 pt-2" 
//           aria-label="Download Resume"
//         >
//           <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
//             Download Resume
//           </button>
//         </a>
//       </nav>
//     </section>
//   );
// };

// export default Header;
