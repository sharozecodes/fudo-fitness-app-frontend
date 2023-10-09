import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RecipePreferences({ user }) {
  const [recipes, setRecipes] = useState([]);

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (user === null) {
      setErrorMessage("User is null. Please provide a valid user.");
      return;
    }
    fetch(`/users/${user.id}/recipes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json();
      })
      .then(setRecipes)
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [user]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Link
            key={recipe.id}
            style={{
              textDecoration: "none",
              textAlign: "center",
              flexGrow: "1",
            }}
            to={`/recipes/${recipe.id}`}
          >
            <Card className="card">
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
                <p>Duration: {recipe.duration} minutes</p>
                <p>Calories Burnt: {recipe.calories_burnt} kcal</p>
                <Card.Text>{recipe.description}</Card.Text>
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

export default RecipePreferences;
