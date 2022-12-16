import React from "react";

import PropTypes from "prop-types";

import classes from "./Button.module.css";

function Button({ type, onClick, className, disabled, children }) {
  return (
    <button
      type={type ? "submit" : "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: () => {},
  className: "",
  disabled: false,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};
