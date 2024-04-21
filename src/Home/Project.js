import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, name, description, picture, path } = project;

  return (
      <div className="bg-gray-900 text-white rounded-lg shadow-inner hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 p-4">
        <Link to={`projetdetails/${_id}`} className="block mb-4">
          <img
            src={picture}
            alt={name}
            className="w-full h-48 object-cover rounded-md"
          />
        </Link>
        <div className="flex flex-col justify-between h-full">
          <div>
            <Link to={`projetdetails/${_id}`} className="hover:text-green-500">
              <h3 className="text-lg font-semibold">{name}</h3>
            </Link>
            <p className="text-sm mt-2">{description}</p>
            <div className="mt-3">
            <Link to={path}>
            
              <button className="bg-[#149ddd] text-white rounded-md hover:bg-[#389fce] px-4 py-2 transition duration-300">
                Details
              </button>
            </Link>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Project;
