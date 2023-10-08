import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router v6

function Login({ loggedIn, setLoggedIn }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const navigate = useNavigate(); // Get the navigate function from React Router

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
      setLoggedIn(true);
      navigate("/"); // Navigate to the home page after successful login
    } catch (error) {
      console.error("Login error:", error);
      setStatus("An error occurred during login.");
      setSubmitting(false);
    }
  };

  return (
    <div>
      {" "}
      {loggedIn ? (
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
        navigate("/") // Navigate to the home page if not logged in
      )}
    </div>
  );
}

export default Login;
