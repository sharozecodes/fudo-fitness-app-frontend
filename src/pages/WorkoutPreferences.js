import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function WorkoutPreferences({ user }) {
  const [workouts, setWorkouts] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (user === null) {
      setErrorMessage("User is null. Please provide a valid user.");
      return; // Exit early if user is null
    }
    fetch(`/users/${user.id}/workouts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }
        return response.json();
      })
      .then(setWorkouts)
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [user]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <Link
            key={workout.id}
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
            }}
            to={`/workouts/${workout.id}`}
          >
            <Card className="card">
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
              </Card.Body>
            </Card>
          </Link>
        ))
      ) : (
        <div>No preferences found</div>
      )}
    </div>
  );
}

export default WorkoutPreferences;
