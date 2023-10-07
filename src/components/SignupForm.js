import React, { useState } from "react";
import { Button } from "react-bootstrap";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
        date_of_birth: dateOfBirth,
        weight,
        height,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          className="form-control"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setdateOfBirth(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (lbs)</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={weight}
          onChange={(e) => {
            if (parseInt(e.target.value) > 500) {
              e.target.value = "500";
            }
            setweight(e.target.value);
          }}
          min="1"
          max="500"
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height (cm)</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={height}
          onChange={(e) => {
            if (parseInt(e.target.value) > 300) {
              e.target.value = "300";
            }
            setheight(e.target.value);
          }}
          min="1"
          max="300"
        />
      </div>
      <div className="form-group">
        <br />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
      </div>
      <div className="form-group">
        {errors.map((err, index) => (
          <div key={index} className="alert alert-danger">
            {err}
          </div>
        ))}
      </div>{" "}
    </form>
  );
}

export default SignUpForm;
