import React from "react";

const Service = ({ service }) => {
  const { picture, name } = service;
  return (
      <div className="bg-gray-900 text-white rounded-lg shadow-inner hover:shadow-2xl transform transition-transform hover:scale-105 duration-300 p-4">
        <img src={picture} alt="service" className="h-auto w-full object-cover" />
        <div className="flex justify-center">
          <h5 className="text-xl font-semibold">{name}</h5>
        </div>
      </div>
  );
};

export default Service;
