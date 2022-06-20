import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// import userEvent from "@testing-library/user-event";
// import { createMemoryHistory } from "history";
import NavBar from "../components/NavBar";

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

  // it("has links to the right parts of the app", () => {
  //   const history = createMemoryHistory();
  //   render(
  //     <Router history={history}>
  //       <NavBar />
  //     </Router>
  //   );
  //   expect(history.location.pathname).toEqual("/");
  //   userEvent.click(screen.getByText(/view properties/i));
  //   expect(history.location.pathname).toEqual("/view-properties");
  //   userEvent.click(screen.getByText(/add a property/i));
  //   expect(history.location.pathname).toEqual("/add-properties");
  //   userEvent.click(screen.getByAltText(/Surreal Estate Logo/i));
  //   expect(history.location.pathname).toEqual("/");
  // });
});
