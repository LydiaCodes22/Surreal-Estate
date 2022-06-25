import { render, screen } from "@testing-library/react";
import React from "react";
import Alert from "../components/Alert";

describe("Alert", () => {
  const validStatus = 201;
  const badStatus = 404;
  it("matches the snapshot", () => {
    const { asFragment } = render(<Alert statusCode="" />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders a success message when the user creates a property", () => {
    render(<Alert statusCode={validStatus} />);
    expect(screen.getByText(/success/i)).toBeInTheDocument();
  });
  it("renders an error message when the user creates a property", () => {
    render(<Alert statusCode={badStatus} />);
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
