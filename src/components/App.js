import "../components_css/App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Workouts from "../pages/Workouts";
import WorkoutView from "../pages/WorkoutView";
import Signup from "../pages/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/signup"
          element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutView />} />
      </Routes>
    </div>
  );
}

export default App;
