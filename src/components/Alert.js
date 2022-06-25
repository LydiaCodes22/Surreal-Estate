import React from "react";
import "../styles/alert.css";
import PropTypes from "prop-types";

const Alert = ({ statusCode }) => {
  if (statusCode === 201) {
    return (
      <div className="success-alert">
        Success, your property has been created
      </div>
    );
  }
  if (statusCode === 404) {
    return (
      <div className="server-error-alert">
        {" "}
        Server error. Please try again later.
      </div>
    );
  }
  return <div> </div>;
};

Alert.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Alert;
