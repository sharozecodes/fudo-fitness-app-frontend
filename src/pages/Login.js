import React from "react";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import SignUpForm from "../components/SignupForm";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);
  function onLogin(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          setShowLogin(true);
        });
      } else if (r.status === 208) {
        // Handle status 208 here
        // setUsernameExists(true);
      } else {
        // r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p style={{ marginTop: "2em" }}>
            Don't have an account?{" "}
            <span style={{ marginRight: "10px" }}>
              <Button variant="secondary" onClick={() => setShowLogin(false)}>
                Signup
              </Button>
            </span>
          </p>
        </>
      ) : (
        <SignUpForm showLogin={setShowLogin} />
      )}
    </div>
  );
}

export default Login;
