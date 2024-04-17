import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Print from "../Print/Print";
import Mobile from "./menuMobile/mobile";
import menu from "../../assets/icons/icon_menu_white.png"
import "./Navbar.scss";

function Navbar() {

  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMenu = () => {
    setToggle(false)
  }

  return (
    <div>
      <div
        className="caja animate__animated 
      animate__bounceInRight"
      >
        <div className="content-view">
          <a
            className="nav-link see"
            href="https://github.com/edwinkay/Frontend-React-CV"
          >
            View source code
          </a>
        </div>

        <ul className="content-navbar">
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/Javascript" ? "active" : ""
              }`}
              to="/Javascript"
            >
              Javascript
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/Angular" ? "active" : ""
              }`}
              to="/Angular"
            >
              Angular
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                location.pathname === "/React" ? "active" : ""
              }`} 
              to="/React"
            >
              React
            </Link>
          </li>
          <li>
            <Link className="nav-link-print" to="/">
              <Print />
            </Link>
          </li>
        </ul>
      </div>
      <div className="verMobile">
        <img
          className="editImage"
          onClick={handleToggle}
          src={menu}
          alt="menu"
        />
      </div>
      <div className="animate__animated bounceInLeft">
        {toggle && <Mobile closeMenu={closeMenu} />}
      </div>
    </div>
  );
}

export default Navbar;
