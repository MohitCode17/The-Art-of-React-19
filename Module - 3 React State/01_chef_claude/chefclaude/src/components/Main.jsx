import React from "react";
import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  /**
   * Challenge: use form action instead of onSubmit to
   * handle the data from the form
   */
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
      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
