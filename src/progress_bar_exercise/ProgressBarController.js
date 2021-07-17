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

  const [
    shouldProgressAnimationUseBreakpoints,
    setShouldProgressAnimationUseBreakpoints,
  ] = useState(false);
  const onCheckBoxChange = () => {
    setShouldProgressAnimationUseBreakpoints(
      !shouldProgressAnimationUseBreakpoints,
    );
  };

  const startRequestButtonTitle = isRequestLoading
    ? "LOADING..."
    : "START REQUEST";
  const isStartRequestButtonDisabled = isRequestLoading;
  const isFinishRequestButtonDisabled = !isRequestLoading;

  // TODO: Address checkbox graphical glitch moving up / down when hovering / clicking on buttons
  return (
    <div
      className="ProgressBarController"
      data-testid="progress-bar-controller">
      <div className="progress-bar-layout-container">
        <ProgressBar
          currentProgressPercentage={currentProgressPercentage}
          shouldProgressAnimationUseBreakpoints={
            shouldProgressAnimationUseBreakpoints
          }
        />
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
        <div className="progress-bar-options-container">
          <input
            type="checkbox"
            id="progressBarBreakpointsEnabled"
            name="progressBarBreakpointsEnabled"
            value={shouldProgressAnimationUseBreakpoints}
            onChange={onCheckBoxChange}
          />
          <label htmlFor="progressBarBreakpointsEnabled">
            Should Progress Bar Load With Breakpoints?
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarController;
