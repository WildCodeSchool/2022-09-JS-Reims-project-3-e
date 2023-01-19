import React from "react";
import PropTypes from "prop-types";
import classes from "./CommunicationPage.module.css";
import Card from "../../UI/Card";
import defaultAvatar from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
import like from "../../assets/heart.png";

function CommunicationPage({
  firstname,
  lastname,
  title,
  content,
  avatar,
  city,
}) {
  return (
    <Card classNames={classes.article}>
      <div className={classes.content}>
        <div className={classes.header}>
          <img
            className={classes.avatar}
            src={avatar}
            alt=""
            onError={(e) => {
              e.currentTarget.src = defaultAvatar;
            }}
          />
          <div>
            <h3>
              {(firstname, lastname)
                ? `${firstname} ${lastname}`
                : "Utilisateur"}
            </h3>
            <p>{city || "Ville"}</p>
          </div>
        </div>
        <div className={classes.info}>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className={classes.actions}>
          <div>
            <p>Commentaires: 0</p>
          </div>
          <div>
            <button className={classes["like-btn"]} type="button">
              <img src={like} className={classes.like} alt="like" />
              <p>: 0</p>
            </button>
          </div>
          <div>
            <button type="button" className={classes.button}>
              Répondre
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

CommunicationPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  city: PropTypes.string,
};

CommunicationPage.defaultProps = {
  avatar: defaultAvatar,
  firstname: "Utilisateur",
  lastname: "",
  city: "Ville",
};

export default CommunicationPage;
