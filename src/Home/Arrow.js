import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

const Arrow = () => {
  // function getArrow() {
  //   window.onscroll = function () {
  //     if (window.pageYOffset >= 1000) {
  //       document.getElementById("arrow").style.display = "block";
  //       console.log("Asi");
  //     } else {
  //       document.getElementById("arrow").style.display = "hidden";
  //       console.log("nai");
  //     }
  //   };
  // }

  // getArrow();
  window.onscroll = function () {
    //pageOffset where the cursor is
    var pageOffset =
        document.documentElement.scrollTop || document.body.scrollTop,
      btn = document.getElementById("scrollToTop");
    if (btn) btn.style.visibility = pageOffset > 450 ? "visible" : "hidden";
  };

  return (
    <a
      id="scrollToTop"
      href="#"
      rel="noreferrer"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
    </a>
  );
};
export default Arrow;
