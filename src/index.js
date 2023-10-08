import "./index.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/check_session")
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        if (data.success) {
          setLoggedIn(true);
        }
      });
  }, [loggedIn]);

  return (
    <Router>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
