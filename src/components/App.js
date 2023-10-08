import "../components_css/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Workouts from "../pages/Workouts";
import WorkoutView from "../pages/WorkoutView";
import Signup from "../pages/Signup";
import Recipes from "../pages/Recipes";
import RecipeView from "../pages/RecipeView";
import Preferences from "../pages/Preferences";

function App({ loggedIn, setLoggedIn, user }) {
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
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/workouts/:id" element={<WorkoutView />} />
        <Route path="/recipes/:id" element={<RecipeView />} />
        <Route path="/preferences" element={<Preferences user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
