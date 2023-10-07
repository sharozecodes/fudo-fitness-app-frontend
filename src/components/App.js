import "../components_css/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Workouts from "../pages/Workouts";
import WorkoutView from "../pages/WorkoutView";
import Signup from "../pages/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
      <Routes>
        <Route path="/workouts/:id" element={<WorkoutView />} />
      </Routes>
    </div>
  );
}

export default App;
