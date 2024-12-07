import React from "react";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "all the spices",
    "potato",
    "onion",
    "pasta",
  ]);
  const [recipe, setRecipe] = useState("");

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const getRecipe = async () => {
    const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipeMarkdown);
  };

  return (
    <main className="container">
      <form action={addIngredient} className="add_ingredient_form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
