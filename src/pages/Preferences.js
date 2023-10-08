import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Preferences({ user }) {
  const navigate = useNavigate();

  const workoutCard = (
    <Link
      style={{
        textDecoration: "none",
        textAlign: "center",
        flexGrow: "1",
      }}
      to={`/preferences/workouts`}
    >
      <Card className="card">
        <Card.Img
          style={{ height: "200px", width: "auto" }}
          variant="top"
          src={
            "https://www.planetfitness.com/sites/default/files/feature-image/break-workout_602724.jpg"
          }
        />
        <Card.Body>
          <Card.Title>
            <strong>Workouts</strong>
          </Card.Title>
          <Card.Text>Browse your workout preferences</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );

  const recipeCard = (
    <Link
      to={`/preferences/recipes`}
      style={{
        textDecoration: "none",
        textAlign: "center",
        flexGrow: "1",
      }}
    >
      <Card className="card">
        <Card.Img
          style={{ height: "200px", width: "auto" }}
          variant="top"
          src={
            "https://www.usda.gov/sites/default/files/nal-eat-healthy-active-new-year-blog-010322.jpg"
          }
        />
        <Card.Body>
          <Card.Title>
            <strong>Recipes</strong>
          </Card.Title>
          <Card.Text>Browse your recipe preferences</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );

  return !user || user.error ? (
    <div>
      {navigate("/login")}
      <p>Please log in to see preferences</p>
    </div>
  ) : (
    <div className="centered-cards">
      <div className="card-container">
        {workoutCard}
        {recipeCard}
      </div>
    </div>
  );
}

export default Preferences;
