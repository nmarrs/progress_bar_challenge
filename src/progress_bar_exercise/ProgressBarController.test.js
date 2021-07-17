import React from "react";
import {render} from "@testing-library/react";

import ProgressBarController from "./ProgressBarController";

describe("ProgressBarController", () => {
  it("renders ProgressBarController correctly", () => {
    const {queryByTestId} = render(<ProgressBarController />);

    expect(queryByTestId("progress-bar-controller")).not.toEqual(null);
  });
});
