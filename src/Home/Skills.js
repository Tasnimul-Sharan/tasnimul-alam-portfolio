import React, { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div className="py-5 bg-gray-900 relative">
      <h1 className="text-4xl text-white font-bold mb-10 text-center">My Skills</h1>
      <div className=" mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;

