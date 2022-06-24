import { render, screen } from "@testing-library/react";
import React from "react";
import AddProperties from "../components/AddProperties";

describe("the add properties component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<AddProperties />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should render basic fields", () => {
    render(<AddProperties />);
    expect(screen.getByRole("heading", { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /title/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /type/i })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /bedrooms/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /bathrooms/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /price/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /city/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
  });
});
