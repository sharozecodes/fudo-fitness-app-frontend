import "../components_css/NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const username = "John Doe"; // Replace with the actual username if logged in

  const handleLogout = () => {
    setIsLoggedIn(false);
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
          </Nav>
          <div>
            {isLoggedIn ? (
              <div className="user-info">
                <span className="user-name-with-space">👤: {username}</span>
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
