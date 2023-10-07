// import React, { useState } from "react";
// import { Button } from "react-bootstrap";

// function SignUpForm({ setShowLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");

//   const [errors, setErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [usernameExists, setUsernameExists] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     setErrors([]);
//     setIsLoading(true);
//     fetch("/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username,
//         password,
//         name,
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         r.json().then(() => {
//           setShowLogin(true);
//         });
//       } else if (r.status === 208) {
//         // Handle status 208 here
//         setUsernameExists(true);
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <div className="input-group">
//           <input
//             type={showPassword ? "text" : "password"}
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="current-password"
//           />
//           <div className="input-group-append">
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? "🐵" : "🙈"}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <br />
//       </div>
//       <div className="form-group">
//         <button type="submit" className="btn btn-primary">
//           {isLoading ? "Loading..." : "Sign Up"}
//         </button>
//       </div>
//       <div className="form-group">
//         {errors.map((err, index) => (
//           <div key={index} className="alert alert-danger">
//             {err}
//           </div>
//         ))}
//       </div>{" "}
//       {usernameExists && (
//         <div className="alert alert-danger">
//           Username already exists. Please choose a different one.
//         </div>
//       )}
//       <div className="form-group">
//         {errors.map((err) => (
//           <div key={err} className="alert alert-danger">
//             {err}
//           </div>
//         ))}
//       </div>
//     </form>
//   );
// }

// export default SignUpForm;

import React, { useState } from "react"; // Import useState
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SignUp({ loggedIn, setLoggedIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Use useNavigate correctly

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
        navigate("/"); // Correctly navigate to the login page
      } else {
        // Handle errors from the server
        const errorData = await response.json();
        if (errorData.usernameExists) {
          setFieldError("username", "Username already exists");
        } else {
          // Handle other server errors
        }
      }
    } catch (error) {
      // Handle network or other errors
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
        />
        {formik.touched.username && formik.errors.username && (
          <div className="alert alert-danger">{formik.errors.username}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="input-group">
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
        >
          {formik.isSubmitting ? "Loading..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default SignUp;
