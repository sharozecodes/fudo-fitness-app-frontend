import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  const storedUser = localStorage.getItem("user");

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then((data) => {
        setUser(data);

        if (data.success) {
          setLoggedIn(true);
          localStorage.setItem("loggedIn", "true");
        }
      });
  }, [loggedIn]);

  return (
    <Router>
      <NavBar setUser={setUser} user={user} />
      <App loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
