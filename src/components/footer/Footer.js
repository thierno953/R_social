import React from "react";
import "./footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Languages & FrameWorks</h4>
          <div className="footer-links">
            <a href="#">&bull; Html</a>
            <a href="#">&bull; Css</a>
            <a href="#">&bull; JavaScript</a>
            <a href="#">&bull; React</a>
            <a href="#">&bull; Node</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Home</a>
            <a href="#">&bull; Features</a>
            <a href="#">&bull; Download</a>
            <a href="#">&bull; Subscribe</a>
            <a href="#">&bull; Lear More</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt /> &nbsp; Address: Woluwe Saint Pierre.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +32 466 240 103.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: thiernobarry554@gmail.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: https://portfoliowebsitereact.netlify.app
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Footer;
