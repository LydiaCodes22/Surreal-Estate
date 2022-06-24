import { render } from "@testing-library/react";
import React from "react";
import AddProperties from "../components/AddProperties";

describe("the add properties component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<AddProperties />);

    expect(asFragment()).toMatchSnapshot();
  });
});
