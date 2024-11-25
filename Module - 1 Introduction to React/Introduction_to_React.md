# Module - 1 Introduction to React

## What is React?

React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs).

## History of React

- React began as internal tool for dynamic facebook components called news feed.
- Created in 2011 but remained private initially.
- React was open-sourced by Jordan Walke and Tom Occhino at JSConfUS 2013.
- Initially faced criticism for combining JavaScript and HTML in a single file.
- It slowly gained traction and blew up in adoption.

## Why React ?

1. **It's composable:** Can create easily resuable and interchangeble "piece of the web" that can be combined in various ways to create complex systems.

2. **Virtual DOM:** React uses a virtual DOM to represent the UI, which is a lightweight copy of the actual DOM. When the state of your application changes, React compares the virtual DOM with the previous version to determine the minimal set of DOM operations needed to update the UI. This can result in better performance compared to directly manipulating the DOM.

3. **It's declarative:** Declarative approach says "Just tell me what needs to happen, and I'll worry about how to do it."

**Declarative v/s Imperative**

Example of Declarative:-

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>This is declarative way of programming</h1>);
```

In above example, we rendered heading, and we describe that to render a heading to root. But how to done it we don't mention. React will handle everything on its behalves. This's called declarative appraoch.

Example of Imperative:-

```
- Create a new h1 element
- Give it some textContent
- Give it a class name "header"
- Append it as a child of the div#root
```

```javascript
const heading = document.createElement("h1");
heading.textContent = "Hello, React!";
heading.className = "heading";
document.getElementById("root").appendChild(heading);
```

In above example, we have describe WHAT we want, by specifying all the INSTRUCTIONS on HOW to do it. That's called Imperative approach.

## The Problem with Traditional Web Approach

1. Web Development Challenges

   - Manipulating DOM
   - Updating State and UI

2. Lack of Reusability

   - Unclear way for building components
   - No consistency
   - Harder to maintain clear code

3. Complex Data Binding

   - Unclear way for building components

## JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

Example of JSX Code:-

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>This is JSX Code</h1>);
```

`<h1>This is JSX Code</h1>` is similar to HTML element which render some content, But this actually a JSX code, it's similar to HTML but not HTML.

### Right way to Render JSX:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <h1>This is JSX Code</h1>
   <p>Some content...</p>
);
```

You have just noticed that, I'll try to render `h1` and `p` but getting warning here `JSX expressions must have one parent element.`

We cannot render two elements side by side in the way that I'm attemting here.

We can deal with it by wrapping one parent element as House of those two elements.

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>This is JSX Code</h1>
    <p>Some content...</p>
  </div>
);
```

## ReactFacts Project

We start with our first project called ReactFacts, which is simple static website which render some react facts.

### ReactFacts Markup

```
Challenge: Starting a vite project from scratch, build and render the HTML for our section project. Check out the "preview.png" inside a "/assets" folder for what what you're trying to build.

We'll be adding more styling to it later.

Hints:

- The React logo is a file in the project tree, so you can
  access it using absolute path.
- You can also set the `width` attribute of the image element
  just like in HTML. In the preview.png image, I have it set to 40px.

```

## Components

Component is reusable piece of code that used to define certain part of UI.

```javascript
// Rendering Components
function App() {
  return <ReactFacts />;
}

// Components
function ReactFacts() {
  return (
    <div>
      <img src="react-logo.png" alt="react-logo" width={40} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}
```

React components are regular JavaScript functions, but their names must start with a "capital letter" or they won't work!

## Fragments

A Fragment in React is a lightweight wrapper component provided by the React library that lets you group multiple elements without adding an extra node to the DOM.

```javascript
// Rendering Components
function App() {
  return <ReactFacts />;
}

// Components
function ReactFacts() {
  return (
    <>
      <img src="react-logo.png" alt="react-logo" width={40} />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
}
```
