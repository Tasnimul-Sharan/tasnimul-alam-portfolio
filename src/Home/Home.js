import React from "react";
import About from "./About";
import Arrow from "./Arrow";
import Banner from "./Banner";
import Facts from "./Facts";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";
import Achivements from "./Achivements";
import Contact from "../Contact/Contact";
import Experiences from "./Experiences";
import FQA from "./FQA";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Experiences />
      <Facts />
      <Skills />
      <Services /> 
      <Projects />
      <Achivements />
      <FQA />
      <Contact />
      <Arrow></Arrow>
    </div>
  );
};

export default Home;
