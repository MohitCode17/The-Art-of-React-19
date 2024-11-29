import React from "react";

const Main = () => {
  return (
    <main className="container">
      <form className="add_ingredient_form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
};

export default Main;
