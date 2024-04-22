import React from "react";
import about from "../../src/images/Sharan.jpg.jpg";
import {
FaFacebookSquare,
FaLinkedin,
FaGithub,
FaSkype,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 text-justify">
          <img
            src={about}
            className="rounded-3xl w-72 h-72 object-cover mx-auto"
            alt="Profile"
          />
           {/* <div className="mt-5 flex">
            <a
              href="https://www.facebook.com/your-facebook-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
            >
              <FaGithub />
            </a>
            <a
              href="skype:your-skype-id?chat"
              className="text-2xl text-blue-500 hover:text-blue-700"
            >
              <FaSkype />
            </a>
          </div> */}
        </div>
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
          <h1 className="text-3xl font-bold text-primary mb-6">About Me</h1>
          <p className="text-light text-lg">
            I am Tasnimul Alam. I am studying Electronics and Communication
            Engineering at the Institute of Science and Technology. I am a very
            simple, positive, and honest web developer. I have always been
            interested in web development. I take my work as a Web Developer
            seriously, and this means I always ensure my skills are kept up to
            date within this rapidly changing industry. I am always hungry to
            learn new things in web development. I always try to implement and
            develop new and different things in web development. My hobby is,
            in my free time, I like to watch movies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

// import React from "react";
// import {
//   FaFacebookSquare,
//   FaLinkedin,
//   FaGithub,
//   FaSkype,
// } from "react-icons/fa";

// const About = () => {
//   return (
//     <section className="bg-gray-900 text-white py-16">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 text-center lg:text-left lg:pl-12">
//           <h1 className="text-3xl font-bold text-primary mb-6">About Me</h1>
//           <p className="text-light text-lg">
//             I am Tasnimul Alam. I am studying Electronics and Communication
//             Engineering at the Institute of Science and Technology. I am a very
//             simple, positive, and honest web developer. I have always been
//             interested in web development. I take my work as a Web Developer
//             seriously, and this means I always ensure my skills are kept up to
//             date within this rapidly changing industry. I am always hungry to
//             learn new things in web development. I always try to implement and
//             develop new and different things in web development. My hobby is, in
//             my free time, I like to watch movies.
//           </p>

//           {/* Social media links with React Icons */}
//           <div className="mt-6 flex">
//             <a
//               href="https://www.facebook.com/your-facebook-profile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
//             >
//               <FaFacebookSquare />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/your-linkedin-profile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://github.com/your-github-profile"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-2xl text-blue-500 hover:text-blue-700 mr-4"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="skype:your-skype-id?chat"
//               className="text-2xl text-blue-500 hover:text-blue-700"
//             >
//               <FaSkype />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
