# Module - 4 Side Effects

## Handling Side Effects in React

In React, side effects are operations that affect something outside the scope of a function or component. These can include:

- Fetching data from an API.
- Manipulating the DOM directly.
- Setting up subscriptions or timers.
- Logging to the console.
- Updating the state in response to an action.

React's functional components are designed to be pure functions of their props and state, meaning they should return the same output for the same input without affecting or relying on anything outside their scope. Side effects break this purity, so React provides mechanisms to manage them properly.

Example of data fetching in react:

```javascript
import React from "react";

export default function App(props) {
  const [starWarsData, setStarWarsData] = React.useState(null);

  console.log("Rendered!");

  fetch("https://swapi.dev/api/people/1")
    .then((res) => res.json())
    .then((data) => setStarWarsData(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
```

React component is caught in an infinite loop because the fetch call inside the component causes the state to update (setStarWarsData(data)), which triggers a re-render, causing the fetch call to execute again, creating an endless cycle.

**Solution:**

You should only fetch data once, typically when the component mounts. To achieve this, wrap the fetch call inside a `useEffect`.

## Intro to `useEffect`

React uses the useEffect hook to handle side effects in functional components.

The useEffect hook is executed after the render phase of the component, allowing you to perform side effects safely.

**Basic Syntax:**

```javascript
useEffect(() => {
  // Side effect logic here
  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);
```

- Callback Function: Contains the side effect logic.
- Cleanup Function: (Optional) Used to clean up resources like subscriptions or timers.
- Dependencies Array: Determines when the effect should run.

**Fixed Code:**

```javascript
import React from "react";

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState(null);

  // Fetch data only when the component mounts
  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []); // The empty array ensures the effect runs only once

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
```
