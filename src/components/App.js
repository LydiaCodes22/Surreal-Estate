import "../styles/App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import AddProperties from "./AddProperties";
import ViewProperties from "./ViewProperties";

const App = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios
      .get("https://surreal-api.herokuapp.com/api/v1/propertylisting")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [properties]);
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route path="/add-properties" element={<AddProperties />} />
          <Route
            path="/view-properties"
            element={<ViewProperties properties={properties} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
