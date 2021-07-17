import React from "react";
import PropTypes from "prop-types";

import "./ProgressBar.scss";

const ProgressBar = ({currentProgressPercentage, shouldAutoHideOnComplete}) => {
  const progressBarTransition =
    currentProgressPercentage === 90
      ? "width 15s"
      : currentProgressPercentage === 100
      ? "width 1s"
      : "";
  const progressBarProgressStyle = {
    width: `${currentProgressPercentage}%`,
    transition: progressBarTransition,
  };

  const isComplete = currentProgressPercentage >= 100;
  const isAutoHideOnComplete = isComplete && shouldAutoHideOnComplete;

  return (
    <div data-testid="progress-bar" className="ProgressBar">
      <div
        data-testid="progress-bar-container"
        className={`progress-bar ${
          isAutoHideOnComplete && "hide-progress-bar"
        }`}>
        <div
          data-testid="progress-bar-progress"
          className="progress-bar-progress"
          style={progressBarProgressStyle}></div>
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  currentProgressPercentage: 0,
  shouldAutoHideOnComplete: true,
};

ProgressBar.propTypes = {
  currentProgressPercentage: PropTypes.number,
  shouldAutoHideOnComplete: PropTypes.bool,
};

export default ProgressBar;
