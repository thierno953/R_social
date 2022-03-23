import React, { useEffect } from "react";
import { questions } from "./data.js";
import Question from "./Question";
import { BiPaperPlane } from "react-icons/bi";

import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <BiPaperPlane color="orangered" size={30} />
          <h2>Questions</h2>
      
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
