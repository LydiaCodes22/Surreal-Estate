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
    expect(screen.getByPlaceholderText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/bedrooms/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/bathrooms/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/location/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});
