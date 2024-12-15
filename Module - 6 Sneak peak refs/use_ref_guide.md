# Guide to `useRef` in React

`useRef` is a React Hook that provides a way to directly access or store a mutable value that persists across renders. It is part of the React Hooks API introduced in React 16.8. The most common use cases for `useRef` include:

- **Accessing DOM elements directly.**
- **Storing mutable values without causing re-renders.**
- **Keeping references to previous state or props.**

---

## **Syntax**

```javascript
const refContainer = useRef(initialValue);
```

- **`initialValue`**: This is the initial value of the `useRef` object. It can be any type (null, number, string, object, etc.).
- **`refContainer`**: This is the returned object with a single property, `current`.

---

## **Key Characteristics**

1. **No Re-renders**:

   - Updating the `current` property of a `useRef` object does not trigger a re-render.
   - This makes it ideal for storing values that don’t need to cause re-renders.

2. **Mutable**:

   - The value in `current` is mutable and can be updated without re-invoking the component rendering logic.

3. **Persistent**:
   - The `useRef` object persists between renders, meaning it does not get reset when the component re-renders.

---

## **Common Use Cases**

### **1. Accessing DOM Elements**

You can use `useRef` to interact directly with a DOM element without relying on `document.querySelector()`.

```javascript
import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Accessing the DOM element
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

---

### **2. Storing Mutable Values Without Re-rendering**

You can use `useRef` to store a value that does not cause the component to re-render when updated.

```javascript
import React, { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0); // Mutable value
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    countRef.current += 1; // Updating countRef does not trigger re-render
    console.log(`Count: ${countRef.current}`);
  };

  return (
    <div>
      <p>Render Count: {renderCount}</p>
      <button onClick={() => setRenderCount(renderCount + 1)}>Re-render</button>
      <button onClick={increment}>Increment Ref Value</button>
    </div>
  );
}
```

---

### **3. Keeping Previous State or Props**

You can use `useRef` to keep track of the previous value of a state or prop.

```javascript
import React, { useRef, useEffect, useState } from "react";

function PreviousValueTracker() {
  const [value, setValue] = useState(0);
  const prevValue = useRef(null);

  useEffect(() => {
    prevValue.current = value; // Update ref with the current value
  });

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {prevValue.current}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}
```

---

## **Comparison with `useState`**

| Feature               | `useState`               | `useRef` |
| --------------------- | ------------------------ | -------- |
| Triggers Re-render    | Yes                      | No       |
| Use for DOM Reference | No                       | Yes      |
| Mutable Value Storage | No (must use `setState`) | Yes      |
| Lifecycle Persistence | Yes                      | Yes      |

---

## **Key Points to Remember**

1. Avoid abusing `useRef` for storing state that should trigger UI updates. Use `useState` for reactive data.
2. `useRef` is best suited for:
   - Accessing and manipulating DOM nodes.
   - Keeping track of values between renders without re-triggering the render cycle.
3. Changing `useRef.current` does not notify React. If you want to re-render the component when a value changes, use `useState`.

Let me know if you'd like more examples or clarifications!

---

## Let's back to Chef claude App

We'll see the use case of `useRef` in our chef chaude app.

In our chef claude app, we are getting our recipe. We can click the get a recipe button and if we look very carefully,
we'll see that the scroll bar when the AI finally gets back to us, the scroll bar on the app will apear
and we can scroll down and see the recipe. However, as far as user experience goes, it's not the great.
We don't really give a clear indication to the user that the recipe has finally loaded.

Let's fix it.
