import "../components_css/NavBar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NavBar({ loggedIn, setLoggedIn }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then(setUser);
  }, [loggedIn]);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="navbar">
      <Navbar bg="dark" data-bs-theme="dark" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Fudo - Your Fitness Guide
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/workouts">
              Workouts
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes">
              Recipes
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
