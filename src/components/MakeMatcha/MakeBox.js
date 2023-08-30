import React, { useReducer, useState, useEffect } from "react";
import Button from "../UI/Button";

import sifter from "../../images/sifter.png";
import teapot from "../../images/teapot.png";
import whisk from "../../images/whisk.png";
import hotMatcha from "../../images/hotMatcha.png";

import styles from "./MakeBox.module.css";

const steps = [
  {
    step: "1",
    description: "Sift 1-2 tsp matcha into a cup using a small sifter.",
  },
  {
    step: "2",
    description:
      "Add 2oz hot water. For best results use water just under a boil.",
  },
  {
    step: "3",
    description:
      "Whisk vigorously in a zig zag motion until the tea is frothy.",
  },
  {
    step: "4",
    description: "Enjoy your matcha tea straight from the bowl.",
  },
];

const stepReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    if (state.stepIndex >= 3) {
      return { stepIndex: state.stepIndex, stepData: state.stepData };
    }
    return {
      stepIndex: state.stepIndex + 1,
      stepData: steps[state.stepIndex + 1],
    };
  }
  if (action.type === "DECREMENT") {
    if (state.stepIndex <= 0) {
      return { stepIndex: state.stepIndex, stepData: state.stepData };
    }
    return {
      stepIndex: state.stepIndex - 1,
      stepData: steps[state.stepIndex - 1],
    };
  }

  return {
    stepIndex: 0,
    stepData: steps[0],
  };
};
const initialState = {
  stepIndex: 0,
  stepData: steps[0],
};

const MakeBox = () => {
  const [stepState, dispatchStep] = useReducer(stepReducer, initialState);
  const [prevIsDisabled, setPrevIsDisabled] = useState(true);
  const [forwardIsDisabled, setForwardIsDisabled] = useState(false);

  const clickNextHandler = () => {
    dispatchStep({
      type: "INCREMENT",
    });

    if (stepState.stepIndex >= 2) {
      setForwardIsDisabled(true);
    }
    if (prevIsDisabled) {
      setPrevIsDisabled(false);
    }
  };

  const clickPreviousHandler = () => {
    dispatchStep({
      type: "DECREMENT",
    });

    if (stepState.stepIndex <= 1) {
      setPrevIsDisabled(true);
    }

    if (forwardIsDisabled) {
      setForwardIsDisabled(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>
          <span>{`Step ${stepState.stepData.step}`}</span>
        </h3>
      </div>
      <div className={styles.body}>
        <img
          src={
            stepState.stepIndex == 0
              ? sifter
              : stepState.stepIndex == 1
              ? teapot
              : stepState.stepIndex == 2
              ? whisk
              : hotMatcha
          }
        ></img>
        <span>{stepState.stepData.description}</span>
      </div>
      <div className={styles.buttons}>
        <Button
          type="submit"
          className="forwardBtn"
          disabled={forwardIsDisabled}
          onClick={clickNextHandler}
        >
          {`>`}
        </Button>
        <Button
          type="submit"
          className="backBtn"
          disabled={prevIsDisabled}
          onClick={clickPreviousHandler}
        >
          {`<`}
        </Button>
      </div>
    </div>
  );
};

export default MakeBox;
