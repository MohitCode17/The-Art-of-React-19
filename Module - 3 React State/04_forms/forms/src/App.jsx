import React, { useState } from "react";
import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");

    // Gather the info from the form
    // Submit it to a backend
    formEl.reset();
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

export default App;
