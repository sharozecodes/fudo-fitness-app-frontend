import React from "react";
import { useNavigate } from "react-router-dom";

function Preferences({ loggedIn }) {
  const navigate = useNavigate();
  if (!loggedIn) {
    navigate("/login");
  }
  return loggedIn ? (
    <div> Preferences</div>
  ) : (
    <p>Please log in to see preferences</p>
  );
}

export default Preferences;
