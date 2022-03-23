import React, { useEffect } from "react";
import "./subscribe.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Subscribe now!</h2>
        <form>
          <div className="form-control">
            <input type="text" placeholder="Enter Your Email..." />
            <button type="submit">Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <GoMarkGithub />
          </div>
          <div className="social-icon">
            <AiFillLinkedin />
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
