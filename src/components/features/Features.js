import React, { useEffect } from "react";
import "./features.css";
import { FiEye } from "react-icons/fi";
import phoneFeatures from "../../assets/flex-removebg-preview.png";
import Feature from "./Feature";
import { FeatureList } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="title" data-aos="fade-up">
          <FiEye color="orangered" size={30} />
          <h2>Core Features</h2>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-up">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-up">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
