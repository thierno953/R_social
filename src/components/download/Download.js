import React, { useEffect } from "react";
import "./download.css";
import { AiFillCheckSquare } from "react-icons/ai";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>Nice to meet you.</h2>
        <p className="u-text-small">
        I like to code things from scratch, and enjoy bringing ideas to life in the browser.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <AiFillCheckSquare /> <p>web dev</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
