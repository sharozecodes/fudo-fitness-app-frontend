import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WorkoutView() {
  const { id } = useParams();

  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    fetch(`/workouts/${id}`)
      .then((r) => r.json())
      .then(setWorkout);
  }, [id]);

  return workout ? (
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
  ) : (
    <></>
  );
}

export default WorkoutView;
