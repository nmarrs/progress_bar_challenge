import React from "react";
import {render} from "@testing-library/react";

import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders ProgressBar correctly", () => {
    const {queryByTestId} = render(<ProgressBar />);

    expect(queryByTestId("progress-bar")).not.toEqual(null);
  });
});
