import React, {useState} from "react";

import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import "./ProgressBarController.scss";

const ProgressBarController = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [currentProgressPercentage, setCurrentProgressPercentage] = useState(0);
  const [currentElapsedTimeInSeconds, setCurrentElapsedTimeInSeconds] =
    useState(0);

  const startRequest = () => {
    setIsRequestLoading(true);

    setCurrentProgressPercentage(90);

    setCurrentElapsedTimeInSeconds(performance.now() / 1000);
  };

  const finishRequest = () => {
    setCurrentProgressPercentage(100);

    setIsRequestLoading(false);

    setCurrentElapsedTimeInSeconds(
      performance.now() / 1000 - currentElapsedTimeInSeconds,
    );
  };

  const [
    shouldProgressAnimationUseBreakpoints,
    setShouldProgressAnimationUseBreakpoints,
  ] = useState(true);
  const onCheckBoxUseBreakpointsChange = () => {
    setShouldProgressAnimationUseBreakpoints(
      !shouldProgressAnimationUseBreakpoints,
    );
  };

  const [shouldProgressAnimationAutoHide, setShouldProgressAnimationAutoHide] =
    useState(true);
  const onCheckBoxAutoHideChange = () => {
    setShouldProgressAnimationAutoHide(!shouldProgressAnimationAutoHide);
  };

  const startRequestButtonTitle = isRequestLoading
    ? "LOADING..."
    : "START REQUEST";
  const isStartRequestButtonDisabled = isRequestLoading;
  const isFinishRequestButtonDisabled = !isRequestLoading;

  // TODO: Consider adding form to customize breakpoints passed to ProgressBar component
  return (
    <div
      className="ProgressBarController"
      data-testid="progress-bar-controller">
      <div className="progress-bar-layout-container">
        <ProgressBar
          currentProgressPercentage={currentProgressPercentage}
          shouldAutoHideOnComplete={shouldProgressAnimationAutoHide}
          shouldProgressAnimationUseBreakpoints={
            shouldProgressAnimationUseBreakpoints
          }
          progressAnimationBreakpoints={[30, 60, 90, 95, 20, 10]}
          currentElapsedTimeInSeconds={currentElapsedTimeInSeconds}
        />
        <div className="progress-bar-options-container">
          <h2>Progress Bar Options</h2>
          <label htmlFor="progressBarBreakpointsEnabled">
            <input
              type="checkbox"
              id="progressBarBreakpointsEnabled"
              name="progressBarBreakpointsEnabled"
              value={shouldProgressAnimationUseBreakpoints}
              checked={shouldProgressAnimationUseBreakpoints}
              onChange={onCheckBoxUseBreakpointsChange}
            />
            Load With Breakpoints
          </label>
          <label htmlFor="progressBarAutoHideEnabled">
            <input
              type="checkbox"
              id="progressBarAutoHideEnabled"
              name="progressBarAutoHideEnabled"
              value={shouldProgressAnimationAutoHide}
              checked={shouldProgressAnimationAutoHide}
              onChange={onCheckBoxAutoHideChange}
            />
            Auto Hide On Complete
          </label>
        </div>
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
