import React, { useEffect, useState } from "react";
import Skill from "./Skill";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  // const skills = [
  //   { id: 1, name: "Kayla Mccormick", img: expert1 },
  // { id: 2, name: "Herring Crane", img: expert2 },
  // { id: 3, name: "Lori Ochoa", img: expert3 },
  // { id: 4, name: "Wynn Wilson", img: expert4 },
  // { id: 5, name: "Mcintyre Castaneda", img: expert5 },
  // { id: 6, name: "Cheri Swanson", img: expert6 },
  // ]
  // // const numbers = [95, 78, 56, 45, 23, 34, 78, 67, 78];
  return (
    <div className="my-5 container">
      <h1 className="text-info">My Skills</h1>
      <div className="row my-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill}></Skill>
        ))}
        {/* {numbers.map((skill) => (
          <Skill key={skill._id} skill={skill}></Skill>
        ))} */}
      </div>
    </div>
    // <section id="skills" class="skills section-bg">
    //   <div class="container">
    //     <div class="section-title">
    //       <h2>Skills</h2>
    //       <p>
    //         Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
    //         aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
    //         quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
    //         fugiat sit in iste officiis commodi quidem hic quas.
    //       </p>
    //     </div>

    //     <div class="row skills-content">
    //       <div class="col-lg-6" data-aos="fade-up">
    //         <div class="progress">
    //           <span class="skill">
    //             HTML <i class="val">100%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="100"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>

    //         <div class="progress">
    //           <span class="skill">
    //             CSS <i class="val">90%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="90"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>

    //         <div class="progress">
    //           <span class="skill">
    //             JavaScript <i class="val">75%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="75"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
    //         <div class="progress">
    //           <span class="skill">
    //             PHP <i class="val">80%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="80"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>

    //         <div class="progress">
    //           <span class="skill">
    //             WordPress/CMS <i class="val">90%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="90"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>

    //         <div class="progress">
    //           <span class="skill">
    //             Photoshop <i class="val">55%</i>
    //           </span>
    //           <div class="progress-bar-wrap">
    //             <div
    //               class="progress-bar"
    //               role="progressbar"
    //               aria-valuenow="55"
    //               aria-valuemin="0"
    //               aria-valuemax="100"
    //             ></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Skills;
