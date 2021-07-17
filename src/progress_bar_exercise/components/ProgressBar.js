import React from "react";
import PropTypes from "prop-types";

import "./ProgressBar.scss";

const ProgressBar = ({currentProgressPercentage}) => {
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

  return (
    <div data-testid="progress-bar" className="ProgressBar">
      <div className="progress-bar">
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
};

ProgressBar.propTypes = {
  currentProgressPercentage: PropTypes.number,
};

export default ProgressBar;
