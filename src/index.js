import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter and Routes

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <App loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
