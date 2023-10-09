import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function RecipeView() {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((r) => r.json())
      .then(setRecipe);
  }, [id]);

  return recipe ? (
    <div className="center-content">
      <div className="img-container">
        <img src={recipe.image_url} alt={recipe.title} />
      </div>
      <h2>{recipe.title}</h2>
      <p>Category: {recipe.category}</p>
      <p>Preparation Time: {recipe.prep_time} minutes</p>
      <p>Calories: {recipe.calories} kCal</p>
      <p>Protein: {recipe.protein} grams</p>
      <div>
        <strong>Instructions:</strong>
        {recipe.instructions.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <Link to="/recipes">
        <Button variant="secondary">Back</Button>
      </Link>
    </div>
  ) : (
    <div className="center-content">
      <p>Sorry, the recipe data is not available.</p>
    </div>
  );
}

export default RecipeView;
