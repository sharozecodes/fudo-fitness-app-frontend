import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then(setWorkouts);
  }, []);

  const workoutsArray = workouts.map((workout) => (
    <Card key={workout.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={workout.image_url} />
      <Card.Body>
        <Card.Title>{workout.title}</Card.Title>
        <p>Category: {workout.category}</p>
        <p>Duration: {workout.duration} minutes</p>
        <p>Calories Burnt: {workout.calories_burnt} kcal</p>
        <Card.Text>{workout.instructions}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{workoutsArray}</div>
  );
}

export default Workouts;
