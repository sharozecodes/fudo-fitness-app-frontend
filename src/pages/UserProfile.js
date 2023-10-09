import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);

  let content;

  if (user) {
    switch (true) {
      case updateProfile:
        content = (
          <div>
            {/* Render content for updateProfile state */}
            <h1>Update Profile</h1>
            {/* Add your updateProfile content here */}
          </div>
        );
        break;

      case deleteProfile:
        content = (
          <div>
            {/* Render content for deleteProfile state */}
            <h1>Delete Profile</h1>
            {/* Add your deleteProfile content here */}
          </div>
        );
        break;

      default:
        content = (
          <div className="centered-container">
            <h1>
              Welcome, <stong>{user.name}</stong>!
            </h1>{" "}
            <h3 style={{ marginBottom: "1em" }}>
              What would you want to do today?
            </h3>
            <div>
              <Button variant="secondary" style={{ marginRight: "1em" }}>
                Update Profile
              </Button>
              <Button variant="danger">Delete Profile</Button>{" "}
            </div>
          </div>
        );
    }
  } else {
    content = <div></div>;
  }

  return <div>{content}</div>;
}

export default UserProfile;
