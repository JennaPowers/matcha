import React from 'react';

import styles from './HealthModalContent.module.css';

const HealthModalContent = (props) => {
    return ( 
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>{props.name}</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.container__img}>
                    <img src={props.img}></img>
                </div>
                <div className={styles.body__content}>
                    <h3>{`How matcha benefits your ${props.name}`}</h3>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
     );
}
 
export default HealthModalContent;