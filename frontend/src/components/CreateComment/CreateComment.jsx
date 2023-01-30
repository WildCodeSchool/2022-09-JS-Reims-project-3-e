import React, { useRef, useState, useEffect } from "react";
import propTypes from "prop-types";
import classes from "./CreateComment.module.css";
import Card from "../../UI/Card";

function CreateComment({ onSaveComment }) {
  const contentRef = useRef("");
  const [disabled, setDisabled] = useState(true);
  const [comments, setComments] = useState([]);

  const submitHandlerComment = (event) => {
    event.preventDefault();
    const content = contentRef.current.value;

    onSaveComment(content);
    contentRef.current.value = "";
  };
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/comments`
    )
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <Card classNames={classes["create-pdc"]}>
      <form onSubmit={submitHandlerComment} disabled>
        <div>
          <textarea ref={contentRef} placeholder="Texte de votre publication" />
        </div>
        <button
          disabled={disabled}
          comments={comments}
          setDisabled={setDisabled}
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </Card>
  );
}

CreateComment.propTypes = {
  onSaveComment: propTypes.func.isRequired,
};

export default CreateComment;
