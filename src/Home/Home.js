import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <a
        href="#"
        rel="noreferrer"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </a>
    </div>
  );
};

export default Home;
