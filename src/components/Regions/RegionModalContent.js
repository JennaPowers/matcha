import React from 'react';

import styles from './RegionModalContent.module.css';

const RegionModalContent = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{props.name}</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.locationContent}>
                    <span>{props.location}</span>
                </div>
                <div className={styles.img}>
                    <img src={props.img}></img>
                </div>
                <div className={styles.flavorContent}>
                    <h3>Flavor Profile</h3>
                    <span>{props.flavor}</span>
                </div>
            </div>
        </div>
     );
}
 
export default RegionModalContent;