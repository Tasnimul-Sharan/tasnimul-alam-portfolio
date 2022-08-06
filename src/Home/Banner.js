import React from "react";
import banner from "../../src/images/Sharan.jpg.jpg";
import "../App.css";

const Banner = () => {
  return (
    <div class="row p-5 d-flex align-items-center bg-dark text-white ">
      <div class="col-lg-6">
        <h1 className="ms-auto text-info">
          Tasnimul Alam <br /> Full Stack Developer
        </h1>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1pZ7vWqyOEkaBUdlsN-HYesODMDDEXXIA/view?usp=sharing"
        >
          <button class="btn btn-outline-success px-4">Download Resume</button>
        </a>
      </div>
      <div
        class="col-lg-6"
        // data-aos="fade-right"
        // data-aos-delay="100"
        // data-aos-duration="1000"
      >
        <img
          class="img-fluid rounded-circle img-thumbnail w-50 my-5"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
