import React from "react";
import "../menuMobile/mobile.scss";
import { Link } from "react-router-dom";

function Mobile({ closeMenu }) {

   const handleClick =() => {
    closeMenu()
   }
  return (
    <div className="cajaM">
      <ul>
        <li>
          <Link className="nav-linkM" onClick={handleClick} to="/my-portfolio">
            Profile
          </Link>
        </li>
        <li>
          <Link className="nav-linkM" onClick={handleClick} to="/Javascript">
            Javascript
          </Link>
        </li>
        <li>
          <Link className="nav-linkM" onClick={handleClick} to="/Angular">
            Angular
          </Link>
        </li>
        <li>
          <Link className="nav-linkM" onClick={handleClick} to="/React">
            React
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Mobile;
