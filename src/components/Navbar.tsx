import React from "react";
//import "./Navbar.css";
import { ROUTES } from "../resources/routes-constants";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">React Page</div>
      <ul className="nav-links">
        <li>
          <Link to={ROUTES.POSTS.BASE}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.APPS.BASE}>Apps</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT.BASE}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
