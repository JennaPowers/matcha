import React, { useState } from "react";

import RegionsText from "../components/Regions/RegionsText";
import RegionsMap from "../components/Regions/RegionsMap";
import RegionsModal from "../components/UI/RegionsModal";

import styles from "./RegionsPage.module.css";

const RegionsPage = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [matchaRegion, setMatchaRegion] = useState("");

  const showModalHandler = (region) => {
    setModalIsShown(true);
    setMatchaRegion(region);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <div className={styles.container}>
      {modalIsShown && (
        <RegionsModal 
          regionName={matchaRegion} 
          onClose={hideModalHandler} />
      )}
      <div className={styles.header}>
        <RegionsText />
      </div>
      <div className={styles.body}>
        <div className={styles.image}>
          <RegionsMap onShowModal={showModalHandler} />
        </div>
      </div>
    </div>
  );
};

export default RegionsPage;
