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
});
