import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter and Routes

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NavBar />
    <App />
  </Router>
);
