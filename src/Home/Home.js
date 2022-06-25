import React from "react";
import Blogs from "../Blogs/Blogs";
import Contract from "../Contract/Contract";
import About from "./About";
import Banner from "./Banner";
import Facts from "./Facts";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="container-fluid">
      <Banner />
      <About />
      <Facts />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Blogs />
      <Contract />
    </div>
  );
};

export default Home;
