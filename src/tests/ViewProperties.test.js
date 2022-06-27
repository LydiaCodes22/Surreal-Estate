import { render, screen } from "@testing-library/react";
import React from "react";
import ViewProperties from "../components/ViewProperties";

const validProperties = [
  {
    _id: "62b6199852cde50015266729",
    title: "10 bed castle",
    type: "big cottage",
    bedrooms: "7",
    bathrooms: "3",
    price: "1000000",
    city: "Leeds",
    email: "vee.uye@test.com",
  },
  {
    _id: "62b62b9841da260015adab2b",
    title: "test",
    city: "Sheffield",
    type: "Detached",
    bedrooms: "2",
    bathrooms: "2",
    price: "8",
    email: "test@test.com",
  },
];
describe("The view properties component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <ViewProperties properties={validProperties} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct property cards", () => {
    render(<ViewProperties properties={validProperties} />);
    expect(
      screen.getAllByRole("button", {
        name: /email/i,
      })
    ).toHaveLength(2);
    expect(screen.getByText("10 bed castle")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
