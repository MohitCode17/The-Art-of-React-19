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

## Props vs State

**Props** refers to the properties being passed into a component in order for it to work correctly, similar to how a function recives parameters: "from above." A component receiving props is not allowed to modify those props. (i.e. they are "immutable.")

```javascript
function addTwoNumbers(a, b) {
  // DON'T DO THIS
  a = 38;
  return a + b;
}

console.log(1, 2); // Expected resule is 3, but got 40.
```

```javascript
function Navbar(props) {
  // DON'T DO THIS
  props.logoIcon = "some-other-icon.png";
}

<Navbar logoIcon="smily.png" />; // Expected to display smily.png but got some-other-icon.png.
```

**State** refers to values that are managed by the component, similar to variables declared inside a function. Any time you have changing values that should be saved/displayed, you'll likely be using state.

**View as a function of state**

**Render**: React runs your function and display whatever gets returned. The function will only be run again if it receives new props from above, or its internal state value changes.

**setState**: Changing a local, non-state variable doesn't cause React to re-render the component. Changing state with a built-in `setState` function does.

**view = function(state)**: Thus, when state changes and React re-renders your component, something new gets returned and replaces what used to be on the pages.

## useState Hook

The useState hook in React is a built-in function that allows you to add state management to functional components. It lets you declare state variables, which are preserved across re-renders, enabling your component to maintain and update its state dynamically.

```javascript
const App = () => {
  let state = "Yes";

  const handleClick = () => {
    state = "Heck Yes";
    console.log(state);
  };

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">
        {state}
      </button>
    </main>
  );
};
```

Changing a local `state` variable doesn't cause React to re-render the component. Let's resolve this using `useState`.

```javascript
import React, { useState } from "react";

const App = () => {
  let result = useState("Yes");
  console.log(result);

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value">{result[0]}</button>
    </main>
  );
};
```

`result` will be an array contain two items: `[Yes, f{}]`. "Yes" is initial value which we have provided it can be any data-type.

## useState Array Destructuring

As we have see, result will be an array and we can destructured it.

```javascript
const [result, setResult] = usestate("Yes");
```

- result: The current state value.
- setResult: A function to update the state.
- Yes: The initial value of the state, which can be a number, string, array, object, or any data type.

## Changing the State

```javascript
import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [result, setResult] = useState("Yes");

  // Update the state
  const handleClick = () => {
    setResult("Heck Yes");
  };

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button className="value" onClick={handleClick}>
        {result}
      </button>
    </main>
  );
};

export default App;
```

setResult function will cause the component to re-render with the updated state value.

## State Practice

Go to state practice - counter app and try out challenges.

```
* Challenge - 1:
* Create state to track our count value (initial value is 0)
* Don't forget to replace the hard-coded "0" with your new state
```

```
* Challenge - 2:
* Create a function called `add` that runs
* when the + button is clicked. (Can just console.log("add") for now)
```

```
* Challenge - 3:
* See if you can think of a way to add 1 to the count
* every time the + button is clicked
```

```
* Challenge:
* Add functionality to the minus button
```

## Update State with Callback Function

There is another way to update the state using callback function like below.

```javascript
const [count, setCount] = useState(0);

const add = () => {
  setCount((prevCount) => prevCount + 1);
};
```

**Benefits of Using `prevState`**

1. Accurate State Updates: Ensures state updates are calculated based on the most current value, not a potentially outdated one.

2. Safe in Concurrent Updates: Handles scenarios where multiple state updates are queued in a single render cycle.

3. Scales Well: Essential in complex scenarios, like:
   Updating nested state.

**When to Use This Syntax**

- Whenever the new state depends on the previous state.

  - For example:
    - Incrementing or decrementing counters.
    - Toggling boolean values (setState(prevState => !prevState)).
    - Managing arrays or objects based on their previous state.

**Concurrent Updates of State**

Example Without prevState (Potential Bug)

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1); // Uses the "current" value of count
    setCount(count + 1); // Still uses the same "current" value of count
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>+</button>
    </div>
  );
}

Expected result should be `2` but still get `1`.
```

Example Using prevState (Correct Behavior)

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevState) => prevState + 1); // Updates based on the latest state
    setCount((prevState) => prevState + 1); // Updates again based on the updated state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={add}>+</button>
    </div>
  );
}
```

## Form Handling in React

Form handling in React is a key skill for developers working on interactive web applications. Here's a comprehensive guide covering the concepts, tools, and practices for handling forms in React.

React 19 introduces `Actions`, which are asynchronous functions. `Actions` are helpful in making form submissions easier. This guide dives into what `Actions` are and how to use them.

### React `Actions`

To understand Actions, let's first take a look at how we manage forms today. In React 18 and earlier, we submit forms using the handleSubmit function in a button. Here's a simple form example:

```javascript
// Form submission in React 18

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Login Successfully");
      alert(`Welcome, ${email}`);
    }, 2000);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@doe.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
};
```

In this code, we are doing the following:

1. Adding a loading state: We use a variable isPending to manually keep track of the loading state.

2. Form submission: The form is submitted using the handleSubmit event handler.

3. Capturing the submitted value: The handleChange function captures the submitted value and stores it in state variables.

**Transition to React 19 from 18 - Form Handling**

```javascript
// Form submission in React 18

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
  };

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="john@doe.com"
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>
      </form>
    </section>
  );
};
```

Yes, this is a valid way to handle a form in React. This approach uses the FormData API to gather form data.

But this is an imperative style of handling forms which opposed to declarative nature of coding in react.

But keep in mind that prior to React 19, it actually used to be quite a bit more difficult to gather form information,

or maybe I should qualify that. The traditional way of gathering information from a form, which used something called `controlled` component, which we have seen in first example of code.

was quite a bit more cumbersome that first of all what we doint here, and more importantly what we're about to learn in the next section.

React 19 is introduced must better way to gather form informtion.

**Section - 2 of Transition to React 19**

If you remeber, I was talking about forms back in probably the original spec form for HTML.

There was a property or an attribute that you could add to your form called `action`.

And this is where you would tell where your browser should send the information from the form to. Oftertimes, this would end up being, for example a PHP file.

```javascript
<form action="phpfile.php">...</form>
```

React 19 allows us to not only use regular action for a backend file if we need, but we also can pass a function to it.

```javascript
<form action={signUp}>...</form>
```

And when you passing a function to your action, it doesn't receive an event because we're not handling an event. But instead, it's just automatically going to receive the form data.

Behind the scenen the action is prevent default the submission of form for us by default.

And it reset the form for us automatically.

```javascript
function signUp(formData) {
  const email = formData.get("email");
  console.log(email);
}

<form action={signUp}>...</form>;
```

## Chef Claude: conditional rendering challenge 1

```
* Challenge:
* Using conditional rendering, only render the new <section> IF
* there are ingredients added to the list of ingredients.
```

## Chef Claude: conditional rendering challenge 2

```
* Challenge:
* Only display the div.get-recipe-container if the ingredients list
* has more than 3 items in it. (Fewer than that and it might not
* give great results from the chef 🤖👩‍🍳)
```

## Chef Claude: Get recipe placeholder challenge

```
* Challenge:
* 1. Create a boolean state that, for now, will represent whether
*    we've gotten a recipe back from the "chef". Default to `false`.
*    Can call it `recipeShown`.
* 2. Grab the markup in recipeCode.md and paste it below. This will
*    be a placeholder for the content that will come back from the
*    chef once we set up that feature.
* 3. When the user clicks the "Get a recipe" button, flip the
*    `recipeShown` state to true.
* 4. Only display the recipe code content if `recipeShown` is true.
```

## Passing State as Props

Let's back to Counter App:

```
* Challenge:
* - Create a new component called `Count`
*    - It should receive a prop called `number`, whose value
*      is the current value of our count
*    - Have the component render the h2.count element below
*      and display the incoming prop `number`
* - Replace the h2.count below with an instance of
*   the new Count component, passing the correct value
*   to its `number` prop.
* - After doing this, everything should be working the
*   same as before.
```

## Sound Pads Challenge - Part 1

```
* Challenge part 1:
* 1. Initialize state with the default value of the
*    array pulled in from pads.js
* 2. Map over that state array and display each one
*    as a <button> (CSS is already written for you)
*    (Don't worry about using the "on" or "color"
*    properties yet)
```
