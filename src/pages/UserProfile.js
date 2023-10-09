import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);

  const handleDelete = () => {
    if (user === null) {
      return;
    }
    // Replace 'userId' with the actual user ID or pass it as a prop to UserProfile component
    const userId = user.id; // Change this to get the user's ID

    // Send a DELETE request to the server to delete the user
    fetch(`/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          // User deleted successfully, you can perform any necessary actions here
          console.log("User deleted successfully");
        } else {
          // Handle the error or provide user feedback
          console.error("Error deleting user");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

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
          <div className="centered-container">
            <h3>Are you sure you want to delete your profile?</h3>
            <div>
              <Button
                variant="secondary"
                style={{ marginRight: "1em" }}
                onClick={() => {
                  setDeleteProfile(false);
                }}
              >
                Nevermind
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Yes, I'm positive
              </Button>{" "}
            </div>
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
