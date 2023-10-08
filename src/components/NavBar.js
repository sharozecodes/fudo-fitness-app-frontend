import "../components_css/NavBar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function NavBar({ loggedIn, setLoggedIn, user }) {
  const handleLogout = () => {
    setLoggedIn(false);
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => {
        console.log("session successfully cleared");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };

  return (
    <div className="navbar">
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <Image
              src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png"
              alt="Logo"
              className="navbar-logo"
            />
            <div className="d-flex flex-column align-items-center brand-text">
              FUDO
            </div>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workouts">
              Workouts
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/preferences">
              Preferences
            </Nav.Link>
          </Nav>
          <div>
            {loggedIn ? (
              <div className="user-info">
                <span className="user-name-with-space">👤: {user.name}</span>
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login" className="ml-auto">
                <Button variant="primary" onClick={handleLogout}>
                  Login
                </Button>
              </Nav.Link>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
