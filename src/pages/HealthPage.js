import React, { useState } from "react";

import HealthMainText from "../components/Health/HealthMainText";
import HealthModal from '../components/UI/HealthModal';
import HealthMap from '../components/Health/HealthMap';

import styles from "./HealthPage.module.css";

const HealthPage = () => {
    const [modalIsShown, setModalIsShown] = useState(false);
    const [benefit, setBenefit] = useState("");

    const showModalHandler = (healthBenefit) => {
        setModalIsShown(true);
        setBenefit(healthBenefit);
    };

    const hideModalHandler = () => {
      setModalIsShown(false);
    };

  return (
    <div className={styles.container}>
        {modalIsShown && <HealthModal benefit={benefit} onClose={hideModalHandler} />}
      <div className={styles.header}>
        <HealthMainText />
      </div>
      <div className={styles.body}>
        <HealthMap onShowModal={showModalHandler}/>
      </div>
    </div>
  );
};

export default HealthPage;
