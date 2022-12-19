import React from "react";
import PropTypes from "prop-types";

import CommunicationPlanCard from "./CommunicationPlanCard";
import "./NewsFeed.css";

function NewsFeed({ communicationPlans }) {
  return (
    <section className="content">
      {communicationPlans.map((communicationPlan) => {
        return (
          <CommunicationPlanCard
            title={communicationPlan.title}
            content={communicationPlan.content}
            key={communicationPlan.title}
          />
        );
      })}
    </section>
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
