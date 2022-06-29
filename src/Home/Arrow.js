import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

const Arrow = () => {
  return (
    <a
      href="#"
      rel="noreferrer"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
    </a>
  );
};
export default Arrow;
