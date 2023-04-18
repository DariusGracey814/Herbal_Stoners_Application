import React from "react";

import classes from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}></div>
    </div>
  );
}

export function LoadingSpinner2() {
  return <div className={`${classes.spinner} ${classes.spinner2}`}></div>;
}

export function LoadingSpinner3() {
  return <div className={`${classes.spinner} ${classes.spinner3}`}></div>;
}

export default LoadingSpinner;
