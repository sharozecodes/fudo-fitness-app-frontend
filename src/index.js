import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} />
      <App isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
