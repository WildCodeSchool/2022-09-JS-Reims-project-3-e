import React from "react";
import PropTypes from "prop-types";

import classes from "./Card.module.css";

function Card({ classNames, children }) {
  return <div className={`${classes.card} ${classNames}`}>{children}</div>;
}

export default Card;

Card.defaultProps = {
  classNames: "",
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  classNames: PropTypes.string,
};
