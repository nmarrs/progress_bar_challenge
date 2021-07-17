import React from "react";
import {render, fireEvent} from "@testing-library/react";

import ProgressBarController from "./ProgressBarController";

describe("ProgressBarController", () => {
  it("renders ProgressBarController correctly", () => {
    const {queryByTestId} = render(<ProgressBarController />);

    expect(queryByTestId("progress-bar-controller")).not.toEqual(null);
  });

  it("displays loading text when user clicks start request", () => {
    const {getByText, queryByText} = render(<ProgressBarController />);

    const startRequestButton = getByText(/start request/i);
    expect(queryByText(/start request/i)).toBeInTheDocument();

    fireEvent.click(startRequestButton);

    expect(queryByText(/start request/i)).not.toBeInTheDocument();
    expect(queryByText(/loading.../i)).toBeInTheDocument();
  });

  it("reset from loading text back to start request when user clicks finish request", () => {
    const {getByText, queryByText} = render(<ProgressBarController />);

    const startRequestButton = getByText(/start request/i);
    const finishRequestButton = getByText(/finish request/i);
    expect(queryByText(/start request/i)).toBeInTheDocument();

    fireEvent.click(startRequestButton);

    expect(queryByText(/start request/i)).not.toBeInTheDocument();
    expect(queryByText(/loading.../i)).toBeInTheDocument();

    fireEvent.click(finishRequestButton);

    expect(queryByText(/start request/i)).toBeInTheDocument();
    expect(queryByText(/loading.../i)).not.toBeInTheDocument();
  });
});
