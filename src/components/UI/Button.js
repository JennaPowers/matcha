import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.container}>
      <button
        type={props.type}
        className={styles[`${props.className}`]}
        disabled={props.disabled ? true : false}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
