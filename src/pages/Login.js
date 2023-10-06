import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div>
      <NavBar />
      <LoginForm />
      <p>
        Don't have an account? &nbsp;
        <Button color="secondary">Sign Up</Button>
      </p>
    </div>
  );
}

export default Login;
