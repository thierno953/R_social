import React, { useEffect, useState, useRef } from "react";
import "./subscribe.css";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cvsbdtv",
        "template_8781v0b",
        formRef.current,
        "user_k8XMgvWkZThzIO7dKBfKI"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clear();
  };
  const clear = () => {
    setFormData({ email: "" });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="subscribe">
      <div className="container subscribe" data-aos="fade-up">
        <h2>Subscribe now!</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
        <p>{done && "Thank you..."}</p>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
        <div className="social-icons">
          <div className="social-icon">
            <a
              href="https://github.com/thierno953"
              target="_blank"
              without
              rel="noreferrer"
            >
              <GoMarkGithub />
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/thierno-mamadou-barry-0b8527203/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
