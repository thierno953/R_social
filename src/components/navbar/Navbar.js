import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineLineHeight } from "react-icons/ai";
import "./navbar.css";
import Button from "../UI/Button/Button";
import "../UI/Button/button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <AiOutlineLineHeight color="#fff" size={33} />
        <p className="logo-text">
          H<span>B</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#download" onClick={toggleMenu}>
              Download
            </a>
          </li>
          <li>
            <a href="#subscribe" onClick={toggleMenu}>
              Subscribe
            </a>
          </li>

          <li className="nav-btn">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
