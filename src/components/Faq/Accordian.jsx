"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./Accordian.css";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col acc">
      <div className="flex justify-between items-center">
        <p className="que">{question}</p>
        {isOpen ? (
          <FaMinus onClick={() => setIsOpen(false)} className="button" />
        ) : (
          <FaPlus onClick={() => setIsOpen(true)} className="button"/>
        )}
      </div>
      {isOpen && <p className="desc">{answer}</p>}
    </div>
  );
};

export default Accordian;
