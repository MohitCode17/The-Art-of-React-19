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
