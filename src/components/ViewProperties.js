import React from "react";
import PropTypes from "prop-types";
import PropertyCard from "./PropertyCard";
import "../styles/view-properties.css";

const ViewProperties = ({ properties }) => {
  return (
    <>
      <h1>Properties</h1>
      <div className="view-properties">
        {properties.map(
          (property) =>
            property.type &&
            property.bathrooms &&
            property.bedrooms &&
            property.price &&
            property.city &&
            property.email && (
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                bathrooms={property.bathrooms}
                bedrooms={property.bedrooms}
                price={property.price}
                city={property.city}
                email={property.email}
              />
            )
        )}
      </div>
    </>
  );
};

ViewProperties.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ViewProperties;
