import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserProfile({ user }) {
  const [updateProfile, setUpdateProfile] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
    name: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string(),
    password: Yup.string(),
    name: Yup.string(),
  });

  const onSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        navigate("/");
      } else {
        <div class="alert alert-primary" role="alert">
          Request Failed
        </div>;
      }
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleDelete = () => {
    if (user === null) {
      return;
    }
    const userId = user.id;
    fetch(`/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          console.log("User deleted successfully");
        } else {
          console.error("Error deleting user");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    navigate("/");
  };

  let content;

  if (user) {
    switch (true) {
      case updateProfile:
        content = (
          <form className="centered-container" onSubmit={formik.handleSubmit}>
            <h2>Update the fields you want</h2>
            <h3>leave blank the ones you don't</h3>
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
                <div className="alert alert-danger">
                  {formik.errors.username}
                </div>
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
                <div className="alert alert-danger">
                  {formik.errors.password}
                </div>
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
        break;

      case deleteProfile:
        content = (
          <div className="centered-container">
            <h3>Are you sure you want to delete your profile?</h3>
            <div>
              <Button
                variant="secondary"
                style={{ marginRight: "1em" }}
                onClick={() => {
                  setDeleteProfile(false);
                }}
              >
                Nevermind
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Yes, I'm positive
              </Button>{" "}
            </div>
          </div>
        );
        break;

      default:
        content = (
          <div className="centered-container">
            <h1>
              Welcome, <stong>{user.name}</stong>!
            </h1>{" "}
            <h3 style={{ marginBottom: "1em" }}>
              What would you want to do today?
            </h3>
            <div>
              <Button
                variant="secondary"
                style={{ marginRight: "1em" }}
                onClick={() => setUpdateProfile(true)}
              >
                Update Profile
              </Button>
              <Button variant="danger" onClick={() => setDeleteProfile(true)}>
                Delete Profile
              </Button>{" "}
            </div>
          </div>
        );
    }
  } else {
    content = <div></div>;
  }

  return <div className="centered-container">{content}</div>;
}

export default UserProfile;
