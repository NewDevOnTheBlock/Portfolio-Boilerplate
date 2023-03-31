import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserAstronaut,
  FaHome,
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";


function NavBar() {


  return (
    <nav className="nav">
      <div className="nav-routes">
        <NavLink to="/">
          <FaHome className="icon-large highlight-red" />
        </NavLink>
        <NavLink to="/about">
          <FaUserAstronaut className="icon-large highlight-orange" />
        </NavLink>
        <NavLink to="/projects">
          <FaCode className="icon-large highlight-yellow" />
        </NavLink>
      </div>
      <div className="nav-routes">
        <a
          href="https://www.linkedin.com/in/pierce-deanda/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="icon-large highlight-pink" />
        </a>
        <a
          href="https://www.github.com/NewDevOnTheBlock/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="icon-large highlight-blue" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
