import React from "react";
import { useState } from "react";

const Main = () => {
  /**
   * Challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */

  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);

  const ingredientsListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  const handleSubmit = (e) => {
    /**
     * Like before, don't worry about this FormData stuff yet.
     * Just use the newIngredient below to help you finish the
     * challenge.
     */
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  return (
    <main className="container">
      <form className="add_ingredient_form" onSubmit={handleSubmit}>
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
