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

## cleanup function in useEffect

A cleanup function inside a useEffect hook in React is used to clean up resources or side effects that were created by the effect. It helps prevent memory leaks and ensures that the component behaves correctly when it unmounts or re-renders.

**Why use a cleanup function?**

1. Avoid Memory Leaks:
   If an effect sets up resources (e.g., timers, event listeners, or subscriptions), those resources might remain active even after the component is unmounted or updated. The cleanup function ensures these resources are properly disposed of.

2. Handle Component Re-Renders:
   If a component re-renders, the previous effect might still be active. The cleanup function ensures that any leftover side effects from the previous render are cleaned up before the next effect runs.

3. Unsubscribe from Listeners or Services:
   It ensures that external listeners, such as those on window, document, or third-party services, are removed when no longer needed.

4. Good Practice for Predictable Behavior:
   Proper cleanup ensures the application behaves predictably, especially when the component is dynamically added/removed from the DOM.

**How the cleanup function works**

The cleanup function is defined as a return value inside the useEffect callback. React calls this function before the component unmounts or before running the effect again if the dependencies change.

```javascript
useEffect(() => {
  // Setup logic (e.g., event listeners, timers, subscriptions)
  const intervalId = setInterval(() => {
    console.log("Running effect");
  }, 1000);

  // Cleanup logic
  return () => {
    clearInterval(intervalId); // Clear the interval
    console.log("Cleanup function called");
  };
}, []); // Dependency array
```

**Common Use Cases for Cleaup**

1. Clearing Timers or Intervals:

   ```javascript
   useEffect(() => {
     const timer = setTimeout(() => {
       console.log("Timeout executed");
     }, 5000);

     return () => clearTimeout(timer); // Clear timeout
   }, []);
   ```

2. Removing Event Listeners:

   ```javascript
   useEffect(() => {
     const handleResize = () => console.log(window.innerWidth);
     window.addEventListener("resize", handleResize);

     return () => window.removeEventListener("resize", handleResize); // Remove event listener
   }, []);
   ```

3. Cancelling Network Requests:

   ```javascript
   useEffect(() => {
     const controller = new AbortController();
     fetch("/api/data", { signal: controller.signal })
       .then((response) => response.json())
       .then((data) => console.log(data))
       .catch((err) => {
         if (err.name === "AbortError") {
           console.log("Request cancelled");
         }
       });

     return () => controller.abort(); // Cancel the request on cleanup
   }, []);
   ```
