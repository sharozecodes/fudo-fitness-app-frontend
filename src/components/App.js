import "../components_css/App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Workouts from "../pages/Workouts";
import WorkoutView from "../pages/WorkoutView";
import Signup from "../pages/Signup";

function App({ loggedIn, setLoggedIn }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then(setUser);
  }, [loggedIn]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workouts/:id" element={<WorkoutView />} />
      </Routes>
    </div>
  );
}

export default App;
