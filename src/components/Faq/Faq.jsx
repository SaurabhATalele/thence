import React from "react";
import "./Faq.css";
import image from "../../assets/images/Union.png";
import Accordian from "./Accordian";
const Faq = () => {
  const data = [
    {
      question: "Do You prefer Freelancers?",
      answer:
        "We assess freelancers based on project needs, valuing expertise, flexibility, cost-effectiveness, and diverse perspectives to achieve business objectives efficiently.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Direct engagement offers more control, personalized communication, cost efficiency, and potential for building long-term relationships compared to agency intermediation.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "A career counselor, HR professional, or mentor can assist in assessing your skills, interests, and goals to determine suitable skillsets and durations.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer:
        "We ensure satisfaction by vetting talent rigorously, matching skills to needs, offering clear communication, and providing avenues for feedback and adjustments.",
    },
  ];
  return (
    <div className="faq flex justify-between ">
      <div className="flex flex-col">
        <div className="p-5">
          <p className="heading-hand shadows-into-light-regular">
            What&apos;s on your mind
          </p>
          <h1 className="faq-heading">Ask Questions</h1>
        </div>
        <img src={image} alt="Union" className="faq-image" />
      </div>
      <div className="flex flex-col justify-center questions ">
        {data.map((item) => {
          const { question, answer } = item;
          return <Accordian question={question} answer={answer} />;
        })}
      </div>
    </div>
  );
};

export default Faq;
