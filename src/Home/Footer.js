import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin, FaSkype, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="text-center bg-gray-950 text-white py-10 relative">
    <p className="text-lg">
      Copyright © {new Date().getFullYear()} All rights reserved.
    </p>
    <p className="text-lg">Tasnimul Alam</p>
    <div className="mt-4 flex justify-center">
      <a
        href="https://www.facebook.com/tasnimul.sharan.397"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaFacebookSquare size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/tasnimul-alam-32b70a182/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="#skype-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-600 mx-2"
      >
        <FaSkype size={32} />
      </a>
      <a
        href="https://github.com/Tasnimul-Sharan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-slate-500 mx-2"
      >
        <FaGithub size={32} />
      </a>
    </div>
  </div>
  );
};

export default Footer;
