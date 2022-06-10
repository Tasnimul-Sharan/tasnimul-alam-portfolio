import {
  faAtom,
  faFaceSmile,
  faLeaf,
  faSmile,
  faT,
  faTimeline,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Facts = () => {
  return (
    <section>
      <div class="container">
        <div className="my-5">
          <h1>Facts</h1>
        </div>
        <div class="row shadow-lg">
          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div class="count-box">
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faLeaf} />
                <span>15+</span>
              </h1>
              <p>
                <strong>Tecnology Used</strong>
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div>
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faAtom} />
                <span>35+</span>
              </h1>

              <p>
                <strong>Projects</strong>
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div class="count-box">
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faTimeline} />
                <span>15h+</span>
              </h1>

              <p>
                <strong>Per day works of time</strong>
              </p>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div class="count-box">
              <h1 className="text-primary">
                <FontAwesomeIcon icon={faAtom} />
                <span>1.5+</span>
              </h1>

              <p>
                <strong>Years of Success</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
