import React from "react";
import { render } from "@testing-library/react";
import Hero from "../Components/CardFirst";

test("renders 'LEARN MORE' button", () => {
  const { getByText } = render(<Hero />);
  const learnMoreButton = getByText("LEARN MORE");
  expect(learnMoreButton).toBeInTheDocument();
});
