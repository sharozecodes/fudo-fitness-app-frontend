import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function UserProfile({ user }) {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);

  const navigate = useNavigate();

  const handleDelete = () => {
    if (user === null) {
      return;
    }
    const userId = user.id;
    fetch(`/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          console.log("User deleted successfully");
        } else {
          console.error("Error deleting user");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    navigate("/");
  };

  let content;

  if (user) {
    switch (true) {
      case updateProfile:
        content = (
          <div className="centered-container">
            <h1>
              {"🧑‍🏭"} Feature under development {"🧑‍🏭"}{" "}
            </h1>
            <h3>check back in tomorrow for an update</h3>
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
