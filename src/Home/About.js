import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import about from "../../src/images/Sharan.jpg.jpg";
import "./About.css";

const About = () => {
  return (
    <section class="about">
      <div class="container my-5">
        <h1 className="text-primary">About Me</h1>
        <div class="row my-5 d-flex align-items-center">
          <div
            class="col-lg-4"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={about}
              class="img-fluidx img-thumbnail w-50 my-3"
              alt=""
            />
          </div>
          <div
            class="col-lg-8  content"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {/* <h3>Web Developer</h3> */}
            <h5 className="text-light">
              I am Tasnimul Alam. I am studying Electronics and Communication
              Engineering at the Institute of Science and Technology. I am a
              very simple, positive, and honest web developer. I have always
              been interested in web development. I always hungry to learn new
              things in web development. I always try to implement and develope
              new and different things in web development.My hobby is in my free
              time i like to do watch movies.
            </h5>
            {/* <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />
                    <strong>Birthday:</strong> <span>7 July 1997</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />
                    <strong>Phone:</strong> <span>+88001978870757</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />{" "}
                    <strong>City:</strong> <span>Dhaka, Bangladash</span>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />{" "}
                    <strong>Age:</strong> <span>25</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />{" "}
                    <strong>Degree:</strong> <span>Honours</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                      className="mx-2 text-primary"
                      icon={faChevronRight}
                    />{" "}
                    <strong>Email:</strong>{" "}
                    <span>tasnimulsharan8962@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
