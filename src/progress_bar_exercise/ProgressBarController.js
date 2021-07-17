import React from "react";

import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import "./ProgressBarController.scss";

const ProgressBarController = () => {
  return (
    <div
      className="ProgressBarController"
      data-testid="progress-bar-controller">
      <div className="progress-bar-layout-container">
        <ProgressBar />
        <div className="progress-bar-button-container">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProgressBarController;
