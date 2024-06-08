

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStackExchange, FaRegClock, FaCreativeCommonsShare, FaReact, FaAnchor, FaProductHunt, FaCode, FaCodepen } from "react-icons/fa"; 
import { GiProgression, GiGearHammer } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md"; 

AOS.init();

const Facts = () => {
  return (
    
    <section className="bg-gray-900 text-white py-10 relative">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-info mb-8">Facts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-10">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-10 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <FaCode className="text-4xl text-primary mr-10" />
            <div>
              <h1 className="text-xl font-bold">20+</h1>
              <p className="text-sm">Technologies Used</p>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <FaReact className="text-4xl text-primary mr-10" /> 
            <div>
              <h1 className="text-xl font-bold">35+</h1>
              <p className="text-sm">Projects Completed</p>
            </div>
          </div>
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 justify-center flex items-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <MdWorkOutline className="text-4xl text-primary mr-10" />
            <div>
              <h1 className="text-xl font-bold">12h+</h1>
              <p className="text-sm">Daily Work Hours</p>
            </div>
          </div>

          <div
            className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-6 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <FaRegClock className="text-4xl text-primary mr-10" /> 
            <div>
              <h1 className="text-xl font-bold">1</h1>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
