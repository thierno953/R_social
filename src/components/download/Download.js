import React, { useEffect } from "react";
import "./download.css";
import { FaApple } from "react-icons/fa";
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
        <h2>SocialX messenger download</h2>
        <p className="u-text-small">
          Our apps are available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
