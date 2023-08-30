import React, { Fragment } from "react";

import Homepage from "./pages/Homepage";
import RegionsPage from "./pages/RegionsPage";
import MakeMatcha from "./pages/MakeMatcha";
import HealthPage from './pages/HealthPage';

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Homepage />
      <RegionsPage />
      <HealthPage />
      <MakeMatcha />
    </Fragment>
  );
};

export default App;
