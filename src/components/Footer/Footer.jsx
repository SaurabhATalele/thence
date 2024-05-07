import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer flex justify-between">
      <p>
        <FaRegCopyright /> Talup 2023. All rights reserved
      </p>
      <div className="links">
        <Link to={"#"}>Terms and Conditions</Link>
        <Link to={"#"}>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
