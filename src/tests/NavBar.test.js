import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

describe("the NavBar", () => {
  it("renders correctly", () => {
    render(<NavBar />);
    const navBarElement = screen.getByText(/view properties/i);
    expect(navBarElement).toBeInTheDocument();
  });
});
