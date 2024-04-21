
// import React from "react";
// import BlackBelt from "../../src/images/blackBelt.png";
// import Certificate from "../../src/images/Tasnimul Alam_1.JPEG";
// import { FaTrophy, FaCertificate } from "react-icons/fa";

// const Achivements = () => {
//   return (
//     <section className="bg-gray-900 py-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto text-center text-gray-100 mb-10">
//           <h1 className="text-4xl text-primary font-bold">My Achievements</h1>
//           <p className="text-lg text-gray-100 mt-4">
//             Explore some of my notable achievements and awards.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div
//             className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform"
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             <img src={BlackBelt} className="max-w-full mx-auto" alt="Black Belt" />
           
//             <h2 className="text-2xl font-semibold mb-4">Achieved Black Belt in Web Development</h2>
//             <p className="text-gray-700">
//               I earned my Black Belt in Web Development through dedication and hard work.
//             </p>
//           </div>
//           <div
//             className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <img src={Certificate} className="max-w-full mx-auto" alt="Certificate" />
          
//             <h2 className="text-2xl font-semibold mb-4">Received Certificate of Excellence</h2>
//             <p className="text-gray-700">
//               I was honored with a Certificate of Web Development for my outstanding performance.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achivements;


import React from "react";
import BlackBelt from "../../src/images/blackBelt.png";
import Certificate from "../../src/images/Tasnimul Alam_1.JPEG";
import { FaTrophy, FaCertificate } from "react-icons/fa";

const Achievements = () => {
  return (
    <section className="bg-slate-900 via-pink-500 to-red-500 py-16 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold">My Achievements</h1>
          <p className="text-lg mt-4">Explore some of my notable achievements and awards.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-slate-900 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={BlackBelt}
              className="max-w-xl mx-auto rounded-t-lg"
              alt="Black Belt"
            />
            <div className="p-6 text-center">
              <FaTrophy className="text-3xl text-yellow-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Achieved Black Belt in Web Development</h2>
              <p className="text-sm font-medium">
                I earned my Black Belt in Web Development through dedication and hard work.
              </p>
            </div>
          </div>
          <div
            className="bg-slate-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={Certificate}
              className="max-w-xl mx-auto rounded-t-lg"
              alt="Certificate"
            />
            <div className="p-6 text-center">
              <FaCertificate className="text-3xl text-green-500 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Received Certificate of Excellence</h2>
              <p className="text-sm font-medium">
                I was honored with a Certificate of Web Development for my outstanding performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
