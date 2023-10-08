import React from "react";
import { useNavigate } from "react-router-dom";

function Preferences({ user }) {
  const navigate = useNavigate();

  return !user || user.error ? (
    <div>
      {navigate("/login")}
      <p>Please log in to see preferences</p>
    </div>
  ) : (
    <div>Preferences</div>
  );
}

export default Preferences;
