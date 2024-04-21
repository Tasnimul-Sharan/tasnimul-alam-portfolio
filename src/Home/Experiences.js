// import React from 'react';

// const Experiences = () => {
//   return (
//     <section className="bg-gray-900 text-white py-10">
//       <div className="max-w-4xl mx-auto px-4 text-justify">
//         <h2 className="text-3xl font-bold mb-2">Experiences</h2>
//         <h3 className="text-2xl font-semibold mb-4">Here's where I've worked at</h3>
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-justify">
//           <h3 className="text-xl font-semibold mb-2 text-gray-900">Chimbuk It Ltd.</h3>
//           <p className="text-gray-700 mb-1"><span className="font-semibold">Designation:</span> Full Stack Developer</p>
//           <p className="text-gray-700 mb-1"><span className="font-semibold">Employment Period:</span> May 2023 - August 2023</p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Collaborate with project stakeholders to understand requirements and propose technical solutions.</li>
//             <li>Design, develop, and implement user interfaces for web applications using HTML, CSS, and JavaScript framework React.</li>
//             <li>Develop server-side logic using MERN Stack (MySql, Express.js, React, Node.js).</li>
//             <li>Build and maintain databases, including data modeling and integration with the application.</li>
//             <li>Implement RESTful APIs to facilitate communication between the front-end and back-end.</li>
//             <li>Optimize application performance and ensure scalability and reliability.</li>
//           </ul>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 text-justify">
//           <h3 className="text-xl font-semibold mb-2 text-gray-900">Skill Graphics</h3>
//           <p className="text-gray-700 mb-1"><span className="font-semibold">Designation:</span> Junior Software Developer</p>
//           <p className="text-gray-700 mb-1"><span className="font-semibold">Employment Period:</span> September 2023 - Present</p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>Collaborate with project stakeholders to understand requirements and propose technical solutions.</li>
//             <li>Design, develop, and implement user interfaces for web applications using HTML, CSS, and JavaScript framework React.</li>
//             <li>Develop server-side logic using back-end with ASP.NET.</li>
//             <li>Build and maintain databases, including data modeling and integration with the application.</li>
//             <li>Implement RESTful APIs to facilitate communication between the front-end and back-end.</li>
//             <li>Optimize application performance and ensure scalability and reliability.</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Experiences;


import React from 'react';

const Experiences = () => {
  return (
    <section className="bg-gray-900 text-white py-10">
      <div className="max-w-4xl mx-auto px-4 text-justify">
        <h2 className="text-3xl font-bold mb-2">Experiences</h2>
        <h3 className="text-2xl font-semibold mb-4">Here's where I've worked at</h3>
        
        {/* Card with Gradient Background */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md p-6 mb-8 text-justify">
          <h3 className="text-xl font-semibold mb-2 text-white">Chimbuk It Ltd.</h3>
          <p className="text-white mb-1"><span className="font-semibold">Designation:</span> Full Stack Developer</p>
          <p className="text-white mb-1"><span className="font-semibold">Employment Period:</span> May 2023 - August 2023</p>
          <ul className="list-disc list-inside text-white">
            <li>Collaborate with project stakeholders to understand requirements and propose technical solutions.</li>
            <li>Design, develop, and implement user interfaces for web applications using HTML, CSS, and JavaScript framework React.</li>
            <li>Develop server-side logic using MERN Stack (MySql, Express.js, React, Node.js).</li>
            <li>Build and maintain databases, including data modeling and integration with the application.</li>
            <li>Implement RESTful APIs to facilitate communication between the front-end and back-end.</li>
            <li>Optimize application performance and ensure scalability and reliability.</li>
          </ul>
        </div>
        
        {/* Another card with the same gradient */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md p-6 mb-8 text-justify">
          <h3 className="text-xl font-semibold mb-2 text-white">Skill Graphics</h3>
          <p className="text-white mb-1"><span className="font-semibold">Designation:</span> Junior Software Developer</p>
          <p className="text-white mb-1"><span className="font-semibold">Employment Period:</span> September 2023 - Present</p>
          <ul className="list-disc list-inside text-white">
            <li>Collaborate with project stakeholders to understand requirements and propose technical solutions.</li>
            <li>Design, develop, and implement user interfaces for web applications using HTML, CSS, and JavaScript framework React.</li>
            <li>Develop server-side logic using back-end with ASP.NET.</li>
            <li>Build and maintain databases, including data modeling and integration with the application.</li>
            <li>Implement RESTful APIs to facilitate communication between the front-end and back-end.</li>
            <li>Optimize application performance and ensure scalability and reliability.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
