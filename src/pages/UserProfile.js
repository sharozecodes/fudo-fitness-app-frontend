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
            <h1>Update Profile</h1>
          </div>
        );
        break;

      case deleteProfile:
        content = (
          <div>
            <h1>Delete Profile</h1>
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
              <Button
                variant="secondary"
                style={{ marginRight: "1em" }}
                onClick={() => setUpdateProfile(true)}
              >
                Update Profile
              </Button>
              <Button variant="danger" onClick={() => setDeleteProfile(true)}>
                Delete Profile
              </Button>{" "}
            </div>
          </div>
        );
    }
  } else {
    content = <div></div>;
  }

  return <div className="centered-container">{content}</div>;
}

export default UserProfile;
