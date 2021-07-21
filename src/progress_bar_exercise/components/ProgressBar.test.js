import React from "react";
import {render} from "@testing-library/react";

import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders ProgressBar correctly", () => {
    const {queryByTestId} = render(<ProgressBar />);

    expect(queryByTestId("progress-bar")).not.toEqual(null);
  });

  it("renders progress bar progress width correctly", () => {
    const {getByTestId} = render(
      <ProgressBar currentProgressPercentage={50} />,
    );

    const progressBarProgress = getByTestId("progress-bar-progress");

    expect(progressBarProgress).toHaveStyle("width: 50%");
  });

  it("adds quick transition when progress percentage is 100", () => {
    const {getByTestId} = render(
      <ProgressBar currentProgressPercentage={100} />,
    );

    const progressBarProgress = getByTestId("progress-bar-progress");

    expect(progressBarProgress).toHaveStyle("transition: width 1s");
  });

  it("hides progress bar when progress percentage is 100", () => {
    const {getByTestId} = render(
      <ProgressBar currentProgressPercentage={100} />,
    );

    const progressBarContainer = getByTestId("progress-bar-container");

    expect(progressBarContainer).toHaveClass("hide-progress-bar");
  });

  it("adds quick animation when progress percentage is 100 with breakpoints enabled", () => {
    const {getByTestId} = render(
      <ProgressBar
        currentProgressPercentage={100}
        shouldProgressAnimationUseBreakpoints={true}
        progressAnimationBreakpoints={[45, 90]}
      />,
    );
    // TODO: Figure out better way of checking this as not clear whether or not custom
    // keyframe hash will change over time or not (don't want tests to fail randomly / unexpectedly)
    const keyframeAnimationKey = "iwFgKE";

    const progressBarProgress = getByTestId("progress-bar-progress");

    expect(progressBarProgress).not.toHaveStyle("transition: width 1s");
    expect(progressBarProgress).toHaveStyle(
      `animation: ${keyframeAnimationKey} 1s`,
    );
  });

  it("adds keyframe animation when progress percentage is 90 with breakpoints enabled", () => {
    const {getByTestId} = render(
      <ProgressBar
        currentProgressPercentage={90}
        shouldProgressAnimationUseBreakpoints={true}
        progressAnimationBreakpoints={[45, 90]}
      />,
    );
    // TODO: Figure out better way of checking this as not clear whether or not custom
    // keyframe hash will change over time or not (don't want tests to fail randomly / unexpectedly)
    const keyframeAnimationKey = "dVrRbG";

    const progressBarProgress = getByTestId("progress-bar-progress");

    expect(progressBarProgress).not.toHaveStyle("transition: width 15s");
    expect(progressBarProgress).toHaveStyle(
      `animation: ${keyframeAnimationKey} 15s ease-in-out`,
    );
  });
});
