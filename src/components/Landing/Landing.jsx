import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Landing.css";
import image from "../../assets/images/landing.png";
import { FaArrowRight } from "react-icons/fa";
import Faq from "../Faq/Faq";
import InfoGraphic from "../InfoGraphic/InfoGraphic";
import Footer from "../Footer/Footer";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <div className="content">
        <p className="success-text shadows-into-light-regular">
          Success Stories
        </p>
        <h1 className="heading-1">
          Every success journey we&apos;ve encountered.
        </h1>
        <div className="flex justify-between data-container ">
          <InfoGraphic />
          <div className="flex flex-col justify-between data-details  ">
            <p className="desc-1">
              Enhance fortune 50 company&apos;s insights teams research
              capabilities
            </p>
            <button className="flex items-center button-dark">
              Explore More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
