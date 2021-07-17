import React from "react";
import {render} from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders Button correctly", () => {
    const {queryByTestId} = render(<Button />);

    expect(queryByTestId("button-container")).not.toEqual(null);
  });
});
