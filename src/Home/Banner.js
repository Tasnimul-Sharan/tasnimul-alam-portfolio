import React from "react";
import banner from "../../src/images/Sharan.jpg.jpg";

const Banner = () => {
  return (
    <div class="row p-5 d-flex align-items-center bg-dark text-white">
      <div class="col-lg-6">
        <h1 className="ms-auto">
          Tasnimul Alam <br /> Font-End Web developer
        </h1>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1pZ7vWqyOEkaBUdlsN-HYesODMDDEXXIA/view?usp=sharing"
        >
          <button class="btn btn-success px-4">Download Resume</button>
        </a>
      </div>
      <div class="col-lg-6">
        <img
          class="img-fluid rounded-circle img-thumbnail w-50"
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
