import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div>
      <NavBar />
      <LoginForm />
      <p style={{ marginTop: "2em" }}>
        Don't have an account?{" "}
        <span style={{ marginRight: "10px" }}>
          <Button variant="secondary">Signup</Button>
        </span>
      </p>
    </div>
  );
}

export default Login;
