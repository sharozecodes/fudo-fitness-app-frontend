import React from "react";
import { useNavigate } from "react-router-dom";

function Preferences({ user }) {
  const navigate = useNavigate();
  if (!user) {
    navigate("/login");
  }
  return user ? (
    <div> Preferences</div>
  ) : (
    <p>Please log in to see preferences</p>
  );
}

export default Preferences;
