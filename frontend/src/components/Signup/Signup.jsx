import { useState, useEffect, useReducer } from "react";

import PropTypes from "prop-types";

import {
  emailReducer,
  passwordReducer,
  cityReducer,
  usernameReducer,
  firstnameReducer,
  lastnameReducer,
} from "./signupHelpers";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./Signup.module.css";

export default function Signup({ onRes }) {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [cityState, dispatchCity] = useReducer(cityReducer, {
    value: "",
    isValid: null,
  });

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [firstnameState, dispatchFirstname] = useReducer(firstnameReducer, {
    value: "",
    isValid: null,
  });

  const [lastnameState, dispatchLastname] = useReducer(lastnameReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailState.isValid &&
          passwordState.isValid &&
          cityState.isValid &&
          usernameState.isValid &&
          firstnameState.isValid &&
          lastnameState.isValid
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [
    emailState.isValid,
    passwordState.isValid,
    cityState.isValid,
    usernameState.isValid,
    firstnameState.isValid,
    lastnameState.isValid,
  ]);

  const firstnameChangeHandler = (event) => {
    dispatchFirstname({ type: "USER_INPUT", val: event.target.value });
  };

  const lastnameChangeHandler = (event) => {
    dispatchLastname({ type: "USER_INPUT", val: event.target.value });
  };

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", val: event.target.value });
  };

  const cityChangeHandler = (event) => {
    dispatchCity({ type: "USER_INPUT", val: event.target.value });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        admin: false,
        firstname: firstnameState.value,
        lastname: lastnameState.value,
        login: usernameState.value,
        city: cityState.value,
        email: emailState.value,
        password: passwordState.value,
      }),
    })
      .then((res) => onRes(res))
      .catch((err) => {
        console.error(err);
      });
  };

  const validateFirstnameHandler = () => {
    dispatchFirstname({ type: "INPUT_BLUR" });
  };

  const validateLastnameHandler = () => {
    dispatchLastname({ type: "INPUT_BLUR" });
  };

  const validateUsernameHandler = () => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const validateCityHandler = () => {
    dispatchCity({ type: "INPUT_BLUR" });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  return (
    <Card classNames={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            firstnameState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="firstname">Prenom</label>
          <input
            type="firstname"
            id="firstname"
            value={firstnameState.value}
            onChange={firstnameChangeHandler}
            onBlur={validateFirstnameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            lastnameState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="lastname">Nom</label>
          <input
            type="lastname"
            id="lastname"
            value={lastnameState.value}
            onChange={lastnameChangeHandler}
            onBlur={validateLastnameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            usernameState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="login">Nom d'utilisateur</label>
          <input
            type="login"
            id="login"
            value={usernameState.value}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            cityState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="city">Ville</label>
          <input
            type="city"
            id="city"
            value={cityState.value}
            onChange={cityChangeHandler}
            onBlur={validateCityHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Valider
          </Button>
        </div>
      </form>
    </Card>
  );
}

Signup.defaultProps = {
  onRes: () => {},
};

Signup.propTypes = {
  onRes: PropTypes.func,
};
