import "../styles/App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import NavBar from "./NavBar";
import AddProperties from "./AddProperties";
import ViewProperties from "./ViewProperties";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route path="/add-properties" element={<AddProperties />} />
          <Route path="/view-properties" element={<ViewProperties />} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
