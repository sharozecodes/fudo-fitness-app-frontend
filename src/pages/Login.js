// import React from "react";
// import LoginForm from "../components/LoginForm";
// import Button from "react-bootstrap/Button";
// import { useState } from "react";
// import SignUpForm from "../components/SignupForm";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showLogin, setShowLogin] = useState(true);
//   function onLogin(e) {
//     e.preventDefault();

//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => {
//           onLogin(user);
//           setShowLogin(true);
//         });
//       } else if (r.status === 208) {
//         // Handle status 208 here
//         // setUsernameExists(true);
//       } else {
//         // r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }
//   return (
//     <div>
//       {showLogin ? (
//         <>
//           <LoginForm onLogin={onLogin} />
//           <p style={{ marginTop: "2em" }}>
//             Don't have an account?{" "}
//             <span style={{ marginRight: "10px" }}>
//               <Button variant="secondary" onClick={() => setShowLogin(false)}>
//                 Signup
//               </Button>
//             </span>
//           </p>
//         </>
//       ) : (
//         <SignUpForm showLogin={setShowLogin} />
//       )}
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { Navigate } from "react-router";

function Login({ userLogin, setUserLogin }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("Incorrect Password");
        setSubmitting(false);
        return;
      }

      // Handle successful login here.
    } catch (error) {
      console.error("Login error:", error);
      setStatus("An error occurred during login.");
      setSubmitting(false);
    }
  };

  return (
    <div>
      {" "}
      {userLogin ? (
        <div>
          <h1 id="login-text">Please Enter Your Credentials</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form>
                {status && <p className="error-message">{status}</p>}
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <Field type="text" id="username" name="username" />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        Navigate("/")
      )}
    </div>
  );
}

export default Login;
