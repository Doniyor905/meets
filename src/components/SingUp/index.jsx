import React from "react";
import Container from "../../layout/Container";
import classes from "./Singup.module.scss";


import Header from "../Header";

const SingUp = () => {
  return (
    <Container>
      <Header/>
      <div className={classes.singUp}>
      </div>
    </Container>
  );
};

export default SingUp;
