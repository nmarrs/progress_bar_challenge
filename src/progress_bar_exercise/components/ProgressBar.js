import React from "react";
import PropTypes from "prop-types";
import styled, {keyframes, css} from "styled-components";

import {generateCustomWidthKeyframe} from "../../utils";
import "./ProgressBar.scss";

const PROGRESS_ANIMATION_INCOMPLETE_HANG_WIDTH_PERCENT_VALUE = 90;
const PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_VALUE = 100;
const PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS = 15;
const PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_OFFSET = 1;

// TODO: Consider breaking this out into a separate file
const ProgressBarProgress = styled.div`
  animation: ${({
    currentProgressPercentage,
    progressAnimationBreakpoints,
    shouldProgressAnimationUseBreakpoints,
    currentElapsedTimeInSeconds,
  }) => {
    if (!shouldProgressAnimationUseBreakpoints) {
      return;
    } else if (
      currentProgressPercentage ===
      PROGRESS_ANIMATION_INCOMPLETE_HANG_WIDTH_PERCENT_VALUE
    ) {
      return css`
        ${generateCustomWidthKeyframe(
          progressAnimationBreakpoints,
        )} ${PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS}s ease-in-out
      `;
    } else if (
      currentProgressPercentage ===
      PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_VALUE
    ) {
      const sanitizedCurrentElapsedTimeInSeconds =
        currentElapsedTimeInSeconds <= PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS
          ? currentElapsedTimeInSeconds
          : PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS;

      const approximateCurrentWidthValue =
        PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_OFFSET +
        Math.ceil(
          (sanitizedCurrentElapsedTimeInSeconds /
            PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS) *
            PROGRESS_ANIMATION_INCOMPLETE_HANG_WIDTH_PERCENT_VALUE,
        );

      const completeProgressLoadAnimation = keyframes`
        0% {
          width: ${approximateCurrentWidthValue}%;
        }
        100% {
          width: 100%;
        }
      `;

      return css`
        ${completeProgressLoadAnimation} 1s
      `;
    }
  }};
`;

const ProgressBar = ({
  currentProgressPercentage,
  shouldAutoHideOnComplete,
  shouldProgressAnimationUseBreakpoints,
  progressAnimationBreakpoints,
  currentElapsedTimeInSeconds,
}) => {
  // Overall O(n lg n), filter O(n), sort O(n lg n) n = number of breakpoints
  const sanitizedProgressAnimationBreakpoints = progressAnimationBreakpoints
    .filter(
      (progressAnimationBreakpoint) =>
        progressAnimationBreakpoint > 0 &&
        progressAnimationBreakpoint <=
          PROGRESS_ANIMATION_INCOMPLETE_HANG_WIDTH_PERCENT_VALUE,
    )
    .sort();

  const progressBarTransition =
    currentProgressPercentage ===
    PROGRESS_ANIMATION_INCOMPLETE_HANG_WIDTH_PERCENT_VALUE
      ? `width ${PROGRESS_INCOMPLETE_HANG_TIME_IN_SECONDS}s`
      : currentProgressPercentage ===
        PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_VALUE
      ? "width 1s"
      : "";

  const isProgressBarNormalAnimationOverride =
    !shouldProgressAnimationUseBreakpoints ||
    sanitizedProgressAnimationBreakpoints.length < 1;

  const progressBarProgressStyle = {
    width: `${currentProgressPercentage}%`,
    ...(isProgressBarNormalAnimationOverride && {
      transition: progressBarTransition,
    }),
  };

  const isComplete =
    currentProgressPercentage >=
    PROGRESS_ANIMATION_COMPLETE_WIDTH_PERCENT_VALUE;
  const isAutoHideOnComplete = isComplete && shouldAutoHideOnComplete;

  return (
    <div data-testid="progress-bar" className="ProgressBar">
      <div
        data-testid="progress-bar-container"
        className={`progress-bar ${
          isAutoHideOnComplete && "hide-progress-bar"
        }`}>
        <ProgressBarProgress
          data-testid="progress-bar-progress"
          className="progress-bar-progress"
          style={progressBarProgressStyle}
          currentProgressPercentage={currentProgressPercentage}
          progressAnimationBreakpoints={sanitizedProgressAnimationBreakpoints}
          shouldProgressAnimationUseBreakpoints={
            shouldProgressAnimationUseBreakpoints
          }
          currentElapsedTimeInSeconds={currentElapsedTimeInSeconds}
        />
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  currentProgressPercentage: 0,
  shouldAutoHideOnComplete: true,
  shouldProgressAnimationUseBreakpoints: false,
  progressAnimationBreakpoints: [],
  currentElapsedTimeInSeconds: 0,
};

ProgressBar.propTypes = {
  currentProgressPercentage: PropTypes.number,
  shouldAutoHideOnComplete: PropTypes.bool,
  shouldProgressAnimationUseBreakpoints: PropTypes.bool,
  progressAnimationBreakpoints: PropTypes.arrayOf(PropTypes.number),
  currentElapsedTimeInSeconds: PropTypes.number,
};

export default ProgressBar;
