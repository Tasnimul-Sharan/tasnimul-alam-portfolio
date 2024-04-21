import React from "react";
import { FaFacebookSquare, FaLinkedin, FaSkype, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="text-center bg-gray-950 text-white py-10">
    <p className="text-lg">
      Copyright © {new Date().getFullYear()} All rights reserved.
    </p>
    <p className="text-lg">Tasnimul Alam</p>
    <div className="mt-4 flex justify-center">
      <a
        href="#your-facebook-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaFacebookSquare size={32} />
      </a>
      <a
        href="#your-linkedin-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="#your-skype-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaSkype size={32} />
      </a>
      <a
        href="#your-youtube-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-red-700 mx-2"
      >
        <FaYoutube size={32} />
      </a>
    </div>
  </div>
  );
};

export default Footer;
