import React, { useState } from "react";
import PropTypes from "prop-types";

import paperPlane from "../../assets/paper-plane.png";

import classes from "./CreateComment.module.css";

function CreateComment({ onSave }) {
  const [comment, setComment] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    onSave(comment);
    setComment("");
  };

  const changeHandler = (event) => {
    setComment(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={classes.actions}>
      <input
        type="text"
        placeholder="Commenter"
        value={comment}
        onChange={changeHandler}
      />
      <button type="submit">
        <img src={paperPlane} alt="paper-plane" />
      </button>
    </form>
  );
}

export default CreateComment;

CreateComment.propTypes = {
  onSave: PropTypes.func,
};

CreateComment.defaultProps = {
  onSave: () => {},
};
