import React, {useState} from "react";

import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import "./ProgressBarController.scss";

const ProgressBarController = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [currentProgressPercentage, setCurrentProgressPercentage] = useState(0);

  const startRequest = () => {
    setIsRequestLoading(true);

    setCurrentProgressPercentage(90);
  };

  const finishRequest = () => {
    setCurrentProgressPercentage(100);

    setIsRequestLoading(false);
  };

  const startRequestButtonTitle = isRequestLoading
    ? "LOADING..."
    : "START REQUEST";
  const isStartRequestButtonDisabled = isRequestLoading;
  const isFinishRequestButtonDisabled = !isRequestLoading;

  return (
    <div
      className="ProgressBarController"
      data-testid="progress-bar-controller">
      <div className="progress-bar-layout-container">
        <ProgressBar currentProgressPercentage={currentProgressPercentage} />
        <div className="progress-bar-button-container">
          <Button
            data-testid="start-request-button"
            title={startRequestButtonTitle}
            buttonType="start-button"
            isDisabled={isStartRequestButtonDisabled}
            onClick={startRequest}
          />
          <Button
            title="FINISH REQUEST"
            buttonType="finish-button"
            isDisabled={isFinishRequestButtonDisabled}
            onClick={finishRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBarController;
