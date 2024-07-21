import React from "react";
import { render } from "@testing-library/react";
import Mars from "../Pages/Mars";

test("renders submit button", () => {
  const { getByText } = render(<Mars />);
  const submitButton = getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});
