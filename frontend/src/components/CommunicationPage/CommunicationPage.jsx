import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./CommunicationPage.module.css";
import Card from "../../UI/Card";
import defaultAvatar from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
import like from "../../assets/heart.png";
import paperPlane from "../../assets/paper-plane.png";
import commentBubble from "../../assets/chat-bubble.png";
import enedisLogo from "../../assets/enedis-logo.png";

function CommunicationPage({
  firstname,
  lastname,
  title,
  content,
  avatar,
  city,
  image,
  id,
}) {
  return (
    <Card classNames={classes.article}>
      <div className={classes.header}>
        <div>
          <img
            className={classes.avatar}
            src={avatar}
            alt=""
            onError={(e) => {
              e.currentTarget.src = defaultAvatar;
            }}
          />
          <div className={classes["header-text"]}>
            <h3>
              {(firstname, lastname)
                ? `${firstname} ${lastname}`
                : "Utilisateur"}
            </h3>
            <p>{city || "Ville"}</p>
          </div>
        </div>
        <div className={classes.date}>
          <p>5 jours</p>
        </div>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{content}</p>
        <img
          className={classes["content-cover"]}
          src={image || enedisLogo}
          alt="enedis-logo"
        />
        <div className={classes.interaction}>
          <div>
            <p>0</p>
            <img src={like} alt="like" />
          </div>
          <div>
            <p>0</p>
            <img src={commentBubble} alt="comment-bubble" />
          </div>
          <div>
            <button type="button">
              <img src={like} alt="like" />
              J'aime
            </button>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link to={`/articles/${id}`}>
          <input type="text" placeholder="Commenter" />
          <button type="button">
            <img src={paperPlane} alt="paper-plane" />
          </button>
        </Link>
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
  image: PropTypes.string,
  id: PropTypes.number.isRequired,
};

CommunicationPage.defaultProps = {
  avatar: defaultAvatar,
  firstname: "Utilisateur",
  lastname: "",
  city: "Ville",
  image: enedisLogo,
};

export default CommunicationPage;
