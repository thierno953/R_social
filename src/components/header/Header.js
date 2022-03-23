import React, { useEffect } from "react";
import "./header.css";
import "../UI/Button/button.css";
import phoneHeader from "../../assets/flex-removebg-preview.png";
import { FiArrowDown } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../UI/Button/Button";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Junior Web Developer</span>
            <span>Thierno Mamadou</span>
            <span>Barry</span>
          </h1>
          <p className="u-text-small">
          Currently, I am looking for a new challenge so I am ready to work immediately
          </p>
          <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="Header" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <FiArrowDown color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
