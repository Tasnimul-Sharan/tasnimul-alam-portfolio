import React from "react";

const Skill = ({ skill }) => {
  const { picture, name, now } = skill;

  return (
    <div
      className="rounded-lg shadow-inherit p-4  hover:shadow-xl transform transition-transform hover:scale-105"
      data-aos="fade-up"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <div className="bg-gradient-to-b from-purple-500 to-indigo-600 rounded-lg shadow-lg p-4">
        <div className="text-center">
          <img src={picture} alt={name} className="w-24 h-24 mx-auto mb-3 rounded-full" />
          <h5 className="text-2xl font-semibold text-white">{name}</h5>
        </div>
        <div className="bg-gray-300 h-2 rounded-full mt-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
            style={{ width: `${now}%` }}
          ></div>
        </div>
        <p className="mt-2 text-lg font-semibold text-gray-700 text-center">{`${now}%`}</p>
      </div>
    </div>
  );
};

export default Skill;
