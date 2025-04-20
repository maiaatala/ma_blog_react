import React, { useCallback, useState } from "react";
//import "./Navbar.css";
import { ROUTES } from "../resources/routes-constants";
import { Link } from "react-router";
import "./navbar.css";
import { useClickAway } from "../utility/useClickAway";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((old) => !old);
  }, []);

  const ref = useClickAway(() => {
    if (open) setOpen(false);
  });

  return (
    <header ref={ref} onClick={() => setOpen(false)}>
      <nav className="navbar">
        <h1 className="logo">React Page</h1>
        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav
          className={open ? "nav-links open" : "nav-links"}
          id="navLinks"
          onClick={toggle}
        >
          <Link to={ROUTES.POSTS.BASE}>Home</Link>
          <Link to={ROUTES.APPS.BASE}>Apps</Link>
          <Link to={ROUTES.ABOUT.BASE}>Sobre</Link>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
