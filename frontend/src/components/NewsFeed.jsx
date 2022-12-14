import PropTypes from "prop-types";
import CommunicationPlanCard from "./CommunicationPlanCard";
import "./NewsFeed.css";

function NewsFeed({ communicationPlans }) {
  return (
    <div>
      {communicationPlans.map((communicationPlan) => {
        return (
          <CommunicationPlanCard
            title={communicationPlan.title}
            content={communicationPlan.content}
            key={communicationPlan.title}
          />
        );
      })}
    </div>
  );
}

NewsFeed.propTypes = {
  communicationPlans: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default NewsFeed;
