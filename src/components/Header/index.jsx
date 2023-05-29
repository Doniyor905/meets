import React from "react";
import Logo from "../../image/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <a href="#!" className="nav__logo">
        <img src={Logo} alt="" />
        <p>Meets</p>
      </a>
      <Link to="/login" className="nav__link">
        Login
      </Link>
    </nav>
  );
};

export default Header;
