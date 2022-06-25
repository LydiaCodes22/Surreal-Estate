/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import "../styles/AddProperties.css";
import Alert from "./Alert";

const AddProperties = () => {
  const [statusCode, setStatusCode] = useState(0);
  const initialState = {
    fields: {
      title: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      city: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    axios
      .post("https://surreal-api.herokuapp.com/api/v1/propertylisting", fields)
      .then((response) => {
        setStatusCode(response.status);
      })
      .catch(() => {
        setStatusCode(404);
      });
    setFields(initialState.fields);
  };
  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Add Properties</h1>
      {!!statusCode && <Alert statusCode={statusCode} />}
      <form className="add-properties" onSubmit={handleAddProperty}>
        <label htmlFor="title" className="form-label">
          Property title
        </label>
        <input
          className="form-input"
          required
          type="text"
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
          placeholder="Property title"
        />

        <label htmlFor="type" className="form-label">
          Property type
        </label>
        <select
          className="form-input"
          id="type"
          name="type"
          value={fields.type}
          onChange={handleFieldChange}
        >
          <option value="detached">Detached</option>
          <option value="semi-detached">Semi-detached</option>
          <option value="terrace">terrace</option>
          <option value="end of terrace">End of terrace</option>
          <option value="cottage">Cottage</option>
          <option value="bungalow">Bungalow</option>
        </select>

        <label htmlFor="bedrooms" className="form-label">
          Bedrooms
        </label>
        <input
          className="form-input"
          required
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={fields.bedrooms}
          onChange={handleFieldChange}
          placeholder="Number of bedrooms"
        />

        <label htmlFor="bathrooms" className="form-label">
          Bathrooms
        </label>
        <input
          className="form-input"
          required
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={fields.bathrooms}
          onChange={handleFieldChange}
          placeholder="Number of bathrooms"
        />

        <label htmlFor="price" className="form-label">
          £
        </label>
        <input
          className="form-input"
          type="number"
          id="price"
          name="price"
          min="0.01"
          step="0.01"
          value={fields.price}
          onChange={handleFieldChange}
          placeholder="Price"
        />

        <label htmlFor="city" className="form-label">
          Location:
        </label>
        <select
          className="form-input"
          id="city"
          name="city"
          value={fields.city}
          onChange={handleFieldChange}
        >
          <option value="Manchester">Manchester</option>
          <option value="Leeds">Leeds</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Liverpool">Liverpool</option>
        </select>

        <label htmlFor="email" className="form-label">
          Email{" "}
        </label>
        <input
          className="form-input"
          required
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          placeholder="Contact email"
        />

        <button className="form-input" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperties;
