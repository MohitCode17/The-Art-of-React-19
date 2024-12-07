import React from "react";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const showRecipeHandler = () => {
    setRecipeShown((prevRecipeShow) => !prevRecipeShow);
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
        <IngredientsList
          ingredients={ingredients}
          showRecipeHandler={showRecipeHandler}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
