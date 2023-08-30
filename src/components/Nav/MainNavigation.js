import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import Logo from "./Logo";

const MainNavigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}><Logo /></div>
      <ul className={styles.nav}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/regions">
            Regions
          </Link>
        </li>
        <li>
            <Link to="/health">
                Health
            </Link>  
        </li>
        <li>
            <Link to="/makematcha">
                Make
            </Link>  
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
