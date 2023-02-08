import React from "react";
import PropTypes from "prop-types";
import CreateComment from "../CreateComment/CreateComment";
import classes from "./CommunicationPage.module.css";
import Card from "../../UI/Card";
import defaultAvatar from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
import Like from "../Like";
import commentBubble from "../../assets/chat-bubble.png";
import enedisLogo from "../../assets/enedis-logo.png";

function CommunicationPage({
  id,
  firstname,
  lastname,
  title,
  content,
  avatar,
  city,
  image,
  children,
  onSubmit,
}) {
  const onSave = (comment) => {
    const articleId = id;
    onSubmit(comment, articleId);
  };
  return (
    <Card key={id} classNames={classes.article}>
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
            <img src={commentBubble} alt="comment-bubble" />
            <p className="commentcount">0</p>
          </div>
          <div>
            <Like />
            J'aime
          </div>
        </div>
      </div>
      <section className={classes.social}>
        <div className={classes["comment-section"]}>{children}</div>
        <CreateComment onSave={onSave} />
      </section>
    </Card>
  );
}

CommunicationPage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  city: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
};

CommunicationPage.defaultProps = {
  avatar: defaultAvatar,
  firstname: "Utilisateur",
  lastname: "",
  city: "Ville",
  image: enedisLogo,
  children: null,
  onSubmit: () => {},
};

export default CommunicationPage;
