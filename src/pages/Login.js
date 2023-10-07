import React from "react";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import SignUpForm from "../components/SignupForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
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
        <SignUpForm />
      )}
    </div>
  );
}

export default Login;
