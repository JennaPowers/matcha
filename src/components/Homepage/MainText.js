import React from "react";
import styles from './MainText.module.css'

const MainText = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Start</h1>
                <h1>Your</h1>
                <h1>Day</h1>
                <h3>with</h3>
                <h1>Matcha</h1>
            </div>
        </div>
    );
};

export default MainText;