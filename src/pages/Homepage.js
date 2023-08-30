import React from "react";

import MainText from "../components/Homepage/MainText";
import Logo from "../components/Nav/Logo";

import leaf from "../images/plant.png";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.body}>
        <MainText className={styles.text} />
        <div className={styles.blur}></div>
        <img src={leaf} className={styles.img}></img>
      </div>
    </div>
  );
};

export default Homepage;
