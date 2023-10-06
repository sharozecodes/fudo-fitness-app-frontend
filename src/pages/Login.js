import React from "react";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import SignUp from "./SignUp";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      <NavBar />
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
        // <>
        //   <SignUpForm onLogin={onLogin} />
        //   <Divider />
        //   <p>
        //     Already have an account? &nbsp;
        //     <Button color="secondary" onClick={() => setShowLogin(true)}>
        //       Log In
        //     </Button>
        //   </p>
        // </>
        <SignUp />
      )}
    </div>
  );
}

export default Login;
