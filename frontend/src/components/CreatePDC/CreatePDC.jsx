import React, { useRef } from "react";

import propTypes from "prop-types";
import classes from "./CreatePDC.module.css";
import Card from "../../UI/Card";

function CreatePDC({ onSave }) {
  const titleRef = useRef("");
  const contentRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    onSave(title, content);
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <Card classNames={classes["create-pdc"]}>
      <h2>Ajouter un PDC</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" ref={contentRef} />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </Card>
  );
}

CreatePDC.propTypes = {
  onSave: propTypes.func.isRequired,
};

export default CreatePDC;
