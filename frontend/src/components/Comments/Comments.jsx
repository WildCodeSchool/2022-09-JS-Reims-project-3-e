import React from "react";
import propTypes from "prop-types";
import defaultProfilePic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

import classes from "./Comments.module.css";

function Comments({ comment }) {
  return (
    <div className={classes["comment-section"]}>
      <div className={classes.profile}>
        <img src={comment.author.avatar || defaultProfilePic} alt="avatar" />
        <div>
          <p className={classes.bio}>
            {comment.author.firstname} {comment.author.lastname}
          </p>
          <p className={classes.small}>{comment.author.city}</p>
        </div>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
}

export default Comments;

Comments.propTypes = {
  comment: propTypes.shape({
    author: propTypes.shape({
      firstname: propTypes.string,
      lastname: propTypes.string,
      city: propTypes.string,
      avatar: propTypes.string,
    }).isRequired,
    comment: propTypes.string,
  }),
};

Comments.defaultProps = {
  comment: {
    author: {
      firstname: "Utilisateur",
      lastname: "",
      city: "Ville",
      avatar: defaultProfilePic,
    },
  },
};
