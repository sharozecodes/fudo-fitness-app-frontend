import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then(setRecipes);
  }, []);

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
          <Button variant="primary">Add to Preferences</Button>
        </Card.Body>
      </Card>
    </Link>
  ));

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{recipesArray}</div>
  );
}

export default Recipes;
