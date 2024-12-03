import React, { useState } from "react";
import "./App.css";

const App = () => {
  const signUp = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email);
  };

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
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

export default App;
