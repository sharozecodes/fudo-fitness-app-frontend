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
      {" "}
      WORKOUT EOYEE
      {/* <Card key={workout.id} className="card">
        <Card.Img
          style={{ height: "200px", width: "auto" }}
          variant="top"
          src={workout.image_url}
        />
        <Card.Body>
          <Card.Title>
            <strong>{workout.title}</strong>
          </Card.Title>
          <p>Category: {workout.category}</p>
          <p>Duration: {workout.duration} minutes</p>
          <p>Calories Burnt: {workout.calories_burnt} kcal</p>
          <Card.Text>{workout.description}</Card.Text>
          <Button variant="primary">Add to Preferences</Button>
        </Card.Body>
      </Card> */}
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
      {" "}
      RECIPEOYE
      {/* 
      <Card key={recipe.id} className="card">
        <Card.Img
          style={{ height: "200px", width: "auto" }}
          variant="top"
          src={recipe.image_url}
        />
        <Card.Body>
          <Card.Title>
            <strong>{recipe.title}</strong>
          </Card.Title>
          <p>Category: {recipe.category}</p>
          <p>Preparation Time: {recipe.prep_time} minutes</p>
          <p>Calories: {recipe.calories}</p>
          <p>Protein: {recipe.protein} g</p>
          <Card.Text>{recipe.description}</Card.Text>
          <Button variant="primary">Add to Preferences</Button>
        </Card.Body>
      </Card>
      */}
    </Link>
  );

  return !user || user.error ? (
    <div>
      {navigate("/login")}
      <p>Please log in to see preferences</p>
    </div>
  ) : (
    <div>
      {workoutCard} {recipeCard}
    </div>
  );
}

export default Preferences;
