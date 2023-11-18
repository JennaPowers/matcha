import React from "react";

import Homepage from "./pages/Homepage";
import RegionsPage from "./pages/RegionsPage";
import MakeMatcha from "./pages/MakeMatcha";
import HealthPage from './pages/HealthPage';

import "./App.css";

const App = () => {
  return (
    <>
      <Homepage />
      <RegionsPage />
      <HealthPage />
      <MakeMatcha />
    </>
  );
};

export default App;
