import React from "react";
import { render } from "@testing-library/react";
import Home from "../Pages/Home";

describe("Home Component", () => {
  it("renders home page text", () => {
    const { getByText } = render(<Home />);
    const homeText = getByText("Home");
    expect(homeText).toBeInTheDocument();
  });

  // You can add more integration tests here to test other behaviors or interactions
});
