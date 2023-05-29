import React from "react";
import classes from "./Login.module.scss";
import loginImg from "../../image/loginImg.png";
import logo from "../../image/logo.svg";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={classes.login}>
      <Container>
        <div className={classes.header}>
          <Link to="/" className={classes.header__logo}>
            <img src={logo} alt="" />
            <p>Meets</p>
          </Link>
          <Link to="/singup" className={classes.header__link}>
            Sign up
          </Link>
        </div>
        <div className={classes.login__inner}>
          <div className={classes.login__img}>
            <img src={loginImg} alt="" />
          </div>
          <div className={classes.login__item}>
            <h2>Login</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={classes.login__inputs}>
              <input type="text" className={classes.login__name} placeholder="Email:"/>
              <input type="password" className={classes.login__pass} placeholder="Password:"/>
            </div>
            <button>Login</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
