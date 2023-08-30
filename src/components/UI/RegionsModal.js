import React, { Fragment, useState, useEffect } from "react";

import Modal from "../UI/Modal";
import RegionModalContent from "../Regions/RegionModalContent";

import uji from "../../images/uji.png";
import fukuoka from "../../images/fukuoka.png";
import kagoshima from "../../images/kagoshima.png";
import nishio from "../../images/nishio2.png";
import styles from "./RegionsModal.module.css";

const RegionsModal = (props) => {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchRegionData = async () => {
    const response = await fetch(
      "https://myikigai-99b57-default-rtdb.firebaseio.com/regions.json"
    );

    if (!response.ok) {
      console.log("error in fetching region");
    }

    const data = await response.json();

    const transformedRegions = [];

    for (const regionKey in data) {
      transformedRegions.push({
        id: regionKey,
        name: data[regionKey].name,
        flavor: data[regionKey].flavor,
        location: data[regionKey].location,
      });
    }

    const selectedRegion = transformedRegions.find(
      (region) => region.name === props.regionName
    );
    setSelectedRegion(selectedRegion);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRegionData();
  }, [selectedRegion]);

  const loadingContent = <div className={styles.loading}>Loading...</div>;

  const content = (
    <RegionModalContent
      name={selectedRegion.name}
      img={
        selectedRegion.name === "Uji"
          ? uji
          : selectedRegion.name === "Nishio"
          ? nishio
          : selectedRegion.name === "Kagoshima"
          ? kagoshima
          : fukuoka
      }
      flavor={selectedRegion.flavor}
      location={selectedRegion.location}
    />
  );

  return (
    <Fragment>
      <Modal onClose={props.onClose}>
        {!isLoading && content}
        {isLoading && loadingContent}
      </Modal>
    </Fragment>
  );
};

export default RegionsModal;
