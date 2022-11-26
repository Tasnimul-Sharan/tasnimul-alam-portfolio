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
    <div className="my-5 container">
      <h1 className="text-info">My Skills</h1>
      <div className="row my-5 ms-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill}></Skill>
        ))}
      </div>
    </div>
  );
};

export default Skills;
