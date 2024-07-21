import React from "react";
import { render } from "@testing-library/react";
import Card1 from "../Components/Card1";

test("renders Card1 component", () => {
  const { getByText } = render(<Card1 />);
  const loadingText = getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});
