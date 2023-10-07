import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

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
          <Button variant="primary">Add to Preferences</Button>
        </Card.Body>
      </Card>
    </Link>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{workoutsArray}</div>
  );
}

export default Workouts;
