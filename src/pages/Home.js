import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home({ user }) {
  return (
    <div className="centered-container">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png"
        alt="Logo"
        className="home-logo"
      />
      <h1 className="app-title">FUDO</h1>
      <p style={{ fontSize: "2rem" }}> Your Fitness Guide</p>
      <div>
        {!user || user.error ? (
          <>
            <Link to="/login">
              <Button style={{ marginRight: "2em" }}>Log in</Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </>
        ) : (
          <>
            exclusively for <strong>{user.name}</strong>!
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
