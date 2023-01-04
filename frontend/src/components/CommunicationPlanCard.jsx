import PropTypes from "prop-types";

import Like from "./Like";

export default function CommunicationPlanCard({
  title,
  content,
  image_url: imageUrl,
}) {
  return (
    <article className="article">
      <div className="profil">
        <img
          className="imageprofil"
          src="https://media-exp1.licdn.com/dms/image/D4E03AQEKkzhQP5r5lg/profile-displayphoto-shrink_800_800/0/1670411909070?e=1675900800&v=beta&t=QJDauJPYN2CGqSL-Ky0sPjnN9w09IyXjWoivLOlFQKg"
          alt="Avatar Profil"
        />
        <p>John Doe</p>
      </div>
      <img className="imageurl" src={imageUrl} alt="imageurl" />
      <h1>{title}</h1>
      <p>{content}</p>
      <Like isFavorite={false} />
    </article>
  );
}
CommunicationPlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
};
