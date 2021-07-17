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
});
