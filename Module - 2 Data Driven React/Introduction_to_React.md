# Module - 2 Data Driven React

## Problem With Entry Component

As we've already discussed, the way that we have our `Entry` component set up is not reusable at all. If we were go to `App.jsx` and create another instance of `Entry` component, we're constrained to having another trip to Mount Fuji.

As the way we have setted up is by hard coding all of the information.

So obviously, this isn't going to be our utlimate solution because we want our `TravelJournal` has more than one journal.

The idea of reusable component can be found all over the internet. If you go Amazon.com you'll see list of products like cellphones and accessories.

Although the information of each of these products is different, the structure of it appears to be exactly the same.

And in React, there is where the concept of `props` comes into play.

## Understanding the Concept of `Props`

`Props` (short for properties) are used to pass data from a parent component to a child component. They are a way of making components reusable by providing them with dynamic values.

Props are read-only, meaning the child component cannot modify them.

```javascript
function addTwoNumber() {
  return 1 + 2;
}
```

Here I've written a function that's called add two numbers together, and it just hard returns one and two.

It syntactically correct, but what's wrong with function like this? Well it's very, very limited in its capabilities.

Right now if I call add two numbers together it will always return three. Essentiallly, it's a useless function.

If I add some parameters, like let's say a and b to this function, now I can dynamically add and return the result, or rather the sum of the tow that I pass in.

```javascript
function addTwoNumber(a, b) {
  return a + b;
}
```

## Adding JavaScript Expression

An expression is any valid unit of code that resolves to a value. Expressions can be simple, such as a single variable, or complex, involving operators, function calls, and other expressions.

In React, you can inject expressions directly into JSX code by enclosing them in curly braces {}. This allows you to dynamically render values, variables, or the results of expressions within your components.

{ } is also called evaluated expression, because we don't write whole javascript, we can only inject the final outcome which evaluate.

Here's an example:-

```javascript
const DemoFunc = () => {
  const name = "Mohit";
  const isAdmin = true;

  const checkAdmin = () => {
    return isAdmin === true ? "You're admin." : `You're guest user.`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <h3>{checkAdmin()}</h3>
    </div>
  );
};
```

## Mini Project - Contact Book

Let's created this Contact book project to understand, how does `props` work?

```

Challenge:
 - Create a Contact component in another file
 - Move one of the contact card articles below into that file
 - import and render 4 instances of that contact card
  - Think ahead: what's the problem with doing it this way?
 */
```

```javascript
import React from "react";
import "./App.css";
import whiskerson from "./assets/mr-whiskerson.png";
import fluffykins from "./assets/fluffykins.png";
import felix from "./assets/felix.png";
import pumpkin from "./assets/pumpkin.png";
import phone from "./assets/phone-icon.png";
import mail from "./assets/mail-icon.png";

const App = () => {
  return (
    <div className="contacts">
      <article className="contact-card">
        <img src={whiskerson} alt="Photo of Mr. Whiskerson" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="mail icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </article>

      <article className="contact-card">
        <img src={fluffykins} alt="Photo of Fluffykins" />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="mail icon" />
          <p>fluff@me.com</p>
        </div>
      </article>

      <article className="contact-card">
        <img src={felix} alt="Photo of Felix" />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="mail icon" />
          <p>thecat@hotmail.com</p>
        </div>
      </article>

      <article className="contact-card">
        <img src={pumpkin} alt="Photo of Pumpkin" />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={phone} alt="phone icon" />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={mail} alt="mail icon" />
          <p>pumpkin@scrimba.com</p>
        </div>
      </article>
    </div>
  );
};

export default App;
```
