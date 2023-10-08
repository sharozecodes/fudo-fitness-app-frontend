import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  // Use localStorage to get the initial loggedIn state
  const storedLoggedIn = localStorage.getItem("loggedIn") === "true" || false;

  const [loggedIn, setLoggedIn] = useState(storedLoggedIn);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then((data) => {
        setUser(data);

        if (data.success) {
          setLoggedIn(true);
          localStorage.setItem("loggedIn", "true"); // Store the loggedIn state in localStorage
        }
      });
  }, []);

  return (
    <Router>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
      <App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
