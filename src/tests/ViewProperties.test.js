import { render } from "@testing-library/react";
import React from "react";
import ViewProperties from "../components/ViewProperties";

describe("The view properties component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<ViewProperties />);

    expect(asFragment()).toMatchSnapshot();
  });
});
