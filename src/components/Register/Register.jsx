import React, { useState } from "react";
import "./Register.css";
import logo from "../../assets/images/Logo.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiWarningCircleFill } from "react-icons/pi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    }
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 5
    ) {
      setEmailError(true);
    }
  };

  return (
    <div className="register">
      <div className="nav">
        <img src={logo} alt="logo" />
        <Link to="/">
          <IoIosCloseCircleOutline
            style={{
              width: "40px",
              height: "40px",
              color: "#808080",
            }}
          />
        </Link>
      </div>
      <form>
        <h3 className="shadows-into-light-regular heading-register">
          Registration Form
        </h3>
        <h1 className="headline-register ">Start your success journey here!</h1>
        <div className=" input-form flex flex-col">
          <div className="inner-div ">
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);

                name.length && setNameError(false);
                !name.length && setNameError(true);
              }}
              placeholder="Enter Your Name"
            />
            {nameError && (
              <p className="text-left error flex items-center">
                <PiWarningCircleFill /> Enter a valid Name
              </p>
            )}
          </div>
          <div className="inner-div">
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                email.length && setEmailError(false);
                !email.length && setEmailError(true);
              }}
              placeholder="Enter Your Email"
            />
            {emailError && (
              <p className="text-left error flex items-center">
                <PiWarningCircleFill /> Enter a valid Email
              </p>
            )}
          </div>

          <input
            type="submit"
            className={`${name.length || email.length ? "on" : ""}`}
            value={"Submit"}
            onClick={handleSubmit}
            disabled={name.length || email.length ? false : true}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
