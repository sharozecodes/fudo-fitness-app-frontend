import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import Workouts from "./pages/Workouts";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/workouts" element={<Workouts />} />
    </Routes>
  </Router>
);
