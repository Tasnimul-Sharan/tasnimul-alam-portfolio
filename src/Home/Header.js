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
// import { FaBars, FaTimes } from "react-icons/fa"; 
// import code from "../../src/images/Code Dots_1.jpg";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <section className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex items-center justify-between px-4 lg:px-0">
//         <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
//           <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
//         </Link>
//         <div className="lg:hidden flex items-center justify-between">
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
//                 className="block font-semibold p-2 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
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
//           className="hidden lg:block ml-4" 
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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; 
// import code from "../../src/images/Code Dots_1.jpg";

// const Header = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   return (
//     <section className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
//       <nav className="container mx-auto py-2 flex items-center justify-between px-4 lg:px-0">
        // <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
        //   <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
        // </Link>
//         <div className="lg:hidden flex items-center justify-between">
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
//                 className="block font-semibold p-2 rounded-lg hover:text-white hover:bg-[#149ddd] transition-all duration-300 ease-in-out"
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
        // <a
        //   href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
        //   target="_blank"
        //   rel="noopener noreferrer"
        //   className="hidden lg:block ml-4" 
        //   aria-label="Download Resume"
        // >
        //   <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
        //     Download Resume
        //   </button>
        // </a>
//       </nav>
//     </section>
//   );
// };

// export default Header;
/*************************/

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes, FaChevronDown, FaPhone, FaPlayCircle, FaChartPie, FaArrowAltCircleRight } from 'react-icons/fa';
// import { MdOutlineSecurity, MdOutlineIntegrationInstructions } from 'react-icons/md';
// import { SiProbot } from 'react-icons/si';
// import { BsCursor } from 'react-icons/bs';

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: FaChartPie },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: BsCursor },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: MdOutlineSecurity },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: MdOutlineIntegrationInstructions },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: SiProbot },
// ];
// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: FaPlayCircle },
//   { name: 'Contact sales', href: '#', icon: FaPhone },
// ];

// export default function Example() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
//         <div className="flex lg:flex-1">
//           <Link to="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//           </Link>
//         </div>
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//             onClick={() => setMobileMenuOpen(true)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <FaBars className="h-6 w-6" aria-hidden="true" />
//           </button>
//         </div>
//         <div className="hidden lg:flex lg:gap-x-12">
//           <div className="relative">
//             <button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
//               Product
//               <FaChevronDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//             </button>
//             <div className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
//               <div className="p-4">
//                 {products.map((item) => (
//                   <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
//                     <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
//                       <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
//                     </div>
//                     <div className="flex-auto">
//                       <a href={item.href} className="block font-semibold text-gray-900">
//                         {item.name}
//                         <span className="absolute inset-0" />
//                       </a>
//                       <p className="mt-1 text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
//                 {callsToAction.map((item) => (
//                   <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100">
//                     <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Features
//           </Link>
//           <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Marketplace
//           </Link>
//           <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Company
//           </Link>
//         </div>
//         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//           <Link to="#" className="text-sm font-semibold leading-6 text-gray-900">
//             Log in <FaArrowAltCircleRight className="inline h-5 w-5" aria-hidden="true" />
//           </Link>
//         </div>
//       </nav>
//       {mobileMenuOpen && (
//         <div className="lg:hidden">
//           <div className="fixed inset-0 z-10 bg-black bg-opacity-25" onClick={() => setMobileMenuOpen(false)}></div>
//           <div className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-white shadow-lg ring-1 ring-gray-900/10 p-6 overflow-y-auto">
//             <div className="flex items-center justify-between mb-6">
//               <Link to="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//               </Link>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <FaTimes className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="space-y-2">
//               <div className="relative group">
//                 <button className="flex w-full items-center justify-between text-base font-semibold leading-7 text-gray-900 group-hover:bg-gray-50 rounded-lg py-2 px-3">
//                   Product
//                   <FaChevronDown className="h-5 w-5 group-open:rotate-180" aria-hidden="true" />
//                 </button>
//                 <div className="hidden group-open:block mt-2 space-y-2">
//                   {[...products, ...callsToAction].map((item) => (
//                     <Link key={item.name} to={item.href} className="block text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg py-2 pl-6 pr-3">
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//               <Link to="#" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg py-2 px-3">
//                 Features
//               </Link>
//               <Link to="#" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg py-2 px-3">
//                 Marketplace
//               </Link>
//               <Link to="#" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg py-2 px-3">
//                 Company
//               </Link>
//             </div>
//             <div className="mt-6">
//               <Link to="#" className="block text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-lg py-2.5 px-3">
//                 Log in
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import code from "../../src/images/Code Dots_1.jpg";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gray-950 shadow-lg sticky top-0 z-40 backdrop-blur-md backdrop-hue-rotate-30 w-full transition-all duration-300 ease-in-out">
      <nav aria-label="Global" className="container mx-auto p-6 flex items-center justify-between">
        <div className="flex lg:flex-1">
          {/* <Link to="/" className="text-white text-2xl font-bold">
            <span className="sr-only">Your Company</span>
            <img alt="Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
          </Link> */}
           <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
          <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
        </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes aria-hidden="true" className="h-6 w-6" /> : <FaBars aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {['Projects', 'Skills', 'Blogs', 'Contact', 'About'].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="text-sm hover:bg-[#149ddd] p-2 rounded-md font-semibold leading-6 text-white">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <Link to="/login" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
          <a
          href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block ml-4" 
          aria-label="Download Resume"
        >
          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
            Download Resume
          </button>
        </a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-10 bg-gray-950 opacity-75" onClick={toggleMobileMenu} />
          <div className="fixed inset-y-0 right-0 z-20 w-full max-w-sm bg-gray-950 p-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              {/* <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="Logo" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
              </Link> */}
               <Link to="/" className="flex items-center text-2xl mt-4 text-white font-bold">
                <img alt="Logo" src={code} width="60" height="60" className="rounded-lg mr-2" />
              </Link>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className=" rounded-md p-2.5 text-white"
                aria-label="Close menu"
              >
                <FaTimes aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6">
              {['Projects', 'Skills', 'Blogs', 'Contact', 'About'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white bg-gray-950"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              {/* <Link
                to="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                onClick={toggleMobileMenu}
              >
                Log in
              </Link> */}
          <a
          href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block ml-4" 
          aria-label="Download Resume"
        >
          <button className="text-white bg-transparent border border-white px-4 py-2 rounded-lg hover:bg-[#149ddd] hover:text-gray-100 transition duration-300">
            Download Resume
          </button>
        </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
