import PropTypes from "prop-types";

export default function CommunicationPlanCard({ title, content }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
}
CommunicationPlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
