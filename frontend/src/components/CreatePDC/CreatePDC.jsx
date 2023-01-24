import React, { useRef, useState } from "react";

import propTypes from "prop-types";
import classes from "./CreatePDC.module.css";
import Card from "../../UI/Card";

import defaultProfilePic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

function CreatePDC({ onSave }) {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const [disabled, setDisabled] = useState(true);

  const titleChangeHandler = (event) => {
    const title = event.target.value;
    if (title.trim().length > 5) {
      setDisabled(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    // eslint-disable-next-line camelcase

    onSave(title, content);
    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <Card classNames={classes["create-pdc"]}>
      <form onSubmit={submitHandler} disabled>
        <div>
          <img src={defaultProfilePic} alt="profile-pic" />
          <input
            type="text"
            ref={titleRef}
            placeholder="Titre de votre publication"
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <textarea ref={contentRef} placeholder="Texte de votre publication" />
        </div>
        <button disabled={disabled} type="submit">
          Ajouter
        </button>
      </form>
    </Card>
  );
}

CreatePDC.propTypes = {
  onSave: propTypes.func.isRequired,
};

export default CreatePDC;
