// import React from "react";

// const Service = ({ service }) => {
//   const { picture, name } = service;
//   return (
//       <div className="bg-gray-900 text-white rounded-lg shadow-inner hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 p-4">
//         <img src={picture} alt="service" className="h-auto object-cover" />
//         <div className="flex justify-center">
//           <h5 className="text-xl font-semibold">{name}</h5>
//         </div>
//       </div>
//   );
// };

// export default Service;


// import React from "react";

// const Service = ({ service }) => {
//   const { picture, name } = service;
//   return (
//     <div className="bg-gray-900 text-white rounded-lg shadow-inner hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 p-4">
//       <div className="w-full overflow-hidden rounded-lg">
//         <img 
//           src={picture} 
//           alt="service" 
//           className="max-w-sm h-auto object-cover"
//         />
//       </div>
//       <div className="flex justify-center mt-4">
//         <h5 className="text-xl font-semibold">{name}</h5>
//       </div>
//     </div>
//   );
// };

// export default Service;


import React from "react";

const Service = ({ service }) => {
  const { picture, name } = service;
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-inner hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 p-4">
      <div className="w-full overflow-hidden rounded-lg">
        <img 
          src={picture} 
          alt="service" 
          className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover mx-auto"
        />
      </div>
      <div className="flex justify-center mt-4">
        <h5 className="text-xl font-semibold">{name}</h5>
      </div>
    </div>
  );
};

export default Service;
