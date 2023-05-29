import React from "react";
import Logo from "../../image/logo.svg";
import headerImg from "../../image/headerImg.png";
import { Link } from "react-router-dom";
import Container from "../../layout/Container";
const Home = () => {
  return (
    <Container>
      <nav className="nav">
        <a href="#!" className="nav__logo">
          <img src={Logo} alt="" />
          <p>Meets</p>
        </a>
        <Link to="/login" className="nav__link">
          Login
        </Link>
      </nav>

      <header className="header">
        <div className="header__inner">
          <div className="header__contents">
            <h1>Meets - enjoy from unlimited features</h1>
            <p>Create and schedule online conferences</p>
            <Link to="/login">Get started for free</Link>
          </div>
          <div className="header__image">
            <img src={headerImg} alt="" />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Home;
