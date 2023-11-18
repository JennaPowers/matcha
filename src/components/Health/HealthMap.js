/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import matchaGirl from "../../images/matchaGirl.png";
import heartImg from "../../images/healthImgHeart.png";
import energyImg from "../../images/healthImgEnergy.png";
import liverImg from "../../images/healthImgLiver.png";
import mindImg from "../../images/healthImgMind.png";
import skinImg from "../../images/healthImgSkin.png";

import styles from "./HealthMap.module.css";

const HealthMap = (props) => {
  const [nameDisplay, setNameDisplay] = useState("");

  const onHoverHandler = (healthBenefit) => {
    if (healthBenefit === "Heart") {
      const div = document.querySelector(`.${styles.background__1}`);
      const img = document.querySelector(`.${styles.star}`);
      div.classList.remove(`${styles.hoverBack__1}`);
      img.classList.remove(`${styles.hoverBack__1}`);
      div.classList.add(`${styles.hover__1}`);
      img.classList.add(`${styles.hover__1}`);
    } else if (healthBenefit === "Energy") {
      const div = document.querySelector(`.${styles.background__2}`);
      const img = document.querySelector(`.${styles.star__2}`);
      div.classList.remove(`${styles.hoverBack__2}`);
      img.classList.remove(`${styles.hoverBack__2}`);
      div.classList.add(`${styles.hover__2}`);
      img.classList.add(`${styles.hover__2}`);
    } else if (healthBenefit === "Liver") {
      const div = document.querySelector(`.${styles.background__3}`);
      const img = document.querySelector(`.${styles.star__3}`);
      div.classList.remove(`${styles.hoverBack__3}`);
      img.classList.remove(`${styles.hoverBack__3}`);
      div.classList.add(`${styles.hover__3}`);
      img.classList.add(`${styles.hover__3}`);
    } else if (healthBenefit === "Mind") {
      const div = document.querySelector(`.${styles.background__4}`);
      const img = document.querySelector(`.${styles.star__4}`);
      div.classList.remove(`${styles.hoverBack__4}`);
      img.classList.remove(`${styles.hoverBack__4}`);
      div.classList.add(`${styles.hover__4}`);
      img.classList.add(`${styles.hover__4}`);
    } else {
      const div = document.querySelector(`.${styles.background__5}`);
      const img = document.querySelector(`.${styles.star__5}`);
      div.classList.remove(`${styles.hoverBack__5}`);
      img.classList.remove(`${styles.hoverBack__5}`);
      div.classList.add(`${styles.hover__5}`);
      img.classList.add(`${styles.hover__5}`);
    }
  };

  const onMouseOutHandler = (healthBenefit) => {
    setNameDisplay("");

    if (healthBenefit === "Heart") {
      const div = document.querySelector(`.${styles.background__1}`);
      const img = document.querySelector(`.${styles.star}`);
      div.classList.remove(`${styles.hover__1}`);
      img.classList.remove(`${styles.hover__1}`);
      div.classList.add(`${styles.hoverBack__1}`);
      img.classList.add(`${styles.hoverBack__1}`);
    } else if (healthBenefit === "Energy") {
      const div = document.querySelector(`.${styles.background__2}`);
      const img = document.querySelector(`.${styles.star__2}`);
      div.classList.remove(`${styles.hover__2}`);
      img.classList.remove(`${styles.hover__2}`);
      div.classList.add(`${styles.hoverBack__2}`);
      img.classList.add(`${styles.hoverBack__2}`);
    } else if (healthBenefit === "Liver") {
      const div = document.querySelector(`.${styles.background__3}`);
      const img = document.querySelector(`.${styles.star__3}`);
      div.classList.remove(`${styles.hover__3}`);
      img.classList.remove(`${styles.hover__3}`);
      div.classList.add(`${styles.hoverBack__3}`);
      img.classList.add(`${styles.hoverBack__3}`);
    } else if (healthBenefit === "Mind") {
      const div = document.querySelector(`.${styles.background__4}`);
      const img = document.querySelector(`.${styles.star__4}`);
      div.classList.remove(`${styles.hover__4}`);
      img.classList.remove(`${styles.hover__4}`);
      div.classList.add(`${styles.hoverBack__4}`);
      img.classList.add(`${styles.hoverBack__4}`);
    } else {
      const div = document.querySelector(`.${styles.background__5}`);
      const img = document.querySelector(`.${styles.star__5}`);
      div.classList.remove(`${styles.hover__5}`);
      img.classList.remove(`${styles.hover__5}`);
      div.classList.add(`${styles.hoverBack__5}`);
      img.classList.add(`${styles.hoverBack__5}`);
    }
  };

  const onClickHandler = (healthBenefit) => {
    props.onShowModal(healthBenefit);
    setNameDisplay("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.blur}></div>
        <img src={matchaGirl}></img>
      </div>
      <div className={styles.stars}>
        <span>{nameDisplay === "Heart" && nameDisplay}</span>
        <div className={`${styles.background} ${styles.background__1} `} />
        <img
          src={heartImg}
          className={`${styles.star} ${styles.star1}`}
          onMouseEnter={() => onHoverHandler("Heart")}
          onMouseOut={() => onMouseOutHandler("Heart")}
          onClick={() => onClickHandler("Heart")}
        ></img>
        <span>{nameDisplay === "Energy" && nameDisplay}</span>
        <div className={`${styles.background} ${styles.background__2} `} />
        <img
          src={energyImg}
          className={`${styles.star} ${styles.star__2}`}
          onMouseEnter={() => onHoverHandler("Energy")}
          onMouseOut={() => onMouseOutHandler("Energy")}
          onClick={() => onClickHandler("Energy")}
        ></img>
        <span>{nameDisplay === "Liver" && nameDisplay}</span>
        <div className={`${styles.background} ${styles.background__3} `} />
        <img
          src={liverImg}
          className={`${styles.star} ${styles.star__3}`}
          onMouseEnter={() => onHoverHandler("Liver")}
          onMouseOut={() => onMouseOutHandler("Liver")}
          onClick={() => onClickHandler("Liver")}
        ></img>
        <span>{nameDisplay === "Mind" && nameDisplay}</span>
        <div className={`${styles.background} ${styles.background__4} `} />
        <img
          src={mindImg}
          className={`${styles.star} ${styles.star__4}`}
          onMouseEnter={() => onHoverHandler("Mind")}
          onMouseOut={() => onMouseOutHandler("Mind")}
          onClick={() => onClickHandler("Mind")}
        ></img>
        <span>{nameDisplay === "Skin" && nameDisplay}</span>
        <div className={`${styles.background} ${styles.background__5} `} />
        <img
          src={skinImg}
          className={`${styles.star} ${styles.star__5}`}
          onMouseEnter={() => onHoverHandler("Skin")}
          onMouseOut={() => onMouseOutHandler("Skin")}
          onClick={() => onClickHandler("Skin")}
        ></img>
      </div>
    </div>
  );
};

export default HealthMap;
