import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";

function Login({ loggedIn, setLoggedIn }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setStatus("Invalid username/password");
        } else {
          setStatus("something went wrong");
        }
        setSubmitting(false);
      } else {
        setLoggedIn(true);
        navigate("/workouts");
      }
    } catch (error) {
      console.error("Login error:", error);
      setStatus("An error occurred during login.");
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1 id="login-text">Please Enter Your Credentials</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            {status && <p className="error-message red-text">{status}</p>}
            <div>
              <label htmlFor="username">Username:</label>
              <Field
                className="form-group"
                type="text"
                id="username"
                name="username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div style={{ marginTop: "10px" }}>
              <label htmlFor="password">Password: </label>
              <Field
                className="form-group"
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>
      <div style={{ marginTop: "2rem" }}>
        Not a user?{" "}
        <Link to="/signup">
          <Button variant="secondary">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
