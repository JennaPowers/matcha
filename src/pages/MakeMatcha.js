import React from "react";

import MainText from "../components/MakeMatcha/MakeText";
import MakeBox from "../components/MakeMatcha/MakeBox";

import styles from "./MakeMatcha.module.css";

const MakeMatcha = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <MainText />
      </div>
      <div className={styles.body}>
        <MakeBox />
      </div>
    </div>
  );
};

export default MakeMatcha;
