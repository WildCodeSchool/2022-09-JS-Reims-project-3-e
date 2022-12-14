import React, { useState } from "react";

function Post() {
  const [isFavorite, setIsFavorite] = useState();
  function handleClickFavorite() {
    setIsFavorite(!isFavorite);
  }
  return (
    <div>
      <button
        id="favorite"
        type="button"
        onClick={handleClickFavorite}
        className={isFavorite ? "isFavorite" : "notFavorite"}
        label="like"
      />
    </div>
  );
}

export default Post;
