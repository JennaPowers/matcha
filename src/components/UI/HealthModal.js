import React, { useState, useEffect, useCallback } from "react";

import Modal from "../UI/Modal";
import HealthModalContent from "../Health/HealthModalContent";

import heartImg from "../../images/healthImgHeart.png";
import energyImg from "../../images/healthImgEnergy.png";
import liverImg from "../../images/healthImgLiver.png";
import mindImg from '../../images/healthImgMind.png';
import skinImg from '../../images/healthImgSkin.png';

import styles from "./HealthModal.module.css";

const HealthModal = (props) => {
  const [selectedBenefit, setSelectedBenefit] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchHealthData = useCallback(async () => {
    const response = await fetch(
      "https://myikigai-99b57-default-rtdb.firebaseio.com/health.json"
    );

    if (!response.ok) {
      console.log("error in fetching health benefits");
    }

    const data = await response.json();

    const transformedHealthData = [];

    for (const healthKey in data) {
      transformedHealthData.push({
        id: healthKey,
        name: data[healthKey].name,
        img: data[healthKey].img,
        description: data[healthKey].description,
      });
    }

    const selectedBenefit = transformedHealthData.find(
      (benefit) => benefit.name === props.benefit
    );
    setSelectedBenefit(selectedBenefit);
    setIsLoading(false);
  }, [props.benefit]);

  useEffect(() => {
    fetchHealthData();
  }, [fetchHealthData]);

  const loadingContent = <div className={styles.loading}>Loading...</div>;

  const content = (
    <HealthModalContent
      name={selectedBenefit.name}
      img={
        selectedBenefit.name === "Heart"
          ? heartImg
          : selectedBenefit.name === "Energy"
          ? energyImg
          : selectedBenefit.name === "Liver"
          ? liverImg
          : selectedBenefit.name === "Mind"
          ? mindImg
          : skinImg
      }
      description={selectedBenefit.description}
    />
  );

  return (
    <>
      <Modal onClose={props.onClose}>
        {!isLoading && content}
        {isLoading && loadingContent}
      </Modal>
    </>
  );
};

export default HealthModal;
