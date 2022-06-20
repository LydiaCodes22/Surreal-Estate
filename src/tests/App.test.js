import { render } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("App", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});