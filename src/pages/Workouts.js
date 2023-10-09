import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Workouts({ user }) {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

  const addToPreferences = (userId, workoutId) => {
    const data = { workout_id: workoutId };

    fetch(`/users/${userId}/workouts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Added to preferences successfully");
        } else {
          console.error("Failed to add to preferences");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const workoutsArray = workouts.map((workout) => (
    <Link
      style={{
        textDecoration: "none",
        textAlign: "center",
        flexGrow: "1",
      }}
      to={`/workouts/${workout.id}`}
    >
      <Card key={workout.id} className="card">
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
          <Button
            variant="primary"
            onClick={() => addToPreferences(user.id, workout.id)}
          >
            Add to Preferences
          </Button>
        </Card.Body>
      </Card>
    </Link>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{workoutsArray}</div>
  );
}

export default Workouts;
