import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SignUp({ loggedIn, setLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    name: Yup.string().required("Name is required"),
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setLoggedIn(true);
        navigate("/");
      } else {
        const errorData = await response.json();
        if (errorData.usernameExists) {
          setFieldError("username", "Username already exists");
        } else {
        }
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          autoComplete="off"
          {...formik.getFieldProps("username")}
          style={{ width: "30rem" }}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="alert alert-danger">{formik.errors.username}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="input-group" style={{ width: "30rem" }}>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            {...formik.getFieldProps("password")}
            autoComplete="current-password"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🐵" : "🙈"}
            </button>
          </div>
        </div>
        {formik.touched.password && formik.errors.password && (
          <div className="alert alert-danger">{formik.errors.password}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          style={{ width: "30rem" }}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="alert alert-danger">{formik.errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting}
          style={{ marginTop: "1rem" }}
        >
          {formik.isSubmitting ? "Loading..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default SignUp;
