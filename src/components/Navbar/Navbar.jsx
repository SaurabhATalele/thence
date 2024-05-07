import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="button-container">
        <Link
          to={"/register"}
          className="nav-button"
          style={{ textDecoration: "none", color: "black" }}
        >
          Get Projects
        </Link>
        <button className="nav-button button-dark">Onboard Talent</button>
      </div>
    </nav>
  );
};

export default Navbar;
