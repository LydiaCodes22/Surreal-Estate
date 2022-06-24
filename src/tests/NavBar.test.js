import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";
import App from "../components/App";

describe("the NavBar", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the elements correctly", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const viewPropertiesElement = screen.getByText(/view properties/i);
    const addPropertiesElement = screen.getByText(/add a property/i);
    const logoImage = screen.getByAltText(/Surreal Estate Logo/i);
    expect(viewPropertiesElement).toBeInTheDocument();
    expect(addPropertiesElement).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });

  it("has links to the right parts of the app", () => {
    render(<App />);
    fireEvent.click(screen.getByText(/view properties/i));
    expect(
      screen.getByRole("heading", {
        name: /Properties/i,
      })
    ).toBeVisible();

    fireEvent.click(screen.getByText(/add a property/i));
    expect(
      screen.getByRole("heading", {
        name: /add/i,
      })
    ).toBeVisible();

    fireEvent.click(screen.getByAltText(/Surreal Estate Logo/i));
    expect(
      screen.getByRole("heading", {
        name: /home/i,
      })
    ).toBeVisible();
  });
});
