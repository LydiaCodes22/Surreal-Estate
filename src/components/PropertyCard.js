import React from "react";
import "../styles/PropertyCard.css";
import PropTypes from "prop-types";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <div>{title}</div>
      <div>{type}</div>
      <div>{bathrooms}</div>
      <div>{bedrooms}</div>
      <div>{price}</div>
      <div>{city}</div>
      <div>{email}</div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
