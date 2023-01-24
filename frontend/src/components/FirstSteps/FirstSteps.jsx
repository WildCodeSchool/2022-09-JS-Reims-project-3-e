import React, { useState } from "react";
import Card from "../../UI/Card";

import classes from "./FirstSteps.module.css";

import listActivity from "../../assets/list-interface-symbol.png";

function FirstSteps() {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasCommented, setHasCommented] = useState(false);
  let value = 0;

  if (hasPhoto) {
    value += 33;
  }
  if (hasLiked) {
    value += 33;
  }
  if (hasCommented) {
    value += 33;
  }
  if (value === 99) {
    value = 100;
  }

  return (
    <Card classNames={classes["first-steps"]}>
      <header>
        <img src={listActivity} alt="list-activity" />
        <h4>Premiers pas !</h4>
      </header>
      <section>
        <progress value={value} max="100" />
        <label htmlFor="photo">
          Ajouter Photo
          <input
            id="photo"
            type="checkbox"
            checked={hasPhoto}
            onChange={() => setHasPhoto((prev) => !prev)}
          />
        </label>
        <label htmlFor="like">
          Liker une publication
          <input
            id="like"
            type="checkbox"
            checked={hasLiked}
            onChange={() => setHasLiked((prev) => !prev)}
          />
        </label>
        <label htmlFor="comment">
          Commenter une publication
          <input
            id="comment"
            type="checkbox"
            checked={hasCommented}
            onChange={() => setHasCommented((prev) => !prev)}
          />
        </label>
      </section>
    </Card>
  );
}

export default FirstSteps;
