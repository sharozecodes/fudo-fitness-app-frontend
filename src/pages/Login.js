import React from "react";
import LoginForm from "../components/LoginForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";

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
        <>SIGN UP PLEASE!!!</>
      )}
    </div>
  );
}

export default Login;
