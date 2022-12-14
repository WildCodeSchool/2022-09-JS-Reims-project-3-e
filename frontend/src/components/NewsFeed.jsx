import { useEffect, useState } from "react";
import CommunicationPlanCard from "./CommunicationPlanCard";
import "./NewsFeed.css";

function NewsFeed() {
  const [communicationPlans, setCommunicationPlans] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/articles`
    )
      .then((response) => response.json())
      .then((response) => {
        setCommunicationPlans(response);
      });
  }, []);
  return (
    <div>
      {communicationPlans.map((communicationPlan) => {
        return (
          <CommunicationPlanCard
            title={communicationPlan.title}
            content={communicationPlan.content}
            key={communicationPlan.id}
          />
        );
      })}
    </div>
  );
}

export default NewsFeed;
