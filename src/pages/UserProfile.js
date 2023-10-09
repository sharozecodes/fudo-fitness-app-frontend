import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  return user ? (
    <div className="centered-container">
      <h1>
        Welcome, <stong>{user.name}</stong>!
      </h1>{" "}
      <h3 style={{ marginBottom: "1em" }}>What would you want to do today?</h3>
      <div>
        <Button variant="secondary" style={{ marginRight: "1em" }}>
          Update Profile
        </Button>
        <Button variant="danger">Delete Profile</Button>{" "}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default UserProfile;
