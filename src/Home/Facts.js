import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faLeaf,
  faT,
  faTimesCircle,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Facts = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-info mb-8">Facts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faLeaf} className="text-4xl text-primary" />
            <h1 className="text-xl font-bold mt-4">19+</h1>
            <p className="text-sm">Technologies Used</p>
          </div>

          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faAtom} className="text-4xl text-primary" />
            <h1 className="text-xl font-bold mt-4">35+</h1>
            <p className="text-sm">Projects Completed</p>
          </div>

          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faTimeline} className="text-4xl text-primary" />
            <h1 className="text-xl font-bold mt-4">15h+</h1>
            <p className="text-sm">Daily Work Hours</p>
          </div>

          <div
            className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-6 text-center"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <FontAwesomeIcon icon={faTimesCircle} className="text-4xl text-primary" />
            <h1 className="text-xl font-bold mt-4">1.5+</h1>
            <p className="text-sm">Years of Success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;


