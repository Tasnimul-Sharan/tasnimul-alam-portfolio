import React from "react";
import Contract from "../Contract/Contract";
import About from "./About";
import Banner from "./Banner";
import Facts from "./Facts";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container-fluid">
      <Banner />
      <About />
      <Facts />
      <Skills />
      <Projects />
      <Contract />
    </div>
  );
};

export default Home;
