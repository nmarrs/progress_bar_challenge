import React from "react";
import {render} from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders Button correctly", () => {
    const {queryByTestId} = render(<Button title="Test Button" />);

    expect(queryByTestId("button-container")).not.toEqual(null);
  });

  it("adds correct button type class", () => {
    const {getByTestId} = render(
      <Button title="Test Button" buttonType="finish-button" />,
    );

    const button = getByTestId("button");

    expect(button).not.toHaveClass("start-button");
    expect(button).toHaveClass("finish-button");
  });
});
