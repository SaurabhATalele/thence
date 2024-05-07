import React from "react";
import model from "../../assets/images/model.png";
import spark from "../../assets/images/spark.png";
import { IoIosRocket } from "react-icons/io";
import "./InfoGraphic.css";

const InfoGraphic = () => {
  return (
    <div className="info-container flex justify-center ">
      <img src={model} alt="model" className="model" />
      <div className="time-box">
        <img src={spark} alt="spark" className="spark" />
        <div className="data-box">
          <h1 className="perc">40%</h1>
          <p className="time-desc">
            Achieved reduction in project execution time by optimising team
            availability
          </p>
        </div>
      </div>

      <div className="day-box flex flex-row">
        <div className="rocket">
          <IoIosRocket className="rocket-image " />
        </div>
        <div className="flex flex-col justify-center text-left ">
          <h3 className="m-0">10 Days</h3>
          <p className="m-0">Staff Deployment</p>
        </div>
      </div>

      <div className="expense-box">
        <h1 className="m-0 text-left">
          $0.5 <span>MILLION</span>
        </h1>
        <p className="text-left">
          Reduced client expenses by saving on hiring and employee costs.
        </p>
      </div>
    </div>
  );
};

export default InfoGraphic;
