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

### Passing Data into component

Lets see how does we passed data throug `props` to reused our Contact component.

```javascript
import whiskerson from "./assets/mr-whiskerson.png";
import fluffykins from "./assets/fluffykins.png";
import felix from "./assets/felix.png";
import pumpkin from "./assets/pumpkin.png";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="contacts">
      <Contact
        img={whiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
};

export default App;
```

### Receiving props in a component

So how do we receive these props on the contact side so we can finally get rid of all of the hard coded data that we have in Contact component.

Well, just like a function that receives a parameter, my react component will receive something in the function's parameter, which will be an object that represents all of the properties that we passed in, which we called `props`.

```javascript
const Contact = (props) => {
  // console.log(props); // getting object that we passed in.
  return (
    <article className="contact-card">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phone} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
};

export default Contact;
```

### Props Destructuring in React

props destructuring is a syntax used to extract properties from a props object directly within a component. This simplifies access to the properties and improves code readability, especially when there are multiple props.

```javascript
const Contact = ({ img, name, phone, email }) => {
  return (
    <article className="contact-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} alt="phone icon" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} alt="mail icon" />
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Contact;
```

### Props Practice

```
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
```

### Conditional Rendering

Conditional rendering in React is a technique used to render components or elements based on certain conditions. This means you can control whether or not certain JSX elements are displayed based on variables, props, or state.

```
 * Conditional Rendering:
 * Some jokes are only a punchline with no setup:
 *
 * E.g.: "It’s hard to explain puns to kleptomaniacs because
 * they always take things literally."
 *
 * how might you make it only
 * show the punchline?
```

```javascript
import React from "react";

const Jokes = ({ setup, punchline }) => {
  return (
    <>
      {setup && <p className="setup">Setup: {setup}</p>}
      <p className="punchline">Puncline: {punchline}</p>
      <hr />
    </>
  );
};

export default Jokes;
```

```
Explanation:

{setup && ...}:

- This checks if the setup prop exists.
- If setup is truthy, it renders the <p> tag for the setup.
- If setup is falsy (e.g., undefined, null, or an empty string), it skips rendering that line.
```

### Back to Travel Journal Project

```
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 *
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
```

## React can Render Arrays

In React, the map function is used to iterate over an array and transform each element in the array into a new element. It is particularly useful for rendering lists of components dynamically based on an array of data.

**Example of Using map in React**:

Suppose we have an array of fruits that we want to display as a list.

```javascript
import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Date"];

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
```

**Key Prop**: The key prop is used to uniquely identify each element in the list for efficient rendering and updates by React.

## Mapping Components

Let's see how does we map component.

```javascript
const App = () => {
  return (
    <>
      <Jokes
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Jokes
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy"
      />
      <Jokes
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm"
      />
      <Jokes
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </>
  );
};

export default App;
```

Dynamic Rendering using map:

- The App component imports an array of jokes (jokesData) and uses the .map() method to dynamically create a Jokes component for each joke in the array.
- This method iterates over the jokesData array, and for each joke object, it generates a Jokes component with setup and punchline as props.
- The dynamically generated components are stored in jokesElements and rendered within the JSX.

```javascript
const App = () => {
  const jokesElements = jokesData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });

  return <>{jokesElements}</>;
};
```

## Travel Journal: Map Entry Component

```
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
```

🥇 Wrap up our Travel Journal Project, Greak work till here...
