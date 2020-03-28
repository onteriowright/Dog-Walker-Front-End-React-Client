import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import DogWalker from "./DogWalker";
import "./index.css";

ReactDOM.render(
  <Router>
    <DogWalker />
  </Router>,
  document.getElementById("root")
);
