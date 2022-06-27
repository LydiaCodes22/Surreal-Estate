import { render, screen } from "@testing-library/react";
import React from "react";
import PropertyCard from "../components/PropertyCard";

const validProperty = {
  _id: "62b6199852cde50015266729",
  title: "10 bed castle",
  type: "big cottage",
  bedrooms: "7",
  bathrooms: "3",
  price: "1000000",
  city: "Leeds",
  email: "test@test.com",
};

describe("The property cards", () => {
  it("renders the correct information about the property", () => {
    render(
      <PropertyCard
        key={validProperty._id}
        title={validProperty.title}
        type={validProperty.type}
        bathrooms={validProperty.bathrooms}
        bedrooms={validProperty.bedrooms}
        price={validProperty.price}
        city={validProperty.city}
        email={validProperty.email}
      />
    );
    expect(screen.getByText("10 bed castle")).toBeInTheDocument();
    expect(screen.getByText("big cottage")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("1000000")).toBeInTheDocument();
    expect(screen.getByText("Leeds")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText(/email/i).closest("a")).toHaveAttribute(
      "href",
      "mailto:test@test.com"
    );
  });
});
