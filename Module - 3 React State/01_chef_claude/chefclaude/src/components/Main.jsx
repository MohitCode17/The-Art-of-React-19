import React from "react";
import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
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
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Main;
