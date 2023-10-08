import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

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
    console.log("Form values submitted by the user:", values);
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        if (response.status === 208) {
          setStatus("Username already taken");
        } else {
          setStatus("Incorrect Password");
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
            {status && <p className="error-message">{status}</p>}
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
