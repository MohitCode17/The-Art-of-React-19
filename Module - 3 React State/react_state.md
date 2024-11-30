# Module - 3 React State

## Event Listener

Events are used for user interaction.

- Events are subscribed and gets fired when specified user's interaction.
- Can update anything

```javascript
const App = () => {
  return <button onclick={() => alert("Hyy Everyone !")}>Click me</button>;
};
```

### Challenge - 1

```
* Challenge:
* Add an `onSubmit` event listener on the form. Have the function
* simply console.log("Form submitted!") for now
```

### Challenge - 2

```
* Challenge:
* Add the new ingredient to the array of ingredients. Also, add a
* console.log(ingredients) after adding the ingredient.

* **warning**: you aren't going to see the page update!
```

```javascript
import React from "react";

const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const listElement = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
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
      <ul>{listElement}</ul>
    </main>
  );
};

export default Main;
```

In `handleSubmit`, we pushes the newIngredient to the ingredients array, Though ingredients array is updating as we can see while printing the array. But doesn't update the UI.

The issue arises because we're directly mutating the ingredients array with the push method, but React doesn't detect this change to re-render the component.

React's state and rendering system rely on state changes via the `useState` hook to trigger re-renders. Simply modifying an array like ingredients directly won't notify React to update the UI.
