import React, { useState } from "react";
import "./App.css";

const App = () => {
  const signUp = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");

    console.log(employmentStatus);
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

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemplyed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  );
};

export default App;
