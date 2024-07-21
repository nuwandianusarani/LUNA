import React from "react";
import { render } from "@testing-library/react";
import Earth from "../Pages/Earth";

test("renders submit button", () => {
  const { getByText } = render(<Earth />);
  const submitButton = getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});
