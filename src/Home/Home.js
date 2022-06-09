import React from "react";
import Contract from "../Contract/Contract";
import Banner from "./Banner";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="container-fluid">
      <Banner />
      <Projects />
      <Contract />
    </div>
  );
};

export default Home;
