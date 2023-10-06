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
    <div className="center-content">
      <img src={workout.image_url} alt={workout.title} />
      <h2>{workout.title}</h2>
      <p>Category: {workout.category}</p>
      <p>Duration: {workout.duration} minutes</p>
      <p>Calories Burnt: {workout.calories_burnt} kcal</p>
      <div>
        <strong>Instructions:</strong>
        {workout.instructions.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button>Go somewhere</button>
    </div>
  ) : (
    <></>
  );
}

export default WorkoutView;
