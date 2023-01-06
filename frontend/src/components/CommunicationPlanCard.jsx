import PropTypes from "prop-types";
import buttonedited from "../assets/buttonedited.png";
import comment from "../assets/comment.png";
import heart from "../assets/heart.png";
import Comment from "./Comment";
import Like from "./Like";
import "./NewsFeed.css";

export default function CommunicationPlanCard({
  title,
  content,
  image_url: imageUrl,
}) {
  return (
    <article className="article">
      <div className="profil">
        <div className="userprofil">
          <img
            className="imageprofil"
            src="https://media-exp1.licdn.com/dms/image/D4E03AQEKkzhQP5r5lg/profile-displayphoto-shrink_800_800/0/1670411909070?e=1675900800&v=beta&t=QJDauJPYN2CGqSL-Ky0sPjnN9w09IyXjWoivLOlFQKg"
            alt="Avatar Profil"
          />
          <div className="nameuser">
            <p>Simon B</p>
            <div className="cityandcompany">
              <p>Reims</p>
              <p>WCS</p>
            </div>
          </div>
        </div>
        <div className="userparameter">
          <p className="dateofpublish">5 jours</p>
          <img
            className="buttonedited"
            src={buttonedited}
            alt="icon edited and remove"
          />
        </div>
      </div>
      <img
        className="imagecontent"
        src="https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2018/12/10/node_20755/530170/public/2018/12/10/B9717886568Z.1_20181210094232_000%2BGERCIOLFT.1-0.jpg?itok=t6jVgxVZ1544431361"
        alt="imagecontent"
      />
      <div className="contentofpublication">
        <img className="imageurl" src={imageUrl} alt="imageurl" />
        <h1 className="titlecontent">{title}</h1>
        <p className="descriptioncontent">{content}</p>
      </div>
      <div className="buttonlikeandcomment">
        <div className="likeandcount">
          <p className="numberoflike"> 4 </p>
          <img src={heart} className="countoflike" alt="countoflike" />
        </div>
        <div className="buttonlikeandcomments">
          <div className="likes">
            <Like isFavorite={false} />
            <p className="styleoflike">J'aime</p>
          </div>
          <div className="comments">
            <img className="comment" src={comment} alt="comment" />
            <p className="styleofcomment">Je commente</p>
          </div>
        </div>
      </div>
      <Comment />
    </article>
  );
}
CommunicationPlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
};
