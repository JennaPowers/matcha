import React, { useState } from "react";

import japanColor from "../../images/japanColor.png";
import pin from "../../images/pushpin.png";

import styles from "./RegionsMap.module.css";

const RegionsMap = (props) => {
    const [nameDisplay, setNameDisplay] = useState("");

    const onHoverHandler = (regionName) => {
        setNameDisplay(regionName);
    };

    const onClickHandler = (regionName) => {
        props.onShowModal(regionName);
        setNameDisplay("");
    };


  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={japanColor}></img>
      </div>
      <div className={styles.pins}>
        <span>{nameDisplay === "Uji" && nameDisplay}</span>
        <img
          src={pin}
          className={`${styles.pin} ${styles.pin__1}`}
          onMouseEnter={() => onHoverHandler("Uji")}
          onClick={() => onClickHandler("Uji")}
        ></img>
         <span>{nameDisplay === "Fukuoka" && nameDisplay}</span>
        <img
          src={pin}
          className={`${styles.pin} ${styles.pin__2}`}
          onMouseEnter={() => onHoverHandler("Fukuoka")}
          onClick={() => onClickHandler("Fukuoka")}
        ></img>
         <span>{nameDisplay === "Nishio" && nameDisplay}</span>
        <img
          src={pin}
          className={`${styles.pin} ${styles.pin__3}`}
          onMouseEnter={() => onHoverHandler("Nishio")}
          onClick={() => onClickHandler("Nishio")}
        ></img>
        <span>{nameDisplay === "Kagoshima" && nameDisplay}</span>
         <img
          src={pin}
          className={`${styles.pin} ${styles.pin__4}`}
          onMouseEnter={() => onHoverHandler("Kagoshima")}
          onClick={() => onClickHandler("Kagoshima")}
        ></img>
      </div>
    </div>
  );
};

export default RegionsMap;
