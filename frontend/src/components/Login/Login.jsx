import React, { useState } from "react";

import PropTypes from "prop-types";

import Card from "../../UI/Card";

import classes from "./Login.module.css";

export default function Login({ setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (email.trim().length === 0) {
      return;
    }
    if (password.trim().length === 0) {
      return;
    }
    if (!email.includes("@")) {
      return;
    }
    setIsLogged(true);
  };
  return (
    <Card classNames={classes.login}>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email:</label>
        <input
          value={email}
          type="email"
          name="email"
          id="email"
          required="required"
          onChange={emailChangeHandler}
        />

        <label htmlFor="password">Password:</label>

        <input
          value={password}
          type="password"
          name="password"
          id="password"
          required="required"
          onChange={passwordChangeHandler}
        />

        <div className={classes.actions}>
          <button type="submit">Valider</button>
        </div>
      </form>
    </Card>
  );
}

Login.propTypes = {
  setIsLogged: PropTypes.func.isRequired,
};
