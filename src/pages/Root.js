import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Nav/MainNavigation";

import styles from "./Root.module.css";

const RootLayout = () => {
  return (
    <Fragment>
      <main className={styles.content}>
        <MainNavigation />
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
