import React from "react";
import BlackBelt from "../../src/images/blackBelt.png";
import certificate from "../../src/images/Tasnimul Alam_1.JPEG";

const Achivements = () => {
  return (
    <div className="container">
      <h1 className="text-info">My Achivements</h1>
      <div className="row my-5">
        <div
          className="col-lg-6"
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={BlackBelt} className="img-fluid " alt="" />
        </div>
        <div
          className="col-lg-6"
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img src={certificate} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achivements;
