import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const recipeSection = useRef(null);

  /**
   * Challenge:
   * Add a new effect that calls `recipeSection.current.scrollIntoView()`
   * only if recipe is not an empty string and recipeSection.current is not null.
   * Think carefully about what value(s) you would want to include in
   * the dependencies array.
   */

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const getRecipe = async () => {
    setLoading(true);
    const generatedRecipeMarkdown = await getRecipeFromMistral(ingredients);
    if (generatedRecipeMarkdown) {
      setLoading(false);
      setRecipe(generatedRecipeMarkdown);
    }
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
          getRecipe={getRecipe}
          ref={recipeSection}
          loading={loading}
        />
      )}

      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Main;
