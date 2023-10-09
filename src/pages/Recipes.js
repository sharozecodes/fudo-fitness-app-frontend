import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Recipes({ user }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

  const addToPreferences = (userId, recipeId) => {
    const data = { recipe_id: recipeId };

    fetch(`/users/${userId}/recipes`, {
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

  const recipesArray = recipes.map((recipe) => (
    <Link
      style={{
        textDecoration: "none",
        textAlign: "center",
        flexGrow: "1",
      }}
      to={`/recipes/${recipe.id}`}
    >
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
          <Button
            variant="primary"
            onClick={() => addToPreferences(user.id, recipe.id)}
          >
            Add to Preferences
          </Button>
        </Card.Body>
      </Card>
    </Link>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{recipesArray}</div>
  );
}

export default Recipes;
