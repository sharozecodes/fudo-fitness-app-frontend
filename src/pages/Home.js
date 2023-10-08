import React from "react";

function Home() {
  return (
    <div className="centered-container">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_1280.png"
        alt="Logo"
        className="home-logo"
      />
      <h1 className="app-title">FUDO</h1>
      <p style={{ fontSize: "2rem" }}> Your Fitness Guide</p>
    </div>
  );
}

export default Home;
