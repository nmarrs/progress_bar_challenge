import React from "react";
import PropTypes from "prop-types";

import "./ProgressBar.scss";

/*

Ran out of time to address implementing custom animation using passed in breakpoints.

If I had more time I would work on this by first figuring out if I can make my current solution
support this functionality (via CSS transitions API). Perhaps via using a useEffect or something. If not, I would then try and
look into other possible solutions, including CSS key frames and investigating / trying out third party animation libraries.

If all else failed, I would reach out to another co-worker to take a look / pair with to get unblocked.

*/

const ProgressBar = ({
  currentProgressPercentage,
  shouldAutoHideOnComplete,
  shouldProgressAnimationUseBreakpoints,
  progressAnimationBreakpoints,
}) => {
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
  shouldProgressAnimationUseBreakpoints: false,
  progressAnimationBreakpoints: [],
};

ProgressBar.propTypes = {
  currentProgressPercentage: PropTypes.number,
  shouldAutoHideOnComplete: PropTypes.bool,
  shouldProgressAnimationUseBreakpoints: PropTypes.bool,
  progressAnimationBreakpoints: PropTypes.arrayOf(PropTypes.number),
};

export default ProgressBar;
