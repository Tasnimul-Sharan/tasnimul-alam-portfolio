import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4 pb-2">
      <p>
        <b>
          Copyright © {new Date().getFullYear()} All rights reserved. <br />
          Tasnimul Alam
        </b>
      </p>
    </div>
  );
};

export default Footer;
